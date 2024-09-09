# Golf Getaways API

This is the backend API for the Golf Getaways application, which allows users to search for golf vacation packages.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features

- Search for golf courses based on price, party size, and location
- RESTful API design
- Built with Node.js, Express, and TypeScript

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/golf-getaways-api.git
   cd golf-getaways-api
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```
   PORT=3001
   ```

## Usage

To run the server in development mode:

npm run dev


To build and run the server in production mode:

npm run build
npm start


The server will start on the port specified in your `.env` file (default is 3001).

## API Endpoints

- `POST /api/search`: Search for golf courses
  - Request body:
    ```json
    {
      "maxPrice": 2000,
      "partySize": 4,
      "location": "California"
    }
    ```
  - Response: Array of matching golf courses

## Environment Variables

- `PORT`: The port on which the server will run (default: 3001)

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

Distributed under the MIT License. See `LICENSE` for more information.
