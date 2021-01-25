# NodeJS and MySQL on Kubernetes
```
Set of commands to run :
1. cd kubernetes-nodejs-mysql\backend
2. npm run dev // Once done hit localhost:3005 or localhost:3005/hello or loclahost:3005/hello/somename
3. docker build -t k8s-hello-api:v1 .
4. docker container run -it k8s-hello-api:v1 sh // now check the url localhost:9191
5. push the image to registry , I am using hub.docker.com
6. Run minikube start
   cd ..
   cd kubernetes-manifests\
7. switch to kubernetes-manifests folder and run the below 
    a. kubectl apply -f pod.yaml
    b. kubectl apply -f mysql.yaml
    c. kubectl apply -f mysql-pv.yaml // wait for sometime and 
    d. kubectl get all or kubectl get pods,svc,deployments -o wide
8. Once all the components are in ready/running status, run minikube dashboard.
```

To start:

```
backend folder has index.js , Dockerfile
kubernetes-manifests folder has mysql.yaml and pod.yaml

backend folder :
  1. index.js file has all the javascript code // try to run npm run dev from this folder and see the app listening on 3005 port. just hit the url localhost:3005/ from your browser.
  2. Using Dockerfile here, we create an image and run the container with the image created.
    docker build -t k8s-hello-api:v1 . //you can use any name:latest tag with "." mandatory at the end.
    docker container run -it k8s-hello-api:v1 sh // runs the container using the image we create in the previous step. Hit the URL localhost:9191 from your browser, you will see the contents of your web app.
kubernetes-manifests folder:
  I am using minikube for the deployment.
   1.Run minikube start from terminal and this starts your minikube cluster.
   2.Switch to kubernetes-mainifests folder and run the below commands
     a. kubectl apply -f pod.yaml
     b. kubectl apply -f mysql.yaml
     c. kubectl apply -f mysql-pv.yaml
   3.Now check the components using kubectl get pods,deployments,svc . They should be in ready status.
   4. Once they are ready , do minikube dashboard, this will fireup a default browser showing all the components like deployment,services, pods etc.,
   
```

If you want to connect directly to your MySQL service from your host machine. Simply get an URL from minikube and use it as a hostname. Remember that the port is not going to be the default 3306 but the one specified in `mysql.yaml`.

```
minikube service mysql --url
```

## MySQL considerations

Create a user for your database with `'nodeuser'@'%'` with general scope as you can't guarantee what interal IP you will be connecting from.

```
CREATE DATABASE dbname;
CREATE USER 'dbuser'@'%' IDENTIFIED BY 'TODO_password';
GRANT ALL PRIVILEGES ON dbname.* TO 'dbuser'@'%';
FLUSH PRIVILEGES;

You can also alter any test/dev database user using

GRANT USER 'dbuser'@'%' IDENTIFIED BY 'TODO_password';
FLUSH PRIVILEGES;
```
