Build Image:
1. build docker image `docker build -t harbor.seasalt.ai/frontend/ngchat:{VERSION} -f frontend.dockerfile .`
2. push docker image `docker push harbor.seasalt.ai/frontend/ngchat:{VERSION}`

Prepare:

1. You will need Azure account with available subscription and AKS permissions
2. Install az cli, different kinds of OS would have different installation way, see [Reference](https://docs.microsoft.com/zh-tw/cli/azure/install-azure-cli)
3. Install kubectl of Azure: `az aks install-cli`
4. Login Azure account by az cli: `az login`, you would be asked to enter authorization code on [https://aka.ms/devicelogin](https://aka.ms/devicelogin)
5. Get credentials to access the cluster: `az aks get-credentials --name ngchat-dev-cluster2  --resource-group ngchat-dev-group`

Deploy:

1. Edit `k8s/homepage.deployment.yaml` to change docker image
2. Deploy deployment: `kubectl apply -f k8s/homepage.deployment.yaml`
3. Deploy ingress: `kubectl apply -f k8s/homepage.ingress.yaml`
4. Deploy service: `kubectl apply -f k8s/homepage.service.yaml`
