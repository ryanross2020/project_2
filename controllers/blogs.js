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
        console.log(req.session);
         res.render('Index', {
             blogs: allBlogs,
         });
     });
 });

 // New
 blogController.get('/new', isAuthenticated, (req, res) => {
    res.render('New');
});

// Create
blogController.post('/', (req, res) => {
    Blog.create(req.body, (error, createdBlog) => {
        res.redirect('/blogs');
    });
});

// Seed
// blogController.get('/seed', (req, res)=>{
//     Blog.create([
//         {
//             name:'grapefruit',
//             color:'pink',
//             readyToEat:true
//         },
//         {
//             name:'grape',
//             color:'purple',
//             readyToEat:false
//         },
//         {
//             name:'avocado',
//             color:'green',
//             readyToEat:true
//         }
//     ], (err, data)=>{
//         res.redirect('/blogs');
//     })
// });

// Delete 
blogController.delete('/:id', isAuthenticated, (req, res) => {
    Blog.findByIdAndRemove(req.params.id, (error, data) => { 
         res.redirect('/blogs');
     });
 });
 
 // Show 
 blogController.get('/:id', isAuthenticated, (req, res) => {
     Blog.findById(req.params.id, (error, foundBlog) => {
         res.render('Show', {
                 blog: foundBlog,
         });    
     });
 });
 
 // Edit 
 blogController.get('/edit/:id', isAuthenticated, (req, res) => {
     Blog.findById(req.params.id, (error, foundBlog) => {
         res.render('Edit', { blog: foundBlog });
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