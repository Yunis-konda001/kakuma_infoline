# Kakuma InfoLine

Kakuma InfoLine is a vital information hub designed to empower refugees and asylum seekers in the Kakuma Refugee Camp, Kenya. Its mission is to provide accessible, accurate, and up-to-date information on essential services, resources, and opportunities available within the camp and surrounding areas.

## Project Structure

The project is a React application built with Vite. The main application logic resides in the `client` directory.

```
client/
  index.html
  package-lock.json
  package.json
  public/
    _redirects
  src/
    AboutPage.css
    AboutPage.jsx
    App.css
    App.jsx
    ArrivalInKakumaPage.css
    ArrivalInKakumaPage.jsx
    FieldPostOffices.css
    FieldPostOfficesPage.jsx
    HomePage.css
    HomePage.jsx
    HospitalsClinicsPage.css
    HospitalsClinicsPage.jsx
    InformationPage.css
    InformationPage.jsx
    NGOOfficesPage.css
    NGOOfficesPage.jsx
    ScholarshipsPage.css
    ScholarshipsPage.jsx
    SchoolsPage.css
    SchoolsPage.jsx
    SettlementSelectionPage.css
    SettlementSelectionPage.jsx
    UNHCRServicesPage.css
    UNHCRServicesPage.jsx
    components/
    index.css
    main.jsx
  vite.config.js
```

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool that provides a lightning-fast development experience.
- **React Router DOM**: Declarative routing for React.
- **CSS**: For styling the application.

## Setup and Installation

To set up the project locally, follow these steps:

1.  **Navigate to the client directory:**

    ```bash
    cd client
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

## Running the Application

To run the application in development mode:

```bash
npm run dev
```

The application will be accessible at `http://localhost:3000`.

## Building the Application

To build the application for production:

```bash
npm run build
```

This will create a `dist` directory with the production-ready build.