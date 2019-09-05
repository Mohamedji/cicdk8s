# cicdk8s
This is a demo branch for CICD with Jenkins &amp; Kubernetes


## Pre-Requisites
1. Kubernetes Cluster
2. Helm & Persistent Storage
3. Github Repo with Dockerfile

## Deploy Jenkins on kubernetes
``helm repo add bitnami https://charts.bitnami.com/bitnami``

``helm install bitnami/jenkins --name jenkins --namespace jenkins``

