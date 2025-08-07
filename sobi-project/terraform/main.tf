resource "azurerm_resource_group" "main" {
  name     = var.resource_group
  location = var.location
}

resource "azurerm_container_registry" "ajokacr" {
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

  version                  = "8.0.21"
  backup_retention_days    = 7

  storage {
    size_gb           = 20
    auto_grow_enabled = true
  }
}

resource "azurerm_app_service_plan" "main" {
  name                = "${var.resource_group}-plan"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  kind                = "Linux"
  reserved            = true

  sku {
    tier = "Basic"
    size = "B1"
  }
}

resource "azurerm_app_service" "webapp" {
  name                = var.webapp_name
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  app_service_plan_id = azurerm_app_service_plan.main.id

  site_config {
    linux_fx_version = "DOCKER|${azurerm_container_registry.ajokacr.login_server}/sobi-backend:latest"
    always_on        = true
  }

  app_settings = {
    WEBSITES_PORT = "3000"
    DOCKER_REGISTRY_SERVER_URL      = "https://${azurerm_container_registry.ajokacr.login_server}"
    DOCKER_REGISTRY_SERVER_USERNAME = azurerm_container_registry.ajokacr.admin_username
    DOCKER_REGISTRY_SERVER_PASSWORD = azurerm_container_registry.ajokacr.admin_password

    # Database environment variables
    DB_HOST     = azurerm_mysql_flexible_server.db.fqdn
    DB_USER     = var.mysql_admin
    DB_PASSWORD = var.mysql_password
    DB_NAME     = "sobi_db"

    # Application Insights
    APPINSIGHTS_INSTRUMENTATIONKEY = azurerm_application_insights.appinsights.instrumentation_key
  }
}

resource "azurerm_application_insights" "appinsights" {
  name                = "${var.resource_group}-ai"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  application_type    = "web"
}