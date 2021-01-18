<h1 align="center">
  ObjectiVel
</h1>

Simple _Single Page Application_ - (SPA) - for React testing consuming data from the [Marvel API](https://developer.marvel.com/).

<!-- Infos -->
<p align="center">
  <img src="https://img.shields.io/static/v1?labelColor=167ABC&color=777777&label=created%20at&message=Jan%202021" alt="Creation Date" />

  <img src="https://img.shields.io/github/last-commit/kruchelski/objectivel?label=updated%20at&labelColor=167ABC&color=777777" alt="Update Date" />

  <img src="https://img.shields.io/github/v/tag/kruchelski/objectivel?label=latest%20version&labelColor=167ABC&color=777777" alt="Latest Version" />

  <img src="https://img.shields.io/github/license/kruchelski/objectivel?labelColor=167ABC&color=777777" alt="Project License" />
</p>

<div style="color:#333333">

### 😶 What's the goal of this project?

This is an application developed for testing skills with React development

The requirements of this project envolves:
- Transform a prototype made with Adobe XD into a usable web application;
- Must be responsive;
- Consume data from the Marvel API;
- Develop a details page in freestyle

### 🖥 How do these stuff work?

The application was made using ```create-react-app```. A few more libraries were added. The user access the application and meets the Home Page. In this page a request is made to the API to fetch a list of characters. The characters are listed and the user can click in one of them (or do a search or navigate between the result pages) to access details of this character. In the details screen there are some links to external resources (like wiki of the character) and a brief list of series, events and comics that the choosen character is part of.

### 🚜 What is under the hood?

Is just a Reac App with a few more libraries

#### Third Party APIs:
- [Marvel API](https://developer.marvel.com/)
#### General
- [NPM](https://www.npmjs.com/)
#### Some of the main libraries:
- [Axios](https://www.npmjs.com/package/axios)
- [React Router Dom](https://www.npmjs.com/package/react-router-dom)
- [MD5](https://www.npmjs.com/package/md5)

> Note: Make sure you have Node v12.* or above and NPM in command line

### 🎛 So... How to set up the environment?

As mentioned before, it's required to have Node with version 12 or above and NPM in command line. .

There are three steps to make everything work:
1.Edit the .env.example according to the instructions inside the file (basically create a copy of the file and put a Marvel API key)
2.Install the dependencies
3.Start the App

The steps 2 and 3 can be done as follows:

```bash
# In the root directory of the application:
$ npm install       # This will download and install all of the dependencies
$ npm start         # This will start the application 
```

After that the application will be available in localhost:3000

</div>