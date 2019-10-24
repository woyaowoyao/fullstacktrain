
Steps for lab09
1.cd lab09/app
 run bellow commond to build spring-boot jar
  mvn clean install
2.run commond under /lab09/app
	docker build -t laidongshi/lab09 .
3.cd /lab09
- Run command `docker-compose up`
- Access to http://localhost/


4.run jenkins in docker and setup jenkins
	docker run -d -p 49001:8080 -v /docker_jenkins_home/:/var/jenkins_home/ --name jenkins jenkins:2.60.1
5.change code and push to github 
6.run job in jenkins,pull code from git and run maven tasks with shell
