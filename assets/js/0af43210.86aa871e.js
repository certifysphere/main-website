"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8957],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(i),h=o,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return i?n.createElement(m,a(a({ref:t},c),{},{components:i})):n.createElement(m,a({ref:t},c))}));function m(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<r;p++)a[p]=i[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},920:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=i(7462),o=(i(7294),i(3905));const r={sidebar_position:3,id:"springboot-rest-services-part-2",title:"Springboot Rest Services - Part-2",tags:["springboot","rest services"]},a="Chapter 2: Building a Spring Boot Backend REST API for CRUD Operations - Part-2",l={unversionedId:"labs/workshops/react-springboot-Workshop/springboot-rest-services-part-2",id:"labs/workshops/react-springboot-Workshop/springboot-rest-services-part-2",title:"Springboot Rest Services - Part-2",description:"Spring Application",source:"@site/docs/labs/workshops/react-springboot-Workshop/4-springboot-rest-services-part-2.md",sourceDirName:"labs/workshops/react-springboot-Workshop",slug:"/labs/workshops/react-springboot-Workshop/springboot-rest-services-part-2",permalink:"/docs/labs/workshops/react-springboot-Workshop/springboot-rest-services-part-2",draft:!1,tags:[{label:"springboot",permalink:"/docs/tags/springboot"},{label:"rest services",permalink:"/docs/tags/rest-services"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"springboot-rest-services-part-2",title:"Springboot Rest Services - Part-2",tags:["springboot","rest services"]},sidebar:"labsSidebar",previous:{title:"Springboot Rest Services - Part-1",permalink:"/docs/labs/workshops/react-springboot-Workshop/springboot-rest-services-part-1"},next:{title:"Integrating React UI with Spring Rest Services",permalink:"/docs/labs/workshops/react-springboot-Workshop/react-calling-spring-rest-services"}},s={},p=[{value:"Spring Application",id:"spring-application",level:2},{value:"Controller:",id:"controller",level:3},{value:"Service:",id:"service",level:3},{value:"Repository:",id:"repository",level:3},{value:"Step 1: Defining the Entity Class",id:"step-1-defining-the-entity-class",level:2},{value:"Step 2: Creating the Repository",id:"step-2-creating-the-repository",level:2},{value:"Step 3: Creating the Service",id:"step-3-creating-the-service",level:2},{value:"Step 4: Creating the Controller",id:"step-4-creating-the-controller",level:2},{value:"Testing",id:"testing",level:2},{value:"Rest API Testing",id:"rest-api-testing",level:3},{value:"Unit Testing",id:"unit-testing",level:3},{value:"Github Repo",id:"github-repo",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"chapter-2-building-a-spring-boot-backend-rest-api-for-crud-operations---part-2"},"Chapter 2: Building a Spring Boot Backend REST API for CRUD Operations - Part-2"),(0,o.kt)("h2",{id:"spring-application"},"Spring Application"),(0,o.kt)("p",null,"In any typical Spring application, we have the following classes and flow:"),(0,o.kt)("mermaid",{value:"flowchart LR;\nController--\x3eService--\x3eRepository--\x3eDatabase"}),(0,o.kt)("p",null,"Here's an explanation of each component in a REST API application:"),(0,o.kt)("h3",{id:"controller"},"Controller:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A controller is responsible for handling incoming HTTP requests and returning appropriate responses."),(0,o.kt)("li",{parentName:"ul"},"It receives requests from clients, processes them, and invokes the corresponding service methods to perform the required business logic."),(0,o.kt)("li",{parentName:"ul"},"Controllers typically contain methods annotated with HTTP request mappings such as ",(0,o.kt)("inlineCode",{parentName:"li"},"@GetMapping"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"@PostMapping"),", etc., which define the endpoints and HTTP methods they handle."),(0,o.kt)("li",{parentName:"ul"},"They also handle request parameters, path variables, and request bodies, and may perform validation and conversion."),(0,o.kt)("li",{parentName:"ul"},"Controllers are responsible for marshaling/unmarshaling data, converting it to the appropriate format (e.g., JSON), and returning it in the response.")),(0,o.kt)("h3",{id:"service"},"Service:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A service class contains the business logic of the application."),(0,o.kt)("li",{parentName:"ul"},"It encapsulates the processing and manipulation of data, as well as any complex operations required to fulfill the requests."),(0,o.kt)("li",{parentName:"ul"},"Services are typically responsible for coordinating multiple repository operations to perform higher-level operations."),(0,o.kt)("li",{parentName:"ul"},"They may apply additional business rules, perform calculations, data transformations, or integrate with external services."),(0,o.kt)("li",{parentName:"ul"},"Services provide an abstraction layer between the controller and the repository, allowing for separation of concerns and reusability of code."),(0,o.kt)("li",{parentName:"ul"},"Service methods are typically called by the controller methods to perform the required operations.")),(0,o.kt)("h3",{id:"repository"},"Repository:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A repository class is responsible for data access and persistence."),(0,o.kt)("li",{parentName:"ul"},"It provides an abstraction over the underlying database or data storage technology."),(0,o.kt)("li",{parentName:"ul"},"Repositories handle the storage, retrieval, updating, and deletion of entities."),(0,o.kt)("li",{parentName:"ul"},"They interact with the database through the use of queries and provide methods for common data access operations such as CRUD (Create, Read, Update, Delete)."),(0,o.kt)("li",{parentName:"ul"},"Repositories may use an Object-Relational Mapping (ORM) tool like Hibernate or directly interact with the database using SQL queries."),(0,o.kt)("li",{parentName:"ul"},"They encapsulate the database-specific operations, allowing the service layer to remain independent of the underlying data storage implementation.")),(0,o.kt)("p",null,"By following this flow, the controller receives the HTTP requests, delegates the processing to the service layer, which in turn interacts with the repository for data access and manipulation. The repository then communicates with the underlying database to perform the requested operations."),(0,o.kt)("p",null,"Remember to complete ",(0,o.kt)("a",{parentName:"p",href:"/docs/labs/workshops/react-springboot-Workshop/springboot-rest-services-part-1"},"Part-1")," or download the source code from the git branch (as mentioned in Part-1) before starting with this chapter."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This chapter is part of the ReactJS and Spring Boot workshop series. It can be followed independently if you are interested in creating a simple Spring Boot application. However, for a comprehensive understanding, we recommend following the complete series, which can be found ",(0,o.kt)("a",{parentName:"p",href:"/docs/labs/workshops/react-springboot-Workshop/reactjs-springboot-overview"},"here"),".")),(0,o.kt)("h2",{id:"step-1-defining-the-entity-class"},"Step 1: Defining the Entity Class"),(0,o.kt)("p",null,'Next, let\'s define the entity class that represents a public toilet. Create a new class called "PublicToilet" in the "com.certifysphere.publictoiletservice" package and add the following code:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package com.certifysphere.publictoiletservice.model;\n\nimport javax.persistence.Entity;\nimport javax.persistence.GeneratedValue;\nimport javax.persistence.GenerationType;\nimport javax.persistence.Id;\n\n@Entity\npublic class PublicToilet {\n    @Id\n    @GeneratedValue(strategy = GenerationType.AUTO)\n    private Long id;\n    private String name;\n    private String city;\n    private String state;\n    private String country;\n\n    public PublicToilet() {\n    }\n\n    public PublicToilet(String name, String city, String state, String country) {\n        this.name = name;\n        this.city = city;\n        this.state = state;\n        this.country = country;\n    }\n\n    public Long getId() {\n        return id;\n    }\n\n    public void setId(Long id) {\n        this.id = id;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public String getCity() {\n        return city;\n    }\n\n    public void setCity(String city) {\n        this.city = city;\n    }\n\n    public String getState() {\n        return state;\n    }\n\n    public void setState(String state) {\n        this.state = state;\n    }\n\n    public String getCountry() {\n        return country;\n    }\n\n    public void setCountry(String country) {\n        this.country = country;\n    }\n    @Override\n    public String toString() {\n        return "PublicToilet [id=" + id + ", name=" + name + ", city=" + city + ", state=" + state + ", country="\n                + country + "]";\n    }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'In this code, we define a "PublicToilet" entity class with four properties: "id", "name", "city", "state" and "country". '),(0,o.kt)("li",{parentName:"ul"},'The "@Entity" annotation tells Spring that this class should be mapped to a database table.')),(0,o.kt)("h2",{id:"step-2-creating-the-repository"},"Step 2: Creating the Repository"),(0,o.kt)("p",null,'Now that we have defined the entity class, let\'s create a repository interface for it. Create a new interface called "PublicToiletRepository" in the "com.certifysphere.publictoiletservice.repository" package and add the following code:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"package com.certifysphere.publictoiletservice.repository;\n\nimport com.certifysphere.publictoiletservice.model.PublicToilet;\nimport org.springframework.data.jpa.repository.JpaRepository;\nimport org.springframework.stereotype.Repository;\n\n@Repository\npublic interface PublicToiletRepository extends JpaRepository<PublicToilet, Long>{\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'In this code, we define a "PublicToiletRepository" interface that extends the "JpaRepository" interface provided by Spring Data JPA. '),(0,o.kt)("li",{parentName:"ul"},'This interface provides methods for performing CRUD operations on the "PublicToilet" entity.')),(0,o.kt)("h2",{id:"step-3-creating-the-service"},"Step 3: Creating the Service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package com.certifysphere.publictoiletservice.service;\n\nimport com.certifysphere.publictoiletservice.model.PublicToilet;\nimport com.certifysphere.publictoiletservice.repository.PublicToiletRepository;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.stereotype.Service;\n\nimport java.util.List;\nimport java.util.Optional;\n\n@Service\npublic class PublicToiletService {\n\n    private final PublicToiletRepository publicToiletRepository;\n\n    @Autowired\n    public PublicToiletService(PublicToiletRepository publicToiletRepository) {\n        this.publicToiletRepository = publicToiletRepository;\n    }\n\n    public List<PublicToilet> getAllToilets() {\n        return publicToiletRepository.findAll();\n    }\n\n    public Optional<PublicToilet> getToiletById(Long id) {\n        return publicToiletRepository.findById(id);\n    }\n\n    public PublicToilet createToilet(PublicToilet toilet) {\n        return publicToiletRepository.save(toilet);\n    }\n\n    public PublicToilet updateToilet(Long id, PublicToilet updatedToilet) {\n        Optional<PublicToilet> existingToilet = publicToiletRepository.findById(id);\n\n        if (existingToilet.isPresent()) {\n            PublicToilet toilet = existingToilet.get();\n            toilet.setName(updatedToilet.getName());\n            toilet.setCity(updatedToilet.getCity());\n            toilet.setState(updatedToilet.getState());\n            toilet.setCountry(updatedToilet.getCountry());\n            return publicToiletRepository.save(toilet);\n        } else {\n            throw new RuntimeException("Toilet not found with id: " + id);\n        }\n    }\n\n    public void deleteToilet(Long id) {\n        publicToiletRepository.deleteById(id);\n    }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It is a service class responsible for handling the business logic related to the ",(0,o.kt)("inlineCode",{parentName:"li"},"PublicToilet")," entity."),(0,o.kt)("li",{parentName:"ul"},"The class is annotated with ",(0,o.kt)("inlineCode",{parentName:"li"},"@Service")," to indicate that it's a Spring service component."),(0,o.kt)("li",{parentName:"ul"},"It has a dependency on the ",(0,o.kt)("inlineCode",{parentName:"li"},"PublicToiletRepository")," interface, which is injected using constructor injection."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"getAllToilets()")," method retrieves all the public toilets from the repository by calling the ",(0,o.kt)("inlineCode",{parentName:"li"},"findAll()")," method."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"getToiletById(Long id)")," method retrieves a specific public toilet by its ID from the repository using the ",(0,o.kt)("inlineCode",{parentName:"li"},"findById()")," method."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"createToilet(PublicToilet toilet)")," method saves a new public toilet to the repository using the ",(0,o.kt)("inlineCode",{parentName:"li"},"save()")," method."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"updateToilet(Long id, PublicToilet updatedToilet)")," method updates an existing public toilet by its ID.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"It retrieves the existing toilet from the repository using the ",(0,o.kt)("inlineCode",{parentName:"li"},"findById()")," method."),(0,o.kt)("li",{parentName:"ul"},"If the toilet exists, its fields (name, city, state, country) are updated with the values from the ",(0,o.kt)("inlineCode",{parentName:"li"},"updatedToilet")," parameter."),(0,o.kt)("li",{parentName:"ul"},"The updated toilet is then saved back to the repository using the ",(0,o.kt)("inlineCode",{parentName:"li"},"save()")," method."),(0,o.kt)("li",{parentName:"ul"},"If the toilet does not exist, a ",(0,o.kt)("inlineCode",{parentName:"li"},"RuntimeException")," is thrown."))),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"deleteToilet(Long id)")," method deletes a public toilet from the repository by its ID using the ",(0,o.kt)("inlineCode",{parentName:"li"},"deleteById()")," method.")),(0,o.kt)("p",null,"These methods encapsulate the CRUD (Create, Read, Update, Delete) operations for the ",(0,o.kt)("inlineCode",{parentName:"p"},"PublicToilet")," entity and provide the necessary functionality to interact with the underlying data repository."),(0,o.kt)("h2",{id:"step-4-creating-the-controller"},"Step 4: Creating the Controller"),(0,o.kt)("p",null,'Next, let\'s create a REST controller for our API. Create a new class called "PublicToiletController" in the "com.certfysphere.publictoiletservice.controller" package and add the following code:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package com.certifysphere.publictoiletservice.controller;\n\nimport com.certifysphere.publictoiletservice.model.PublicToilet;\nimport com.certifysphere.publictoiletservice.service.PublicToiletService;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\n\nimport java.util.List;\nimport java.util.Optional;\n\n@RestController\n@RequestMapping("/api/public-toilets")\npublic class PublicToiletController {\n\n    private final PublicToiletService toiletService;\n\n    @Autowired\n    public PublicToiletController(PublicToiletService toiletService) {\n        this.toiletService = toiletService;\n    }\n\n    @GetMapping\n    public List<PublicToilet> getAllToilets() {\n        return toiletService.getAllToilets();\n    }\n\n    @GetMapping("/{id}")\n    public ResponseEntity<PublicToilet> getToiletById(@PathVariable Long id) {\n        \n        Optional<PublicToilet> toiletOptional = toiletService.getToiletById(id);\n        \n        if (toiletOptional.isPresent()) {\n            PublicToilet toilet = toiletOptional.get();\n            return ResponseEntity.ok(toilet);\n        } else {\n            return ResponseEntity.notFound().build();\n        }\n    }\n\n    @PostMapping\n    public PublicToilet createToilet(@RequestBody PublicToilet toilet) {\n        return toiletService.createToilet(toilet);\n    }\n\n    @PutMapping("/{id}")\n    public PublicToilet updateToilet(@PathVariable Long id, @RequestBody PublicToilet updatedToilet) {\n        return toiletService.updateToilet(id, updatedToilet);\n    }\n\n    @DeleteMapping("/{id}")\n    public void deleteToilet(@PathVariable Long id) {\n        toiletService.deleteToilet(id);\n    }\n}\n\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"PublicToiletController")," class is a Spring MVC controller responsible for handling HTTP requests related to the ",(0,o.kt)("inlineCode",{parentName:"li"},"PublicToilet")," entity."),(0,o.kt)("li",{parentName:"ul"},"The class is annotated with ",(0,o.kt)("inlineCode",{parentName:"li"},"@RestController"),", which combines the ",(0,o.kt)("inlineCode",{parentName:"li"},"@Controller")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"@ResponseBody")," annotations. It indicates that this controller will handle RESTful API requests and automatically serialize/deserialize the response/request bodies to/from JSON."),(0,o.kt)("li",{parentName:"ul"},"The base request mapping for the controller is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/toilets")," using the ",(0,o.kt)("inlineCode",{parentName:"li"},"@RequestMapping")," annotation."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"PublicToiletController")," has a dependency on the ",(0,o.kt)("inlineCode",{parentName:"li"},"PublicToiletService")," interface, which is injected using constructor injection."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"getAllToilets()")," method handles the HTTP GET request to retrieve all public toilets. It delegates the call to the ",(0,o.kt)("inlineCode",{parentName:"li"},"toiletService.getAllToilets()")," method and returns the list of toilets as the response."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"getToiletById(Long id)")," method handles the HTTP GET request to retrieve a specific public toilet by its ID. It delegates the call to the ",(0,o.kt)("inlineCode",{parentName:"li"},"toiletService.getToiletById(id)")," method and returns the toilet as the response."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"createToilet(PublicToilet toilet)")," method handles the HTTP POST request to create a new public toilet. It receives the toilet object as the request body (",(0,o.kt)("inlineCode",{parentName:"li"},"@RequestBody")," annotation), delegates the call to the ",(0,o.kt)("inlineCode",{parentName:"li"},"toiletService.createToilet(toilet)")," method, and returns the created toilet as the response."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"updateToilet(Long id, PublicToilet updatedToilet)")," method handles the HTTP PUT request to update an existing public toilet by its ID. It receives the updated toilet object as the request body (",(0,o.kt)("inlineCode",{parentName:"li"},"@RequestBody")," annotation), delegates the call to the ",(0,o.kt)("inlineCode",{parentName:"li"},"toiletService.updateToilet(id, updatedToilet)")," method, and returns the updated toilet as the response."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"deleteToilet(Long id)")," method handles the HTTP DELETE request to delete a public toilet by its ID. It delegates the call to the ",(0,o.kt)("inlineCode",{parentName:"li"},"toiletService.deleteToilet(id)")," method and returns no response (void).")),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("h3",{id:"rest-api-testing"},"Rest API Testing"),(0,o.kt)("p",null,"We can test the Public Toilets Services CRUD operations of the service using CURL or Postman."),(0,o.kt)("p",null,"Here are some examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"First, make sure the Spring Boot app is running. If it's not running already, follow the steps mentioned in ",(0,o.kt)("a",{parentName:"p",href:"/docs/labs/workshops/react-springboot-Workshop/springboot-rest-services-part-1#run-the-service"},"Part 1")," to run the service.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"POST a new public toilet:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X POST \\\nhttp://localhost:8080/api/public-toilets \\\n-H \'Content-Type: application/json\' \\\n-d \'{\n        "name": "Public Toilet 1",\n        "city": "City",\n        "state": "State",\n        "country": "Country"\n    }\'\n')),(0,o.kt)("p",{parentName:"li"},"  This should insert the new toilet record in the H2 Database. You can add 2-3 more records with different data.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"GET all public toilets:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://localhost:8080/api/public-toilets\n")),(0,o.kt)("p",{parentName:"li"},"  This should return all the PublicToilet records that were inserted in the previous step.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"GET a specific public toilet by id:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://localhost:8080/api/public-toilets/{id}\n")),(0,o.kt)("p",{parentName:"li"},"  Replace {id} with a number. The id is an auto-generated sequential field. Try using numbers starting from 1, based on the number of records present in the database.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"PUT update an existing public toilet:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X PUT \\\nhttp://localhost:8080/api/public-toilets/{id} \\\n-H \'Content-Type: application/json\' \\\n-d \'{\n        "name": "Updated Public Toilet",\n        "city": "Updated City",\n        "state": "Updated State",\n        "country": "Updated Country"\n    }\'\n')),(0,o.kt)("p",{parentName:"li"},"  Replace {id} with a number. This should update the record with the provided id in the database. Try retrieving the record again, and you should see the updated result.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"DELETE a public toilet by id:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X DELETE http://localhost:8080/api/public-toilets/{id}\n")),(0,o.kt)("p",{parentName:"li"},"  Again, replace {id} with a number. This should delete the record with the provided id from the database."))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We used ",(0,o.kt)("strong",{parentName:"p"},"curl"),", an open-source command-line utility, to test the PublicToilets API CRUD operations. You can install ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," for your operating system from the ",(0,o.kt)("a",{parentName:"p",href:"https://curl.se/"},"curl official website"),". Alternatively, you can also use Postman, a powerful tool for testing and debugging RESTful APIs.")),(0,o.kt)("h3",{id:"unit-testing"},"Unit Testing"),(0,o.kt)("p",null," Unit testing is the practice of testing individual units (methods, functions, classes) of code to ensure they function correctly in isolation."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Test to verify if the service returns all toilets:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void getAllToiletsTest() {\n    List<PublicToilet> toiletList = Arrays.asList(\n        new PublicToilet("Public Toilet 1", "City 1", "State 1", "Country 1"),\n        new PublicToilet("Public Toilet 2", "City 2", "State 2", "Country 2"),\n        new PublicToilet("Public Toilet 3", "City 3", "State 3", "Country 3")\n    );\n    when(toiletRepository.findAll()).thenReturn(toiletList);\n    List<PublicToilet> result = toiletService.getAllToilets();\n    assertEquals(3, result.size());\n}\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Test to verify if the service returns a toilet by id:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void getToiletByIdTest() {\n    PublicToilet toilet = new PublicToilet("Public Toilet 1", "City 1", "State 1", "Country 1");\n    when(toiletRepository.findById(1L)).thenReturn(Optional.of(toilet));\n    Optional<PublicToilet> result = toiletService.getToiletById(1L);\n    assertTrue(result.isPresent());\n    assertEquals("Public Toilet 1", result.get().getName());\n    assertEquals("City 1", result.get().getCity());\n    assertEquals("State 1", result.get().getState());\n    assertEquals("Country 1", result.get().getCountry());\n}\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Test to verify if the service adds a new toilet:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},' @Test\npublic void addNewToiletTest() {\n    PublicToilet toilet = new PublicToilet("Public Toilet 1", "City 1", "State 1", "Country 1");\n    when(toiletRepository.save(toilet)).thenReturn(toilet);\n    PublicToilet result = toiletService.createToilet(toilet);\n    assertEquals("Public Toilet 1", result.getName());\n    assertEquals("City 1", result.getCity());\n    assertEquals("State 1", result.getState());\n    assertEquals("Country 1", result.getCountry());\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"These are just some basic examples of unit tests. You can add more tests to verify different scenarios and edge cases. Refer to Github Repository for complete source code of unit test case class. "),(0,o.kt)("li",{parentName:"ul"},"JUnit provides the framework for writing and executing unit tests, while Mockito facilitates the creation of mock objects and interactions. The @Mock annotation is used to create mock objects, and the @InjectMocks annotation is used to inject those mock objects into the class under test. Together, they enable effective and isolated unit testing.")),(0,o.kt)("h2",{id:"github-repo"},"Github Repo"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"  You can also refer to and clone the code up to this section from the GitHub repository using the ",(0,o.kt)("inlineCode",{parentName:"p"},"with-real-classes-rest-backend-service")," branch."),(0,o.kt)("p",{parentName:"admonition"},"  To clone the repository, you can use the following command:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --branch with-real-classes-rest-backend-service https://github.com/certifysphere/workshops.git\n")),(0,o.kt)("p",{parentName:"admonition"},"  This will clone the repository and checkout the ",(0,o.kt)("inlineCode",{parentName:"p"},"with-real-classes-rest-backend-service")," branch, which contains the code up to this section of the workshop."),(0,o.kt)("p",{parentName:"admonition"},"  You can then navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"public-toilet-service")," directory to access the Java and Spring Rest Services code:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd workshops/reactjs-springboot-workshop/public-toilet-service/\n"))))}d.isMDXComponent=!0}}]);