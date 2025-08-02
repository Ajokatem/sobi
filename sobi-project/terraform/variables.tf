variable "resource_group" {
  description = "The name of the resource group"
  default     = "sobi-rg"
}

variable "location" {
  description = "Azure region"
  default     = "southafricanorth"
}

variable "mysql_admin" {
  description = "MySQL admin username"
  default     = "adminuser"
}

variable "mysql_password" {
  description = "MySQL admin password"
  sensitive   = true
}

variable "acr_name" {
  description = "Azure Container Registry name"
  default     = "sobiacr"
}