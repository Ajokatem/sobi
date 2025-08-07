output "acr_login_server" {
  value = azurerm_container_registry.ajokacr.login_server
}

output "webapp_url" {
  value = azurerm_app_service.webapp.default_site_hostname
}

output "mysql_fqdn" {
  value = azurerm_mysql_flexible_server.db.fqdn
}

output "resource_group_name" {
  value = azurerm_resource_group.main.name
}

output "app_insights_instrumentation_key" {
  value = azurerm_application_insights.appinsights.instrumentation_key
}