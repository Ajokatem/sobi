# Sobi 🌿

**Sobi** is a DevOps-powered web application that connects landowners with farmers in South Sudan to encourage sustainable agriculture using unused plots and Nile water.

---

## 🌍 Features

- Landowners and farmers can register and manage plots
- Users can select crops and log planting or watering
- Dashboard shows crop progress and irrigation reminders

---

## 🧰 Tech Stack

- Node.js + Express
- MySQL
- Docker
- GitHub Actions (CI/CD)
- Terraform (Azure IaC)
- Azure App Service, Azure Container Registry, Application Insights

---

## 🚀 Live URLs

- **Production:** [https://sobi-app.azurewebsites.net/](https://sobi-app.azurewebsites.net/)
- **Staging:** _Add your staging URL here if available_

---

## 🔧 Local Setup

1. **Clone the repo:**
   ```bash
   git clone https://github.com/Ajokatem/sobi.git
   cd sobi
   ```

2. **Copy environment variables:**
   - Create a `.env` file in `src/` with your DB and secret config.

3. **Run with Docker Compose:**
   ```bash
   docker-compose up --build
   ```
   - App: [http://localhost:3000/api/v1/health](http://localhost:3000/api/v1/health)

---

## ☁️ Cloud Deployment

- **Build and push Docker image:**
  ```bash
  docker build -t <acr-name>.azurecr.io/sobi-backend:latest .
  az acr login --name <acr-name>
  docker push <acr-name>.azurecr.io/sobi-backend:latest
  ```
- **Set Azure Web App to use the image from ACR.**

---

## 🔄 CI/CD Pipeline

- Automated with GitHub Actions:
  - Build, test, and scan on every push/PR
  - Pushes Docker image to Azure Container Registry
  - Deploys to Azure App Service
- See `.github/workflows/ci.yml` for details.

---

## 🔒 Security

- Dependency scanning with `npm audit` and `audit-ci`
- Container image scanning with Trivy
- Secrets managed via GitHub and Azure Key Vault
- See [SECURITY.md](./SECURITY.md) for full policy

---

## 📈 Monitoring

- Application Insights for real-time monitoring and alerts
- Logs and metrics available in Azure Portal

---

## 📜 CHANGELOG

See [CHANGELOG.md](./CHANGELOG.md) for release history.

---

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests.

---

## 📄 License

MIT

---

## 👩‍💻 Author

Ajok Atem

---

## 📹 Video Demo

- [YouTube Demo Link](#)  

---