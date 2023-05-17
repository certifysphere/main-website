---
sidebar_position: 4
id: connect-reactjs-spring-backend-rest-services
title: connect-reactjs-spring-backend-rest-services
tags:
  - connect-reactjs-spring-backend-rest-services
---

# Chapter 3: Connecting ReactJS App with Spring Boot Rest Services

In this chapter, we will integrate the ReactJS app that we built in Chapter 1 with the Spring Boot Rest Services that we built in Chapter 2. We will also remove the in-memory data store from the ReactJS app and replace it with calls to the Spring Boot Rest Services.

## Step 1: Update React App Dependencies

The first step is to update the dependencies in our ReactJS app to enable us to make HTTP requests to our Spring Boot Rest Services. We will use the `axios` library to make HTTP requests.

To update the dependencies, open the `package.json` file in the root directory of the ReactJS app and add the following line under `dependencies`:

```
"axios": "^0.24.0"
```

Save the file and run the following command in the terminal to install the new dependencies:

```
npm install
```

## Step 2: Update Public Toilets Service in React App

Next, we will update the `PublicToiletsService` in our ReactJS app to make HTTP requests to the Spring Boot Rest Services instead of the in-memory data store.

Open the `PublicToiletsService.js` file in the `src/services` directory of the ReactJS app and replace the contents with the following:

```javascript
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1/public-toilets';

class PublicToiletsService {
  getPublicToilets() {
    return axios.get(API_BASE_URL);
  }

  createPublicToilet(publicToilet) {
    return axios.post(API_BASE_URL, publicToilet);
  }

  getPublicToiletById(publicToiletId) {
    return axios.get(API_BASE_URL + '/' + publicToiletId);
  }

  updatePublicToilet(publicToilet, publicToiletId) {
    return axios.put(API_BASE_URL + '/' + publicToiletId, publicToilet);
  }

  deletePublicToilet(publicToiletId) {
    return axios.delete(API_BASE_URL + '/' + publicToiletId);
  }
}

export default new PublicToiletsService();
```

As you can see, we are now making HTTP requests to the Spring Boot Rest Services by calling the appropriate endpoints.

## Step 3: Update Public Toilets List Component in React App

We will now update the `PublicToiletsList` component in our ReactJS app to use the updated `PublicToiletsService`.

Open the `PublicToiletsList.js` file in the `src/components` directory of the ReactJS app and replace the contents with the following:

```javascript
import React, { Component } from 'react';
import PublicToiletsService from '../services/PublicToiletsService';

class PublicToiletsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      publicToilets: []
    };
  }

  componentDidMount() {
    PublicToiletsService.getPublicToilets().then((response) => {
      this.setState({ publicToilets: response.data });
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Public Toilets List</h2>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Name</th>
                <th> Address</th>
                <th> Gender</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.publicToilets.map((publicToilet) => (
                <tr key={publicToilet.id}>
                  <td> {publicToilet.name} </td>
                  <td> {publicToilet.address} </td>
                  <td> {publicToilet.gender} </td>
                  <td>
                    <button
                      onClick={() => this.props.history.push(`/edit-publicToilet/${publicToilet.id}`)}
                      className="btn btn-info"
                    >
                      Update
                    </button>
                    <button
                      style={{ marginLeft: '10px' }}
                      onClick={() => PublicToiletsService.deletePublicToilet(publicToilet.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default PublicToiletsList;
```