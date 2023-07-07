terraform {
  required_providers {
    planetscale = {
      source  = "koslib/planetscale"
      version = "~> 0.5"
    }
  }
}

variable "PLANETSCALE_SERVICE_TOKEN_ID" {} # See env.example.
variable "PLANETSCALE_SERVICE_TOKEN" {}    # See env.example.

provider "planetscale" {
  service_token_id = var.PLANETSCALE_SERVICE_TOKEN_ID
  service_token    = var.PLANETSCALE_SERVICE_TOKEN
}

resource "planetscale_database" "db" {
  organization = "emivespa"
  name         = "techtest"
}

output "planetscale_database_html_url" {
  value = planetscale_database.db.html_url
}
