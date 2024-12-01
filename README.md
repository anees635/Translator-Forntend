# Language Translator Application

A **Language Translator Application** built using **React**, **Express.js**, and **Llama AI Model** to provide seamless and high-quality text translations from English to Urdu.


## Table of Contents
1. [About Project](#About-Project)
2. [Built With](#built-with)
3. [Getting Started](#getting-started)
    - [Express Backend](#express-backend)
    - [API](#api)
    - [Frontend](#frontend)
4. [Locally Run](#locally-run)
5. [Push to GitHub](#push-to-github)
6. [Deploy on Vercel](#deploy-on-vercel)



## About Project

This project is a Language Translator Application built using **Llama AI model**. It enables users to translate text from **English** language to **Urdu** with ease and accuracy. 
The project **features** a React-based frontend for user interaction, an Express.js backend to handle API requests, and a Express server running the Llama AI model for performing translations. 

### Key Features:
1. **User-friendly Interface:** A clean and intuitive React frontend for smooth interaction.

2. **Translation API:** An Express.js backend to manage client requests and connect to the AI model.

3. **AI-Powered Translations:** Leverages the advanced Llama AI model for high-quality translation. Here, we use the llama3-8b-8192 model for translation.

4. **Full-Stack Integration:** A well-structured architecture that connects the frontend, backend, and AI-powered model.

## Built With

- **Frontend**: [React](https://reactjs.org/)
- **Backend API**: [Express.js](https://expressjs.com/)
- **AI Model**: [Llama AI](https://ai.meta.com/llama/)
- **Integration using** [groqcloud](https://console.groq.com/docs/quickstart)
- **Languages**: JavaScript, HTML, CSS
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started
 We use Visual Code for our project.
 
### Express Backend
 First, create a package.json using the following command:
  - npm init

 Then, install **Express** to embed the AI Model in our project.

 - npm install express (for installing express we must have node.js and npm in our PC)

 Import Express in our code using the code:
   - import express from "express";
     
 Go to [GroqCloud](https://console.groq.com/docs/quickstart) to check the code to embed the AI model.
   - First create API key that help you to access the AI model.
   - Install groq-sdk in our code using the following command:
      - npm install --save groq-sdk
   - Import the groq-sdk using the following command:
      - import Groq from "groq-sdk";
   - Write the code from quick start of GroqCloud to do chat with AI model.
   - Write this code inside post request and Handle errors in case the model does not provide a response.
     
 Also create instance of this project using the following command:
   - const app = express();
       
 Create PORT constant and listen app on that port using method:
   - .listen()
 
 Some other packages and middleware:
  - dotenv
  - body-praser
  - urlencoded
    
 Use the GroqColud API key that we make at the first step for the working of model
  - Create **.env** file.
  - Inside this file use api key as environment variable.
  - Load environment variable using dotenv package.
  - Use load environment variable using:
      - *process.env.name_of_variable*
       
 Run the server to check that AI model respond or not.
   - node index.js (index is the name of file)

