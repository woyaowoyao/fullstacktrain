Assigment-2

1.Create a new maven project with default archetype.
	mvn archetype:generate -DgroupId=com.example -DartifactId=lab08 -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false 
2.Compile the project and generate jar/war file for the project using maven at command prompt.
3.Initialize the newly created project asa GIT repository
 	
	git init
	
4.Commit the repository to the internal GIT server. 
	git add assigment-2.MD
	git commit -m "first commit"
	git remote add origin https://github.com/woyaowoyao/fullstacktrain.git
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
