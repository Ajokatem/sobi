output "acr_login_server" {
  value = azurerm_container_registry.acr.login_server
}

output "mysql_host" {
  value = azurerm_mysql_flexible_server.db.fqdn
}
