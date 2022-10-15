# UADE - Arquitectura de Aplicaciones - 2022

Demo for university asignature *Application Architectures*.

The idea of this repo was to demonstrate how Kubernetes NodePort services work as a load balancer. In order to show that, I made this simple app which only requests time and IP to a server. When Kubernetes deploys replicas of this app, the server will response different IPs

To run this example using Minikube (as I did in the presentation) and assuming that Minikube is working normally, we should:

```sh
git clone https://github.com/JuanQP/uade-aa-demo.git
cd uade-aa-demo
docker build --tag uade-aa-demo # Build and tag this app
minikube image load uade-aa-demo # Make docker image visible in Minikube cluster
kubectl apply -f uade-aa-demo-deployment.yml # Deploy our app
```

Now the app is visible on your Minikube cluster IP and port `30100`, and different replicas of the app are responding!

![uade-aa-demo-preview](https://user-images.githubusercontent.com/11776905/195985376-f8a97ca0-025f-49b9-95e3-e230439e99cb.gif)
