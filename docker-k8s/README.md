# Public web sites

## Cluster wiser actions (only needed once)

### Install Ingress-nginx for a OVH cluster
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update
helm -n ingress-nginx install ingress-nginx ingress-nginx/ingress-nginx --create-namespace

### Install cert-manager for a OVH cluster
kubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v1.5.3/cert-manager.yaml
