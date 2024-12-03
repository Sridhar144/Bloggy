**Django Blog Platform - Project README![ref1]**

**Project Overview**

This project is a **Django-based blog platform** that enables users to create and manage blog posts. It includes an **AI-powered summary feature** for each post using a **free and efficient language model**, and **MySQL** as the database. The platform supports **user authentication** and **CRUD operations** on posts. The project is deployed on **Azure** with a seamless **CI/CD pipeline** using GitHub Actions for automated deployments.![ref1]

**Features**

- **User Authentication**: Users can sign up, log in, and manage their profiles.
- **Post Management**: Users can create, update, and delete blog posts.
- **AI-Powered Post Summaries**: Each blog post is automatically summarized using a free LLM (Language Model).
- **MySQL Database**: A robust relational database for storing user and post data.
- **CI/CD Pipeline**: Automated deployment using GitHub Actions for seamless updates to the live app.
- **Static and Media Handling**: Proper configuration of static and media files for optimal file management.![ref1]

**Technologies Used**

- **Frontend**:
- **React.js** for building dynamic and responsive UI components.
- **Axios** for API calls to interact with the backend.
- **Backend**:
- **Django** (Python) for handling the backend logic, views, and API interactions.
- **Django REST Framework** for building the REST API for post creation, updates, and management.
- **Database**:
- **MySQL** for data storage, ensuring data integrity and fast queries.
- **AI Features**:
- **Free LLM** (e.g., Hugging Face models or GPT-Neo) for generating post summaries.
- **Cloud Platform**:
- **Azure App Service** for hosting the application in production.
- **Azure Database for MySQL** for database management.
- **CI/CD**:
- **GitHub Actions** for continuous integration and deployment to Azure.![ref1]

**Setup Instructions**

1. **Clone the Repository**


2. **Install Backend Dependencies**

Create a virtual environment and activate it:

python3 -m venv venv

source venv/bin/activate # On Windows, use `venv\Scripts\activate`

Install the required dependencies:

pip install -r backend/requirements.txt

3. **Setup MySQL Database**
- Create a MySQL database and user on your MySQL server.
- Update the DATABASES configuration in settings.py with your MySQL credentials.
4. **Apply Migrations**

Run the following command to set up the database schema:

python manage.py migrate

5. **Configure Static and Media Files**
- Configure static files and media file handling in settings.py to store and serve assets.
- Optionally, set up Azure Blob Storage for serving static and media files in production.
6. **Set Up Environment Variables**

In your **local .env file**, add the following environment variables:

DJANGO\_SECRET\_KEY=your\_secret\_key DB\_NAME=your\_db\_name DB\_USER=your\_db\_user DB\_PASSWORD=your\_db\_password DB\_HOST=your\_db\_host

7. **Start the Development Server** Run the server locally to test:

   python manage.py runserver

   Visit http://localhost:8000 to view the app in development mode.![ref1]

   **Frontend Setup**

1. **Install Frontend Dependencies**

Navigate to the frontend directory and install dependencies:

cd frontend npm install

2. **Start the Frontend Server**

Run the React development server:

npm start

The frontend will be available at http://localhost:3000.![ref1]

**Deploying to Azure**

1. **Create Azure Resources:**
- Create a **Web App** in **Azure App Service**.
- Create **Azure Database for MySQL** and note down the credentials.
2. **Configure Azure Settings**

In the **Azure Portal**, go to your Web App settings and configure the following environment variables:

- DJANGO\_SECRET\_KEY
- DB\_NAME
- DB\_USER
- DB\_PASSWORD
- DB\_HOST
3. **Set Up GitHub Deployment**

In the **Deployment Center** of your Web App in Azure, choose **GitHub** as the deployment source and connect your repository. Set up **CI/CD** with **GitHub Actions** for automatic deployments.![ref1]

**CI/CD Pipeline**

**GitHub Actions** automates deployment to Azure upon each push to the main branch. **GitHub Workflow File** (.github/workflows/deploy.yml):

name: Deploy Django App to Azure

on:

push:

branches:

- main

jobs:

deploy:

runs-on: ubuntu-latest

steps:

- name: Checkout code uses: actions/checkout@v2
- name: Set up Python

  uses: actions/setup-python@v2 with:

python-version: '3.11'

- name: Install dependencies

  run: |

python -m venv venv

source venv/bin/activate

pip install -r backend/requirements.txt

- name: Run migrations

  run: |

source venv/bin/activate python manage.py migrate

- name: Deploy to Azure

  uses: azure/webapps-deploy@v2

  with:

app-name: 'your-app-name'

slot-name: 'production'

publish-profile: ${{ secrets.AZURE\_WEBAPP\_PUBLISH\_PROFILE }}![ref1]

**Bonus Points: Optional Features**

1. **AI Post Summaries**: Integration of an **open-source LLM** (like GPT-Neo or other Hugging Face models) to generate summaries for each blog post upon creation.
1. **Frontend**: Fully responsive design built using **Next.js**, making the blog platform easy to use on both mobile and desktop devices.
1. **Database**: Use **MySQL**, deployed globally on azure as the relational database, ensuring fast queries and scalability.

   [blo.mysql.database.azure.com](http://blo.mysql.database.azure.com/)

4. **CI/CD**: Set up a **GitHub Actions pipeline** for automated deployments to Azure every time a change is made.

[ref1]: Aspose.Words.db4588c6-d81c-4abb-88ae-611a68fda596.001.png
