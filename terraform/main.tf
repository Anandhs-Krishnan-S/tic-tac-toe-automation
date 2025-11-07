terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
  }
  required_version = ">= 1.5.0"
}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "ttt_rg" {
  name     = "ttt-rg"
  location = "westeurope"
}

resource "azurerm_service_plan" "ttt_plan" {
  name                = "ttt-service-plan"
  location            = azurerm_resource_group.ttt_rg.location
  resource_group_name = azurerm_resource_group.ttt_rg.name
  os_type             = "Linux"
  sku_name            = "F1"
}

resource "azurerm_linux_web_app" "ttt_app" {
  name                = "tic-tac-toe-karnishwar1725"
  location            = azurerm_resource_group.ttt_rg.location
  resource_group_name = azurerm_resource_group.ttt_rg.name
  service_plan_id     = azurerm_service_plan.ttt_plan.id

  site_config {
    always_on = false
    application_stack {
      node_version = "18-lts"
    }
  }
}
