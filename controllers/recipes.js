//___________________
//Dependencies
//___________________
//Bringing in Express
const express = require('express')
//Creating a Router (Collection of Routes)
const recipeController = express.Router();
// Bring in Mongoose and Fruit Schema
// const mongoose = require('mongoose')
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
recipeController.get('/', (req, res) => {
    Recipe.find({}, (error, allRecipes) => {
        console.log(req.session);
         res.render('Index', {
             recipes: allRecipes,
         });
     });
 });

 // New
 recipeController.get('/newrecipe', isAuthenticated, (req, res) => {
    res.render('NewRecipe');
});

// Create
recipeController.post('/', (req, res) => {
    Recipe.create(req.body, (error, createdrecipe) => {
        res.redirect('/blogs');
    });
});

// Seed
// recipeController.get('/seed', (req, res)=>{
//     Recipes.create([
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
recipeController.delete('/:id', isAuthenticated, (req, res) => {
    Recipe.findByIdAndRemove(req.params.id, (error, data) => { 
         res.redirect('/blogs');
     });
 });
 
 // Show 
 recipeController.get('/:id', isAuthenticated, (req, res) => {
     Recipe.findById(req.params.id, (error, foundRecipe) => {
         res.render('ShowRecipe', {
                 recipe: foundRecipe,
         });    
     });
 });
 
 // Edit 
 recipeController.get('/editrecipe/:id', isAuthenticated, (req, res) => {
     Recipe.findById(req.params.id, (error, foundRecipe) => {
         res.render('EditRecipe', { recipe: foundRecipe });
     });
 });
 
 // Update
 recipeController.put('/editrecipe/:id', (req, res) => {
     Recipe.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
         res.redirect('/blogs');
     });
 });
 
 //___________________
 //Export
 module.exports = recipeController;