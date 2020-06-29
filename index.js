const express = require('express');
const path = require('path');

const server =express('server');

server.use(express.static(path.join(__dirname, 'public')))



const serverHomePage = (req, res) => {
   const homePageFilePath =path.join(__dirname, 'public','home.html');
   res.sendFile(homePageFilePath);
}

const serverLoginPage = (req, res) => {
    const loginPageFilePath =path.join(__dirname, 'public','login.html');
    res.sendFile(loginPageFilePath);
 }

 const serverAboutUsPage = (req, res) => {
    const aboutusPageFilePath =path.join(__dirname, 'public','aboutUs.html');
    res.sendFile(aboutusPageFilePath);
 }

 const serverContactPage = (req, res) => {
    const contactPageFilePath =path.join(__dirname, 'public','contact.html');
    res.sendFile(contactPageFilePath);
 }

 const serverHelpPage = (req, res) => {
    const helpPageFilePath =path.join(__dirname, 'public','help.html');
    res.sendFile(helpPageFilePath);
 }

 




server.get('/', serverHomePage);
server.get('/login',serverLoginPage );
server.get('/aboutus', serverAboutUsPage);
server.get('/contact', serverContactPage);
server.get('/help',serverHelpPage)

server.listen(3000, ()=> console.log('server is ready'));