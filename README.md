# StoryBuddy


## Introduction
StoryBuddy is a delightful and educational storytelling companion designed to spark the imagination, teach valuable lessons, and encourage creativity in children. This interactive bot offers personalized story experiences for young readers, making storytelling a magical and engaging adventure.


## Project Type
Frontend | Backend | Fullstack

## Deployed App
Frontend:https://story-buddy-ten.vercel.app/
Backend:https://storybuddy.onrender.com/ 
Database: Json

## Directory Structure
```
StoryBuddy
├── .gitignore
├── Backend/
│   ├── config/
│   │   ├── auth.js
│   │   └── db.js
│   ├── controller/
│   │   ├── authController.js
│   │   └── storyController.js
│   ├── index.js
│   ├── middlewere/
│   │   └── auth.middlewere.js
│   ├── model/
│   │   ├── blacktoken.js
│   │   ├── story.js
│   │   └── user.js
│   ├── package-lock.json
│   ├── package.json
│   └── routes/
│   │   ├── story.route.js
│   │   └── userauth.js
├── Frontend/
│   └── storybuddy/
│   │   ├── .eslintrc.cjs
│   │   ├── .gitignore
│   │   ├── README.md
│   │   ├── index.html
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   ├── public/
│   │   │   └── vite.svg
│   │   ├── src/
│   │   │   ├── Api/
│   │   │   │   └── Api.js
│   │   │   ├── App.css
│   │   │   ├── App.jsx
│   │   │   ├── AuthContext/
│   │   │   │   └── AuthContext.jsx
│   │   │   ├── Components/
│   │   │   │   ├── AddStory/
│   │   │   │   │   └── Addstory.jsx
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── StoryCard/
│   │   │   │   │   └── StoryCard.jsx
│   │   │   │   ├── StoryDetails/
│   │   │   │   │   └── StoryDetail.jsx
│   │   │   │   └── footer/
│   │   │   │   │   └── Footer.jsx
│   │   │   ├── Pages/
│   │   │   │   ├── Home/
│   │   │   │   │   └── Home.jsx
│   │   │   │   ├── Login/
│   │   │   │   │   └── Login.jsx
│   │   │   │   ├── MyStory/
│   │   │   │   │   ├── MyStory.jsx
│   │   │   │   │   └── MyStoryCard.jsx
│   │   │   │   ├── Signup/
│   │   │   │   │   └── Signup.jsx
│   │   │   │   ├── StoryAi/
│   │   │   │   │   └── Story.jsx
│   │   │   │   ├── StoryDetailPage/
│   │   │   │   │   └── StoryDetailspage.jsx
│   │   │   │   └── Storys/
│   │   │   │   │   └── AllStorys.jsx
│   │   │   ├── Routes/
│   │   │   │   └── AllRoutes.jsx
│   │   │   ├── assets/
│   │   │   │   └── StoryBuddy_logo.png
│   │   │   ├── index.css
│   │   │   └── main.jsx
│   │   ├── vercel.json
│   │   └── vite.config.js
└── README.md
```

## Video Walkthrough of the project
https://drive.google.com/file/d/1_G-nZZ-m-zMRviaHL60yf9gwzugOZvhP/view?usp=drive_link



##Features
Generates Interactive Stories Based on User Input

1.StoryBuddy generates personalized stories based on user input, allowing children to influence the plot, characters, and outcomes through their choices.
Offers Educational Storytelling Experiences

2.Provides educational storytelling experiences that cover a wide range of topics, including science, history, geography, and more, fostering curiosity and learning in children.
Provides Moral Lessons and Character Development

3.Embeds moral lessons and character development themes into stories, helping children learn important values such as kindness, empathy, courage, and perseverance.
Engages Children in Creative Writing Exercises

4.Encourages children to engage in creative writing exercises by prompting them to contribute to story creation, develop characters, and write their own endings to stories.
Offers Bedtime Story Recommendations


5.Provides interactive features that allow children to contribute to story creation by suggesting ideas, characters, and plot twists, fostering a sense of ownership and creativity.

.

## ScreenShots
### Landing
![Screenshot (193)](https://github.com/Dayasagar301/StoryBuddy/assets/132691000/6f431981-fbe2-4cc6-8e02-ee85a9af53e6)
![Screenshot (194)](https://github.com/Dayasagar301/StoryBuddy/assets/132691000/91009bfa-55e1-4886-9171-61e5a307d4c7)
![Screenshot (195)](https://github.com/Dayasagar301/StoryBuddy/assets/132691000/05367b47-f207-499d-a97e-9dc1a92ced20)


### Login and Sign up


![Screenshot (196)](https://github.com/Dayasagar301/StoryBuddy/assets/132691000/745430a3-3b7a-49b3-9a83-99021406d5e0)
![Screenshot (197)](https://github.com/Dayasagar301/StoryBuddy/assets/132691000/80dd9809-6389-454e-9f4a-4a8bdd65655a)

### DashBoard
![Screenshot (198)](https://github.com/Dayasagar301/StoryBuddy/assets/132691000/079b4ccf-c2ef-41b1-9901-a8f4d86886a0)

![Screenshot (199)](https://github.com/Dayasagar301/StoryBuddy/assets/132691000/49690c16-8708-4dd0-ba9c-71754078ac21)

![Screenshot (200)](https://github.com/Dayasagar301/StoryBuddy/assets/132691000/c1d93a56-d4bb-41c7-adff-5a34f45d4513)




## Installation & Getting Started
1. Clone the repository:
```bash
git clone https://github.com/Dayasagar301/-Luni-Interface-029.git
```
2. Install dependencies:
```bash
cd StoryBuddy
npm install
```
3. Start the backend server:
```bash
cd backend
npm run start
```
4. Start the frontend:
```bash
cd frontend
npm run dev
```
5. Access the application at `http://localhost:5173`




## Technology Stack
- React
- Redux
- Chakra UI
- vercel (for frontend deployment)
- context api
- Node js
- MY SQL
