variable "resource_group" {
  description = "The name of the Azure Resource Group"
  type        = string
}

variable "location" {
  description = "Azure region"
  type        = string
  default     = "East US"
}

variable "acr_name" {
  description = "Azure Container Registry name"
  type        = string
}

variable "mysql_admin" {
  description = "MySQL admin username"
  type        = string
}

variable "mysql_password" {
  description = "MySQL admin password"
  type        = string
  sensitive   = true
}

variable "webapp_name" {
  description = "Azure Web App name"
  type        = string
}

# Add more variables as needed for your setup