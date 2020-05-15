**Build the app in development mode:**

```
npm install
npm run start
```
**Build the app in production mode:**

```
npm install
npm run build
```

This web application is created for implementation of the server project. The idea of the project is to deploy an application that could serve for internal use of the comapny,
which accepts oredrs from the clients and store oredr and contact information in the database. The project was developed both on the client-side and on the server-side. Client-side includes development of design of the app, user interface and user functionality with HTML, CSS and JavaScript (TypeScript). Server-side of the project includes deployment of the real physical server, including OS, back-up features, data protection, security, performance monitoring and effective resource allocation. 
Web Application consists of the following pages: General Info, User Profile, Create New Order, Archive, Statisics and News. Although design and UX interface is implemented in everypage, the actual functionality of interacting with the server is implemented in components ORDERS and ARCHIVE. The first component has a form, where information about the order and client can be typed and with button "submit" it is saved in the database. Component ORDERS contains informattion about all created orders, and the main functionality of it is retreiving data from the database. For my project I have been using MongoDB, which is the perfect solution for dynamically running applications. All data is stored in JSON format and can be easily imported and exported. Functionality is not performed on every page, as the idea was to develop the main functionality with the server-side and provide all necessary server security, monitoring and management features. The detailed desription of the project can be found in the folder with name of the file "Advanced_Server_Development_Project_Web_Application.doc"
