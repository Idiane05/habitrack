

###  `phase.md`

````md
# Phase 2 Summary: IaC, Containerization & Manual Deployment

##  Live Public URL
My application is live and running at the following URL:

🔗 [https://habitrack-backend.azurewebsites.net](https://habitrack-backend.azurewebsites.net)
🔗 [https://habitrack-client.azurewebsites.net/](https://habitrack-client.azurewebsites.net/)




##  Containerization

I created a `Dockerfile` for both the client and server, and used a `docker-compose.yml` for local development. The app was successfully built and run locally using Docker.

Commands used:
```bash
docker build -t habitrack-server ./server
docker build -t habitrack-client ./client
docker-compose up
````

##  Manual Deployment Summary

Even though Terraform setup had issues and was not used in this deployment, I manually created and configured all necessary cloud resources via the Azure CLI:

* ✅ Resource Group: `habitrack-rg`
* ✅ Azure Container Registry (ACR): `habitrack123.azurecr.io`
* ✅ Azure App Service Plan: `habitrack-plan`
* ✅ Azure Web App (Linux): `habitrack-backend`

Steps followed:

1. Created all resources via CLI.
2. Built and pushed Docker image to ACR.
3. Deployed backend via `az webapp create` and container config set via `az webapp config container set`.
4. Verified app is running live on the public URL above.

##  Screenshots

### 1. Azure Resource Group

![Resource Group](screenshots/resource-group.png)

### 2. Azure Container Registry

![ACR](screenshots/container-registry.png)

### 3. Web App Running

![Web App Running](screenshots/webapp-running.png)

##  Peer Review

I reviewed the pull request for a peer’s habit tracking app:
🔗 [Link to PR Review](https://github.com/example-peer/habitrack/pull/5)

##  Reflection

This phase was both rewarding and challenging. While containerization was straightforward with Docker, I ran into multiple issues trying to implement Terraform — particularly when pushing code with large or cached `.terraform` directories.

Due to these issues, I opted to complete the deployment manually using Azure CLI, which worked well and deepened my understanding of cloud provisioning without automation tools.

### Key Learnings:

* Importance of clean `.gitignore` to avoid pushing large files
* Practical steps of provisioning cloud services using CLI
* How to troubleshoot container deployment errors
* The value of breaking work into phases and tracking progress on a Kanban board

```


