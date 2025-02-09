"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4902],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>b});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),d=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(l.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(t),p=r,b=u["".concat(l,".").concat(p)]||u[p]||m[p]||s;return t?n.createElement(b,i(i({ref:a},c),{},{components:t})):n.createElement(b,i({ref:a},c))}));function b(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=p;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<s;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2755:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=t(7462),r=(t(7294),t(3905));const s={sidebar_position:4,id:"database-management",title:"Database-Management",tags:["Database-Management"]},i="Database Management",o={unversionedId:"tuts/tutorials/computer-science/database-management",id:"tuts/tutorials/computer-science/database-management",title:"Database-Management",description:"This chapter will introduce students to the basics of database management, such as data modeling, database design, SQL, and NoSQL databases. Students should learn how to create, read, update, and delete records in a database. This topic should also cover database security and performance optimization.",source:"@site/docs/tuts/tutorials/computer-science/5-database-management.md",sourceDirName:"tuts/tutorials/computer-science",slug:"/tuts/tutorials/computer-science/database-management",permalink:"/docs/tuts/tutorials/computer-science/database-management",draft:!1,tags:[{label:"Database-Management",permalink:"/docs/tags/database-management"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"database-management",title:"Database-Management",tags:["Database-Management"]},sidebar:"tutorialSidebar",previous:{title:"Mobile-App-Development",permalink:"/docs/tuts/tutorials/computer-science/mobile-app-development"},next:{title:"Data-Analytics",permalink:"/docs/tuts/tutorials/computer-science/data-analytics"}},l={},d=[],c={toc:d},u="wrapper";function m(e){let{components:a,...t}=e;return(0,r.kt)(u,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"database-management"},"Database Management"),(0,r.kt)("p",null,"This chapter will introduce students to the basics of database management, such as data modeling, database design, SQL, and NoSQL databases. Students should learn how to create, read, update, and delete records in a database. This topic should also cover database security and performance optimization."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Introduction to Database Management:\nDatabase Management is a critical aspect of computer science, as it provides the backbone for data storage and retrieval in various applications. It's essential to understand the fundamentals of database management, including data modeling, data structures, and indexing, to develop and maintain efficient and scalable databases.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Types of Databases:\nRelational databases are widely used in business applications that require data to be stored in a structured format, making it easy to query and analyze. NoSQL databases are becoming increasingly popular due to their scalability and flexibility to handle large and unstructured data. Graph databases are used to represent complex relationships between data, such as social networks, recommendation systems, and fraud detection.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Database Design:\nDatabase design is crucial to developing an efficient and scalable database. The process involves identifying the data requirements, modeling the data, and creating a schema that represents the structure of the data. Normalization is a key principle in database design that ensures the elimination of redundancy in the data, leading to better data quality and faster data retrieval. Denormalization, on the other hand, is used in cases where performance is a priority over data redundancy.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"SQL:\nSQL is a widely used programming language for managing and manipulating data in relational databases. SQL is used for various tasks, including creating tables, inserting data, querying data, and updating data. Learning SQL is essential for developers working with relational databases and is a critical skill for anyone involved in database management.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Database Security:\nDatabase security is crucial to protecting sensitive data stored in databases. It involves implementing security measures such as access control, encryption, and authentication to ensure that only authorized users can access the data. Database security is a continuous process, and regular review and update of security measures are necessary to prevent data breaches.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Real-world examples:\nHere are some more real-world examples of database management in action:"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Netflix: Netflix uses a NoSQL database called Cassandra to store user preferences and viewing history, allowing for personalized recommendations."),(0,r.kt)("li",{parentName:"ul"},"Twitter: Twitter uses a distributed relational database called FlockDB to handle its massive scale and high traffic volume."),(0,r.kt)("li",{parentName:"ul"},"Uber: Uber uses a combination of relational and NoSQL databases to handle various data requirements, such as trip data, driver data, and payment data.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Code samples:\nHere are some more practical examples of SQL queries:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a table with a foreign key constraint:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE orders ( order_id INT PRIMARY KEY, customer_id INT, order_date DATE, FOREIGN KEY (customer_id) REFERENCES customers(customer_id) );\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Query data from multiple tables:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT customers.customer_name, orders.order_date FROM customers INNER JOIN orders ON customers WHERE customer_id = orders.customer_id;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update data in a table using a subquery:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE employees SET salary = salary * 1.10 WHERE department = 'Sales' AND salary < (SELECT AVG(salary) FROM employees WHERE department = 'Sales');\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Delete data from multiple tables using a cascade delete:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM customers WHERE customer_id = 1000;\n")))}m.isMDXComponent=!0}}]);