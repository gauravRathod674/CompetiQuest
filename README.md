# 🎯 CompetiQuest

**Your ultimate platform for mastering competitive exam questions, inspired by IndiaBix.**

CompetiQuest is a full-stack web application designed to help users practice and excel in various competitive exam topics. It provides a clean, fast, and interactive interface for topic-wise question solving, immediate feedback, and performance tracking.

## ✨ Key Features

* **User Authentication**: Secure user registration and login system using JWT.
* **Topic-wise Quizzes**: Browse questions categorized by topics (e.g., Aptitude, Verbal Ability, Programming).
* **Interactive Quiz Interface**: Solve multiple-choice questions with an intuitive UI.
* **Instant Results**: Get immediate feedback on your answers after completing a quiz.
* **User Dashboard**: Track your performance and review past quiz attempts.
* **Responsive Design**: Fully functional and accessible on both desktop and mobile devices.
* **(Admin) Question Management**: A secure interface for administrators to add, update, and delete questions and topics.

---

## 💻 Tech Stack

This project is built using the MERN stack, with Next.js for a powerful frontend experience.

* **Frontend**: Next.js, React, Tailwind CSS
* **Backend**: Node.js, Express.js
* **Database**: MongoDB with Mongoose
* **Authentication**: JSON Web Tokens (JWT)



---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following software installed on your machine:
* [Node.js](https://nodejs.org/en/) (v18 or newer recommended)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
* [Git](https://git-scm.com/)
* [MongoDB](https://www.mongodb.com/try/download/community) installed locally or a connection URI from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/gauravRathod674/CompetiQuest.git](https://github.com/gauravRathod674/CompetiQuest.git)
    cd CompetiQuest
    ```

2.  **Setup the Backend:**
    ```bash
    # Navigate to the backend directory
    cd backend

    # Install dependencies
    npm install
    ```
    Create a `.env` file in the `backend` directory and add the following environment variables.
    ```env
    # .env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=a_very_strong_and_long_secret_key
    ```

3.  **Setup the Frontend:**
    ```bash
    # Navigate to the frontend directory from the root
    cd frontend

    # Install dependencies
    npm install
    ```
    Create a `.env.local` file in the `frontend` directory and add the following variable.
    ```env
    # .env.local
    NEXT_PUBLIC_API_URL=http://localhost:5000
    ```

### Running the Application

You need to run the backend and frontend servers in two separate terminals.

* **Run the Backend Server** (from the `/backend` directory):
    ```bash
    npm run dev
    ```
    The backend server should now be running on `http://localhost:5000`.

* **Run the Frontend Server** (from the `/frontend` directory):
    ```bash
    npm run dev
    ```
    The frontend application should now be running on `http://localhost:3000`.

---

## 📝 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
