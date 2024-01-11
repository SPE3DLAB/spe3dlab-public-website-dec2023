# HOWTO deploy to Kubernetes

## Setup and first deployment
- Copy folder `docker-k8s` from another project
- Copy `build-and-deploy-to-k8s.sh` from another project
- Replace `orfead.org` by `spe3dlab.org`
- Replace `orfead` by `spe3dlab`
- Removed all occurences of '-2023'
- Build the application for production
- Adjust paths in `build-and-deploy-to-k8s.sh`, `docker-k8s/default.conf`, `docker-k8s/Dockerfile`
- Switch to the correct namespace `kctx`
- Create the namespace `k apply -f docker-k8s/kubernetes/namespace.yaml`
- Create the secret for pulling the images from GHCR:
```
kubectl create secret docker-registry ghcr-secret --docker-server=ghcr.io --docker-username=<username> --docker-password=<token>
```
where `<username>` and `<token>` are your GitHub username and personal access token respectively

- Execute manually the steps of `build-and-deploy-to-k8s.sh` except the last one (the rollout)

After pushing the image to GHCR, you can check that it is there at (https://github.com/orgs/SPE3DLAB/packages)

- `k apply -f docker-k8s/kubernetes`

## Following deployments
Execute `build-and-deploy-to-k8s.sh`
