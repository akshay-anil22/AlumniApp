📖 Alumni Directory App

A simple Alumni List App built with React Native + Expo.
The app works like a phone directory, displaying alumni details such as name, batch year & branch, and current company/role.

✨ Features

📋 Display a list of alumni (10 dummy entries hardcoded)
🔍 Search bar to filter alumni by name
🖼️ Reusable AlumniCard component
🎨 Clean UI styled with NativeWind (Tailwind CSS for React Native)
📱 Future Enhancement: Individual profile pages with alumni details (photo, LinkedIn, etc.)

alumni-app/
│
├── app/
│   ├── index.tsx          # Main screen (list + search bar)
│   ├── profile/[id].tsx   # Profile page (future enhancement)
│   └── _layout.tsx        # Stack navigation layout
│
├── components/
│   ├── AlumniCard.tsx     # Reusable alumni card UI
│   └── SearchBar.tsx      # Search input component
│
├── data/
│   └── alumniData.ts      # Alumni dummy data (10 entries)
│
├── assets/                # Images/icons
│
├── App.tsx                # Expo entry point
└── README.md              # Project documentation

🚀 Getting Started
1. Clone the repo
git clone https://github.com/<your-username>/alumni-app.git
cd alumni-app

2. Install dependencies
npm install

3. Run the project
Start the Expo development server:
npx expo start

📌 Screenshots

![app1](https://github.com/user-attachments/assets/e660a51e-ab44-4435-97f2-9ee6697ebb72)

![app2](https://github.com/user-attachments/assets/e3cfc7cb-72be-493c-b822-dd59bd061e29)

🔮 Future Enhancements

Alumni profile screen with image and contact details
Linking LinkedIn profiles
Backend integration (Node.js / Express + MongoDB or Firebase)


