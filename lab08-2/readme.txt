Assigment-1
Q&A
1.At command prompt, what will be command to generate archetypes?Run this command so that you can generate the list of archetypes.
A:
mvn archetype:crawl
mvn archetype:update-local-catalog 

2.At command prompt, what will be command to create a new maven projectwith archetype whose description is following:a.”A basic starter template using springboot, jpa data, thymeleaf and MVC”b.Run this command with the number for correct archetype so that new default project is created with springboot, jpa, thymeleaf and MVC.
A:
mvn archetype:generate -DgroupId=com.example -DartifactId=lab08 -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false -Ddescription=A basic starter template using springboot, jpa data, thymeleaf and MVC  

3.Once the project is created with the required template:
a.What will be the command to compile the project?
A:
mvn clean compile

 b.What will be the command to  package the built project?
A:
mvn clean package
 c.What will be command to execute the jar which is created by above command? i.After executing the jar, you should be able to test the REST APIin any browser window.
A:
mvn spring-boot:run
#java  -jar lab08-0.0.1-SNAPSHOT.jar 
http://localhost:8080/lab08-0.0.1-SNAPSHOT/hello
 d.What will be command to clean all the compiled class files and jar files in target folder?
A:
mvn clean
 e.Change POM.xml to create war executable in place of jar executable in the above project. Run the command to create .war executable
A:
mvn clean install

http://localhost:8080/lab08-0.0.1-SNAPSHOT/hello


Assigment-2

1.Create a new maven project with default archetype.
	mvn archetype:generate -DgroupId=com.example -DartifactId=lab08 -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false 
2.Compile the project and generate jar/war file for the project using maven at command prompt.
3.Initialize the newly created project asa GIT repository
 	
	git init
	
4.Commit the repository to the internal GIT server. 
	git add assigment-2.md
	git commit -m "first commit"
	git remote add origin https://github.com/woyaowoyao/fullstacktrain-lab08.git
	git push -u origin master
	
5.Currently all files are committed to remote repository. Configure the local repository such that target folder is not committed from local repository to remote repository.
   add /target/ into file .gitignore 
   
6.Delete the “target” folder from the remote repository which was committed in step 4.7.
	Create 	a new branch “welcomeapi” in the local repository.
	a.Make changes to the source code i.e. add a new url (/welcome) to the rest controller
	b.Now, push the change from local repository to remote repository in the branch “welcomeapi”
	c.You must not push these changes to main branch in remote repository.
	d.Locally, merge the changes done welcomeapi branch to main branch. 
	e.Push the changes from local repository to remote repository.
	f.Once the changes are merged and pushedto the remote copy of repository on GIT server, delete the branch welcomeapi.


