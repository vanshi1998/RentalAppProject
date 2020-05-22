#Start with a base image containing Java runtime
# FROM openjdk:8-jdk-alpine
FROM openjdk:11

# Add Maintainer Info
MAINTAINER Vanshika Agrawal <vanshikaagrawal1998@gmail.com>

# Add a volume pointing to /tmp
VOLUME /tmp

# Make port 8080 available to the world outside this container
EXPOSE 8000

# The application's jar file
ARG JAR_FILE=target/RentalApplication-0.0.1-SNAPSHOT.jar

# Add the application's jar to the container
ADD ${JAR_FILE} RentalApplication.jar

# Run the jar file 
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/RentalApplication.jar"]
