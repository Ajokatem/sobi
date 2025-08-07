# Sobi Project - Phase 2 Submission

## Live Public URL
https://sobi-app.azurewebsites.net/

> This is the publicly accessible backend API deployed to Azure App Service using Docker and Terraform.

---

## Screenshots of Provisioned Resources

### 1. Azure Resource Group
![Resource Group](./screenshots/Screenshot%202025-07-30%20172648.png)

### 2. Azure MySQL Flexible Server
![MySQL Server](./screenshots/mysql-server.png)

### 3. Azure Container Registry (ACR)
![Container Registry](./screenshots/Screenshot%202025-07-30%20174833.png)

### 4. Azure App Service (Web App)
![App Service](./screenshots/app-service.png)

### 5. Application Insights (Monitoring)
![App Insights](./screenshots/app-insights.png)

---

## Peer Review

### Pull Request Reviewed:
[Peer PR Reviewed](https://github.com/Abukduot/HerTech/pull/15)

### Review Summary:
I reviewed my peer’s Terraform configuration and Docker deployment setup. My comments included:
- Suggesting to use `terraform.tfvars` to separate sensitive data from main config.
- Pointing out a missing dependency link between App Service and ACR.
- Recommending use of output variables for resource URIs and credentials.

I also acknowledged well-structured resource naming and modularized Terraform scripts.

---

## Reflection

Phase 2 of this project provided deep insight into the challenges and power of Infrastructure as Code (IaC) and cloud deployment.

### Key Challenges Faced:
- Troubleshooting Terraform errors during ACR and App Service provisioning.
- Authenticating the App Service to pull from ACR securely using a managed identity.
- Dealing with the complexity of networking between Azure services (e.g., VNet and MySQL connection issues).
- Structuring the Dockerfile and Compose file to work across local and cloud environments.

### Lessons Learned:
- IaC helps standardize infrastructure but requires strong debugging skills.
- Clear environment variable and secret management is essential for secure and stable deployments.
- Azure's resource configuration is detailed and requires careful reading of the documentation.

Despite the complexity, this experience has strengthened my confidence in managing cloud deployments using Terraform, Docker, and Azure services.

---

## Monitoring & Security

### Application Insights
![App Insights](./screenshots/app-insights.png)

### Security Scan
![Trivy Scan](./screenshots/trivy-scan.png)

---

## Release Management

- All changes are tracked in [CHANGELOG.md](./CHANGELOG.md)
- Example commit: `feat: add health check endpoint`
- Conventional commits and versioning are followed for all releases.

---

## CI/CD Pipeline

![GitHub Actions](./screenshots/github-actions.png)

---

