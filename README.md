# Step by Step Guide
This is a step by step guide on how to setup each microservice and the frontend.

## 1. Frontend service

### 1. Cd into the frontend folder

```bash
cd client
```

### 2. Install dependencies

```bash
npm install
```

### 2. Start the frontend

```bash

npm start
```

### 3. Enviroments
REACT_APP_GOOGLE_MAPS_API_KEY = AIzaSyDdgs8wkgTgXWzrv8Df-Yd3hh3Y4MpZcgk<br>
REACT_APP_SECRET_KEY = AAJ-AWESOME-KEY<br>
PORT = 3000

## 2. Auth Service

### 1. Cd into the auth service folder

```bash
cd microservice
```

### 2. Install dependencies

```bash

npm install
```

### 3. Envrionments:

SQL_CREATE_TEST_DATA = 0<br>
SQL_SYNC_DATA = 0<br>
DEV_SQL_HOST = localhost<br>
DEV_SQL_PORT = 5432<br>
DEV_SQL_USER = <user><br>
DEV_SQL_PASS = <password><br>
DEV_SQL_DB = dashboard<br>

SQL_CREATE_TEST_DATA = 0<br>
SQL_SYNC_DATA = 0<br>

PROD_SQL_HOST = 35.192.191.48<br>
PROD_SQL_PORT = 5432<br>
PROD_SQL_USER = postgres<br>
PROD_SQL_PASS = Eksamen23<br>
PROD_SQL_DB = dashboard-auth<br>

ENVIRONMENT = prod<br>

PORT = 3000<br>

JWT_PRIVATE_KEY = AAJ-AWESOME-KEY<br>


### Depending on specific needs change `SQL_CREATE_TEST_DATA` & `SQL_SYNC_DATA`to 1 in order to create test data.

### 3. Start the auth service

```bash

npm run dev
```

## 3. Third party API service

### 1. Cd into the microservice folder

### 3. Envrionments:

SQL_CREATE_TEST_DATA = 0<br>
SQL_SYNC_DATA = 0<br>
DEV_SQL_HOST = localhost<br>
DEV_SQL_PORT = 5432<br>
DEV_SQL_USER = <user><br>
DEV_SQL_PASS = <password><br>
DEV_SQL_DB = dashboard<br>

SQL_CREATE_TEST_DATA = 0<br>
SQL_SYNC_DATA = 0<br>

PROD_SQL_HOST = 35.192.191.48<br>
PROD_SQL_PORT = 5432<br>
PROD_SQL_USER = postgres<br>
PROD_SQL_PASS = Eksamen23<br>
PROD_SQL_DB = dashboard-auth<br>

ENVIRONMENT = prod<br>

PORT = 3000<br>

JWT_PRIVATE_KEY = AAJ-AWESOME-KEY<br>

### Depending on specific needs change `SQL_CREATE_TEST_DATA` & `SQL_SYNC_DATA`to 1 in order to create test data.
