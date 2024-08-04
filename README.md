Ecofind README
Introduction
Welcome to Ecofind, an innovative application designed to facilitate guilt-free 3D printing by connecting enthusiasts with recycling facilities for proper disposal of 3D printing plastics.

Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js installed (recommended version 14.x or higher)
npm or yarn installed
AWS account and CLI configured (for serverless backend setup)
Supabase account and project set up
Google Maps API key
Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/ecofind.git
cd ecofind
Install Dependencies:
Using npm:

bash
Copy code
npm install
Or using yarn:

bash
Copy code
yarn install
Set Up Environment Variables:
Create a .env.local file in the root directory and add your environment variables:

bash
Copy code
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
Running the Application
Start the Development Server:
Using npm:

bash
Copy code
npm run dev
Or using yarn:

bash
Copy code
yarn dev
Access the Application:
Open your browser and go to http://localhost:3000 to see the Ecofind frontend in action.