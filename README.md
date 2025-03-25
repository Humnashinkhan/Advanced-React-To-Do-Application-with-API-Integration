# React + Vite
#  Advanced React To-Do App with API Integration

This is an **Advanced To-Do Application** built with **React, Redux, Tailwind CSS, and API integration**. Users can **add, prioritize, and delete tasks**, as well as fetch external data (like weather info) using an API. The app also features **authentication, state management with Redux, and local storage support** for data persistence.

---

## Technologies Used
- React (Vite)
- React Router DOM ( for Navigation)
- Redux Toolkit( for State Management)
- Redux Thunk( for Handling Async Requests)
- Tailwind CSS ( for UI Styling)
- LocalStorage( for Data Persistence)
- Public API Integration(Weather API)
- Authentication Simulation (Mock Login)

---Folder structure 

src/
│── components/

│   ├── Navbar.jsx

│   ├── TaskInput.jsx

│   ├── TaskList.jsx

│── pages/

│   ├── Home.jsx 

│   ├── TaskPage.jsx  

│   ├── Login.jsx 

│── redux/

│   ├── store.js

│   ├── taskSlice.js

│   ├── authSlice.js

│── App.jsx

│── main.jsx

│── index.css

## Features
Add Tasks - Users can add new tasks.  
Delete Tasks- Tasks can be removed individually.  
Task Prioritization - Set High, Medium, or Low priority.  
Weather API Integration- Display real-time weather data for outdoor tasks.  
Local Storage Support- Tasks persist even after refresh.  
Authentication (Mock Login)- Tasks are only visible to logged-in users.  
Redux for State Management- Uses Redux Toolkit for efficiency.  
Responsive UI - Mobile-friendly design using Tailwind CSS.  


## TO run the Project
    npm run dev

 ## Authentication (Mock)

The authentication system does not use a backend.
Users "log in" by clicking a Login button.
The app stores authentication state using Redux.

 ###  Describe the Issue Clearly (please read this )

During the development of my React To-Do application, I integrated the OpenWeatherMap API to fetch real-time weather data. However, when testing the API request, I encountered a 401 Unauthorized error, indicating an invalid API key.

Initially, I assumed there might be an issue with my API request or the way I was storing and accessing the API key in my .env file. I went through these debugging steps:"

✔️ Checked my API request URL in the browser to verify correctness.
✔️ Confirmed that my API key was correctly stored in the .env file and accessed using import.meta.env.VITE_WEATHER_API_KEY.
✔️ Ensured my Vite server was restarted after modifying .env (as environment variables don't update dynamically).
✔️ Looked into OpenWeatherMap’s API documentation to verify key usage and permissions.

After verifying everything in my code, I realized that the issue was not with my implementation, but with the API key propagation. When registering a new API key, OpenWeatherMap takes some time to fully activate it across their servers. This means that even though the key appears active in my account, it may not work immediately for API requests.


