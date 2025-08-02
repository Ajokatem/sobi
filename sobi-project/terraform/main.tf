resource "azurerm_resource_group" "main" {
  name     = var.resource_group
  location = var.location
}

resource "azurerm_container_registry" "acr" {
  name                = var.acr_name
  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location
  sku                 = "Basic"
  admin_enabled       = true
}

resource "azurerm_mysql_flexible_server" "db" {
  name                     = "sobimysql"
  location                 = var.location
  resource_group_name      = azurerm_resource_group.main.name
  administrator_login      = var.mysql_admin
  administrator_password   = var.mysql_password
  sku_name                 = "B_Standard_B1ms"
  version                  = "8.0.21"
  backup_retention_days    = 7

  storage {
    size_gb           = 20
    auto_grow_enabled = true
  }
}

resource "azurerm_service_plan" "plan" {
  name                = "sobi-plan"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  os_type             = "Linux"
  sku_name            = "B1"
}

resource "azurerm_application_insights" "appinsights" {
  name                = "sobi-appinsights"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  application_type    = "web"
}

resource "azurerm_linux_web_app" "webapp" {
  name                = "sobi-api"
  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location
  service_plan_id     = azurerm_service_plan.plan.id

  site_config {}

  app_settings = {
    "WEBSITES_PORT"                        = "3000"
    "DB_HOST"                              = azurerm_mysql_flexible_server.db.fqdn
    "DB_USER"                              = var.mysql_admin
    "DB_PASSWORD"                          = var.mysql_password
    "DB_NAME"                              = "sobi_db"
    "APPINSIGHTS_INSTRUMENTATIONKEY"       = azurerm_application_insights.appinsights.instrumentation_key
    "APPLICATIONINSIGHTS_CONNECTION_STRING" = azurerm_application_insights.appinsights.connection_string
  }
}