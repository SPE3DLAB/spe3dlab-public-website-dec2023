#!/bin/bash

# Define the required context and namespace
REQUIRED_CONTEXT="kubernetes-admin@websites"
REQUIRED_NAMESPACE="spe3dlab-website-namespace"

# Get the current context and namespace
CURRENT_CONTEXT=$(kubectl config current-context)
CURRENT_NAMESPACE=$(kubectl config view --minify --output 'jsonpath={..namespace}')

# Check if the current context and namespace match the required context and namespace
if [ "$CURRENT_CONTEXT" != "$REQUIRED_CONTEXT" ]; then
    echo "Error: You are in the '$CURRENT_CONTEXT' context instead of the '$REQUIRED_CONTEXT' context."
    exit 1
fi

if [ "$CURRENT_NAMESPACE" != "$REQUIRED_NAMESPACE" ]; then
    echo "Error: You are in the '$CURRENT_NAMESPACE' namespace instead of the '$REQUIRED_NAMESPACE' namespace."
    exit 1
fi

# Ask user to give GitHub token and store it in CR_PAT variable
read -sp "Enter your GitHub token for deploying to ghcr.io: " CR_PAT
echo

# Build the angular app for production, default language
ng build --configuration production

# Check the exit code of the previous command, exit if failed
if [ $? -ne 0 ]; then
    echo "Angular build for default language failed. Exiting."
    exit 1
fi

# Copy builds to docker-k8s/dist
cp -r dist/ docker-k8s/

# Move to the folder where the docker/k8s resources are
cd docker-k8s/

# Build the image using build-docker-image.sh
./build-docker-image.sh

# Tag the newly built image
docker tag spe3dlab-public-website-server-nginx:latest ghcr.io/spe3dlab/spe3dlab-public-website-server-nginx:latest

# Push the image to ghcr
docker login ghcr.io -u vlaugier -p "$CR_PAT"
docker push ghcr.io/spe3dlab/spe3dlab-public-website-server-nginx:latest

# Check kubernetes environment variables and context
kubectl config use-context kubernetes-admin@websites --namespace=spe3dlab-website-namespace

# Rollout
# kubectl rollout restart deployment/spe3dlab-public-website-server-nginx
