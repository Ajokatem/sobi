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

  version                  = "8.0.21"
  backup_retention_days    = 7

  storage {
    size_gb           = 20
    auto_grow_enabled = true
  }

}