# Airbnb Clone Project

Welcome to the Airbnb Clone project, a fully responsive web application built using Next.js for the frontend and a Node.js backend. This project allows users to explore, filter, and book listings similar to the popular Airbnb platform.

## Live Demo

- **Client URL:** [https://airbnb-nextjs-wheat.vercel.app/](https://airbnb-nextjs-wheat.vercel.app/)
- **Server URL:** [https://airbnb-server-kappa.vercel.app](https://airbnb-server-kappa.vercel.app)
- **GitHub Repository:** [https://github.com/AJAmran/airbnbTask.git](https://github.com/AJAmran/airbnbTask.git)

## Features


- **Property Listings:** Browse a wide variety of listings with detailed information.
- **Search and Filter:** Advanced search and filtering options to find the perfect listing.
- **Responsive Design:** Optimized for mobile and desktop devices.
- **Interactive Map:** View property locations on an interactive map.
- **Favorites:** Save listings to a favorites list for easy access later.

## Technologies Used

- **Frontend:**
  - Next.js
  - React
  - Tailwind CSS
  - TypeScript
  - React Leaflet for mapping
  - ShadCn UI

- **Backend:**
  - Node.js
  - Express
  - MongoDB with Mongoose for database management
  - JWT for authentication
  - CORS and Helmet for security

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AJAmran/airbnbTask.git
   ```

2. Navigate to the client and server directories and install dependencies:

   ```bash
   cd airbnbTask/client
   npm install

   cd ../server
   npm install
   ```

3. Set up environment variables in the server directory. Create a `.env` file with the following:

   ```
   MONGODB_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```

4. Start the server:

   ```bash
   cd server
   npm run start
   ```

5. Start the client:

   ```bash
   cd client
   npm run dev
   ```

### Usage

- Navigate to the client URL in your browser.
- Explore listings, filter by various criteria, and view details on individual listings.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have any suggestions or improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Special thanks to [Airbnb](https://www.airbnb.com) for the inspiration behind this project.
```