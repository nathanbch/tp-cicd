# TP CI/CD - Déploiement Web

## Présentation du projet
Ce projet a été réalisé dans le cadre d’un TP de déploiement web et de CI/CD.

L’objectif était de concevoir, containeriser, déployer et automatiser le déploiement d’une application web sur une machine virtuelle cloud.

Pour répondre au sujet, l’option choisie est :
- **deux services distincts qui communiquent entre eux**

Architecture retenue :
- **Backend** : Node.js / Express
- **Base de données** : PostgreSQL
- **Conteneurisation** : Docker
- **Orchestration locale** : Docker Compose
- **Orchestration sur la VM** : Kubernetes avec k3s
- **Registre d’images** : Docker Hub
- **CI/CD** : GitHub Actions
- **Cloud** : Microsoft Azure

---

## Architecture du projet

L’application est composée de deux services :
- un service backend Node.js / Express
- un service base de données PostgreSQL

Le backend expose deux routes principales :
- `GET /health`
- `GET /users`

La route `/health` permet de vérifier que l’application tourne correctement.  
La route `/users` permet de tester la connexion entre le backend et PostgreSQL.

---

## Structure du projet

```bash
tp-cicd/
├── .github/
│   └── workflows/
│       └── ci-cd.yml
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── app.test.js
│   │   ├── db.js
│   │   └── server.js
│   ├── .dockerignore
│   ├── Dockerfile
│   ├── package.json
│   └── package-lock.json
├── k8s/
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── postgres-deployment.yaml
│   ├── postgres-service.yaml
│   └── secret.yaml
├── docker-compose.yml
├── README.md
└── rapport.docx