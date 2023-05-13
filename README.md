
# Get Youtube Subscribers
This capstone project is a backend application that provides APIs for managing YouTube subscibers and helps to get a response with an array of object as per our request send to the database. To make this project working we use different packages ie "Nodejs", "Expressjs" and "Mongoose". For validation and testing we use "Mocha" and for it's assertion library we use "Chai".

## Features

- Use to create data in database
- Access all data using route "/subscribers" 
- Access data object with object field "name" and "subscribedChannel" using route "/subscribers/names"..
- We can also get data object using specific "_id's".
- We can perform validation and testing using "Mocha" and "Chai"
- We can add new subscriber in collection through postman
- We can also delete the 


The APIs provided by this application include the following:

-> `GET /subscribers`: Returns an array of all subscribers in the database.

-> `GET /subscribers/names`: Returns an array of subscribers with only two fields name and subscribedChannel

-> `GET /subscribers/:id`: Returns the details of a subscriber with the given ID.

-> `POST /subscribers/add` : Adds a new subscriber to the collection.

-> `DELETE /subscribers/delete/:id` : Deletes a subscriber with the given id from the collection .

## Prerequisites

Before running this application, you must have the following installed:

Node.js

MongoDB

## Installation

1. Clone this repository:

```bash
 git clone https://github.com/your-username/get-youtube-subscribers.git
```

2. Install dependencies:

```bash
 npm install
```

3. Create a .env file and add monogodb uri

4. Create a database:

```bash
node src/createDatabase.js
```

5. Start the application:

```bash
 npm start
```

6. Run tests:

```bash
npm run test
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.


