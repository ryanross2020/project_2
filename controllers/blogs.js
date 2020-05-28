//___________________
//Dependencies
//___________________
//Bringing in Express
const express = require('express')
//Creating a Router (Collection of Routes)
const blogController = express.Router();
// Bring in Mongoose and Fruit Schema
// const mongoose = require('mongoose')
const Blog = require('../models/blogs.js')
const Recipe = require('../models/recipes.js')

const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
        return next();
    } else {
        res.redirect('/sessions/new');
    }
};

//___________________
// Routes
//___________________
// Index
blogController.get('/', (req, res) => {
    Blog.find({}, (error, allBlogs) => {
        Recipe.find({}, (error,allRecipes) => {
            console.log(req.session);
         res.render('Index', {
             blogs: allBlogs,
             recipes: allRecipes
         });
        }) 
     });
 });

 // New
 blogController.get('/new', (req, res) => {
    res.render('blogs/New');
});

// Create
blogController.post('/', (req, res) => {
    Blog.create(req.body, (error, createdBlog) => {
        res.redirect('/blogs');
    });
});

// Seed
blogController.get('/seed', (req, res)=>{
    Blog.create([
        {
            title:'Restoration Hardware - Scottsdale Quarter',
            author:'Ryan Ross',
            entry: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            img: "../img/restoration-hardware.jpeg",
        },
        {
            title:'Brunch with the Boys',
            author:'Ryan Ross',
            entry: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            img: "../img/brunch.jpeg",
        },
        {
            title:'Donut Bar - San Diego',
            author:'Ryan Ross',
            entry: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            img: "../img/rdonut-bar.jpeg",
        },
        {
            title:'Arizona Sunsets',
            author:'Ryan Ross',
            entry: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            img: "../img/sunset.jpeg",
        },

    ], (err, data)=>{
        res.redirect('/blogs');
    })
});

// Delete 
blogController.delete('/:id', (req, res) => {
    Blog.findByIdAndRemove(req.params.id, (error, data) => { 
         res.redirect('/blogs');
     });
 });
 
 // Show 
 blogController.get('/:id', (req, res) => {
     Blog.findById(req.params.id, (error, foundBlog) => {
         res.render('blogs/Show', {
                 blog: foundBlog
         });    
     });
 });
 
 // Edit 
 blogController.get('/edit/:id', (req, res) => {
     Blog.findById(req.params.id, (error, foundBlog) => {
         res.render('blogs/Edit', { blog: foundBlog });
     });
 });
 
 // Update
 blogController.put('/edit/:id', (req, res) => {
     Blog.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
         res.redirect('/blogs');
     });
 });
 
 //___________________
 //Export
 module.exports = blogController;