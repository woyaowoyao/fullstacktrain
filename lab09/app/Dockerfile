FROM maven:3.5-jdk-8
VOLUME  /tmp
ADD ./target/com.laidongshi-1.5.8.RELEASE.jar app.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
