output "resource_group_name" {
  value = azurerm_resource_group.main.name
}

output "acr_login_server" {
  value = azurerm_container_registry.acr.login_server
}

output "webapp_name" {
  value = azurerm_linux_web_app.webapp.name
}

output "mysql_fqdn" {
  value = azurerm_mysql_flexible_server.db.fqdn
}