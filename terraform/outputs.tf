output "webapp_name" {
  value = azurerm_linux_web_app.ttt_app.name
}
output "webapp_url" {
  value = "https://${azurerm_linux_web_app.ttt_app.default_hostname}"
}
