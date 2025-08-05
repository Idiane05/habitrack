# HabitTrack

A habit tracking web application built with **React (frontend)** and **Node.js + Express (backend)**, fully containerized and manually deployed to Azure.

---

##  Docker-Based Setup Instructions

This project is fully containerized. You can run it locally using Docker or deploy it manually to the cloud.

###  Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli) (for manual deployment)

---

##  Build and Run Locally

### Option 1: Run using Docker CLI

```bash
# Build Frontend
cd client
docker build -t habitrack-client .

# Build Backend
cd ../server
docker build -t habitrack-server .

# Run Backend
docker run -p 5000:5000 habitrack-server

# Run Frontend
docker run -p 80:80 habitrack-client
```

### Option 2: Run using Docker Compose

Ensure you are in the root directory where `docker-compose.yml` is located.

```bash
docker-compose up --build
```

- Frontend: http://localhost  
- Backend: http://localhost:5000

---

##  Manual Cloud Deployment (Azure)

This app has been manually deployed using Azure CLI and Azure Container Registry (ACR).

###  Deployed Services

- **Container Registry**: [habitrack123.azurecr.io](https://habitrack123.azurecr.io)
- **Backend App**: [https://habitrack-backend.azurewebsites.net](https://habitrack-backend.azurewebsites.net)
- **Frontend App**: [https://habitrack-frontend.azurewebsites.net](https://habitrack-frontend.azurewebsites.net)

---

##  Project Structure

```
habitrack/
├── client/               # React frontend with Dockerfile
├── server/               # Express backend with Dockerfile
├── docker-compose.yml    # Container orchestration
├── README.md             # Project documentation
└── phase.md              # Phase 2 submission content
```

---

## Screenshots

Here is the successful deployment on Azure App Service:

![Deployment Screenshot](C:\Users\Administrator\Documents\GitHub\habitrack\screenshoot\backendAZURE.png)
![Deployment Screenshot](C:\Users\Administrator\Documents\GitHub\habitrack\screenshoot\frontendAZURE.png)




---

##  Live Application Links

-  **Frontend**: [https://habitrack-frontend.azurewebsites.net](https://habitrack-frontend.azurewebsites.net)
-  **Backend**: [https://habitrack-backend.azurewebsites.net](https://habitrack-backend.azurewebsites.net)

---

##  Peer Review

Pull Request reviewed: [Insert PR link here]

---

##  Reflection

Check the [phase.md](./phase.md) file for a summary of the challenges encountered during Infrastructure as Code (IaC) and manual deployment.

---

##  Deployment Info

- Deployment Date: 2025-08-05
- Manual deployment via Azure CLI (no Terraform used)

---

##  License

MIT License
