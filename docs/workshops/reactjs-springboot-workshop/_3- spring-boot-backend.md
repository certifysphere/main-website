---
sidebar_position: 3
id: springboot-backend-rest-api
title: springboot-backend-rest-api
tags:
  - springboot-backend-rest-api
---

# Chapter 2: Spring Boot Backend REST API for Public Toilet CRUD Operations

In this chapter, we will create a Spring Boot application that provides a REST API for performing CRUD operations on public toilets. We will use an in-memory H2 database to store the data. In the next chapter, we will replace the in-memory data store with an actual database.

## Step 1: Creating a New Spring Boot Project
To get started, let's create a new Spring Boot project using the Spring Initializr. Follow the steps below:

1. Go to start.spring.io.
2. Choose the following project options:
   - Project: Maven Project
   - Language: Java
   - Spring Boot: 2.5.0
   - Group: com.certifysphere
   - Artifact: public-toilet-api
   - Packaging: Jar
   - Java: 11
3. Click on "Add Dependencies" and add the following dependencies:
   - Spring Web
   - Spring Data JPA
   - H2 Database
4. Click on "Generate" to download the project.

## Step 2: Defining the Entity Class
Next, let's define the entity class that represents a public toilet. Create a new class called "PublicToilet" in the "com.certifysphere.publictoiletapi" package and add the following code:

```java
package com.certifysphere.publictoiletapi.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class PublicToilet {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String location;
    private int rating;

    public PublicToilet() {}

    public PublicToilet(String name, String location, int rating) {
        this.name = name;
        this.location = location;
        this.rating = rating;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    @Override
    public String toString() {
        return "PublicToilet{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", location='" + location + '\'' +
                ", rating=" + rating +
                '}';
    }
}
```

In this code, we define a "PublicToilet" entity class with four properties: "id", "name", "address", and "rating". The "@Entity" annotation tells Spring that this class should be mapped to a database table.

## Step 3: Creating the Repository
Now that we have defined the entity class, let's create a repository interface for it. Create a new interface called "PublicToiletRepository" in the "com.certifysphere.publictoiletapi.repository" package and add the following code:

```java
package com.certifysphere.publictoiletapi.repository;

import com.certifysphere.publictoiletapi.model.PublicToilet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PublicToiletRepository extends JpaRepository<PublicToilet, Long>

```

In this code, we define a "PublicToiletRepository" interface that extends the "JpaRepository" interface provided by Spring Data JPA. This interface provides methods for performing CRUD operations on the "PublicToilet" entity.

# Step 4: Creating the Service 
```java
package com.certifysphere.service;

import com.certifysphere.model.Toilet;
import com.certifysphere.repository.ToiletRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ToiletService {

    @Autowired
    private ToiletRepository toiletRepository;

    public List<Toilet> getAllToilets() {
        return toiletRepository.findAll();
    }

    public Optional<Toilet> getToiletById(Long id) {
        return toiletRepository.findById(id);
    }

    public Toilet createOrUpdateToilet(Toilet toilet) {
        return toiletRepository.save(toilet);
    }

    public void deleteToiletById(Long id) {
        toiletRepository.deleteById(id);
    }
}

```
## Step 4: Creating the Controller
Next, let's create a REST controller for our API. Create a new class called "PublicToiletController" in the "com.certfysphere.publictoiletapi.controller" package and add the following code:

```java
package com.certifysphere.controller;

import com.certifysphere.model.Toilet;
import com.certifysphere.service.ToiletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/toilets")
public class ToiletController {

    @Autowired
    ToiletService toiletService;

    @GetMapping
    public ResponseEntity<List<Toilet>> getAllToilets() {
        List<Toilet> list = toiletService.getAllToilets();
        return new ResponseEntity<List<Toilet>>(list, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Toilet> getToiletById(@PathVariable("id") long id) {
        Toilet toilet = toiletService.getToiletById(id);
        return new ResponseEntity<Toilet>(toilet, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Toilet> createToilet(@RequestBody Toilet toilet) {
        Toilet newToilet = toiletService.createToilet(toilet);
        return new ResponseEntity<Toilet>(newToilet, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Toilet> updateToilet(@PathVariable("id") long id, @RequestBody Toilet toilet) {
        Toilet updatedToilet = toiletService.updateToilet(id, toilet);
        return new ResponseEntity<Toilet>(updatedToilet, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteToilet(@PathVariable("id") long id) {
        toiletService.deleteToilet(id);
        return new ResponseEntity<String>("Toilet deleted successfully!", HttpStatus.OK);
    }

}
```
## Testing 
We can test the Public Toilets Services CRUD operations of the service using curl or Postman. 
Here are some examples:

- GET all public toilets:

```sh
curl -X GET http://localhost:8080/api/public-toilets
```

- GET a specific public toilet by id:

```sh
curl -X GET http://localhost:8080/api/public-toilets/{id}
```

- POST a new public toilet:

```sh
curl -X POST \
  http://localhost:8080/api/public-toilets \
  -H 'Content-Type: application/json' \
  -d '{
        "name": "Public Toilet 1",
        "location": "123 Main Street",
        "isAvailable": true
    }'
```

- PUT update an existing public toilet:

```sh
curl -X PUT \
  http://localhost:8080/api/public-toilets/{id} \
  -H 'Content-Type: application/json' \
  -d '{
        "name": "Updated Public Toilet",
        "location": "456 New Street",
        "isAvailable": false
    }'
```

- DELETE a public toilet by id:

```sh
curl -X DELETE http://localhost:8080/api/public-toilets/{id}
```
### Unit Testing 
Here are some examples of unit tests that you can write for the REST services:

1. Test to verify if the service returns all toilets:

```java
@Test
public void getAllToiletsTest() {
    List<Toilet> toiletList = Arrays.asList(
        new Toilet("Mumbai", "Churchgate", "Western"),
        new Toilet("Delhi", "Red Fort", "North"),
        new Toilet("Bangalore", "MG Road", "South")
    );
    Mockito.when(toiletRepository.findAll()).thenReturn(toiletList);
    List<Toilet> result = toiletService.getAllToilets();
    assertEquals(3, result.size());
}
```

2. Test to verify if the service returns a toilet by id:

```java
@Test
public void getToiletByIdTest() {
    Toilet toilet = new Toilet("Mumbai", "Churchgate", "Western");
    Mockito.when(toiletRepository.findById(1L)).thenReturn(Optional.of(toilet));
    Toilet result = toiletService.getToiletById(1L);
    assertEquals("Mumbai", result.getCity());
    assertEquals("Churchgate", result.getLocation());
    assertEquals("Western", result.getZone());
}
```

3. Test to verify if the service adds a new toilet:

```java
@Test
public void addNewToiletTest() {
    Toilet toilet = new Toilet("Mumbai", "Churchgate", "Western");
    Mockito.when(toiletRepository.save(toilet)).thenReturn(toilet);
    Toilet result = toiletService.addNewToilet(toilet);
    assertEquals("Mumbai", result.getCity());
    assertEquals("Churchgate", result.getLocation());
    assertEquals("Western", result.getZone());
}
```

These are just some basic examples of unit tests. You can add more tests to verify different scenarios and edge cases.