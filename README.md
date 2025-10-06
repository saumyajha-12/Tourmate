🌍 Tour-Mate

Your personal travel companion — discover nearby restaurants, hotels, and attractions with ease.

🚀 Overview

Tour-Mate is a smart travel guide web app built with React that helps users explore destinations interactively.
It integrates Google Maps and the Travel Advisor API to display real-time places of interest such as hotels, restaurants, and attractions — all within the area you’re viewing on the map.

Whether you’re planning a trip or exploring locally, Tour-Mate makes travel simple, visual, and fun.

✨ Features

🗺️ Interactive Google Map integration

🏨 Explore nearby hotels, 🍴 restaurants, and 🎡 attractions

🔍 Dynamic filtering by type and rating

📍 Location-based place search (bounding box)

💬 Responsive and mobile-friendly UI

🔐 Secure environment variable setup for API keys

🧰 Tech Stack
Category	Technology
Frontend	React
UI Library	Material-UI
Maps	Google Maps API (@react-google-maps/api)
Data Source	Travel Advisor API (via RapidAPI)
HTTP Client	Axios
Deployment	Vercel
⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/yourusername/tour-mate.git
cd tour-mate

2️⃣ Install dependencies
npm install

3️⃣ Create a .env file

In the project root, create a .env file and add:

REACT_APP_RAPIDAPI_KEY=your_rapidapi_key
REACT_APP_RAPIDAPI_HOST=travel-advisor.p.rapidapi.com


⚠️ Ensure .env is listed in .gitignore to keep your keys secure.

4️⃣ Run the app locally
npm start


Then open http://localhost:3000
 in your browser 🎉

🌐 Deployment

Deployed easily with Vercel.

To deploy your own version:

Push the project to GitHub.

Connect your repo to Vercel
.

Add your environment variables under
Project → Settings → Environment Variables.

Deploy 🚀

💡 Future Improvements

🧭 Add travel itinerary planner

💬 Include reviews and favorites

🌤️ Add weather details for destinations

📱 Offline support for saved locations

👩‍💻 Author

Saumya Prakash
📧 [email:spjha1207@gmail.com]
🌐 tourmate.vercel.app
 (https://tourmate-virid.vercel.app/)

🪪 License

This project is licensed under the MIT License — feel free to use, modify, and share.