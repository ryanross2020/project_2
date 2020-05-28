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
        res.redirect('/sessions/news');
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
 recipeController.get('/new', (req, res) => {
    res.render('recipes/New');
});

// Create
recipeController.post('/', (req, res) => {
    Recipe.create(req.body, (error, createdrecipe) => {
        res.redirect('/blogs');
    });
});

// Seed
recipeController.get('/seed', (req, res)=>{
    Recipe.create([
        {
            title:'Bread Pudding French Toast',
            author:'Ryan Ross',
            entry: {
                ingredients: `4 Loaves Bread
                Gal Milk
                14 Eggs (beaten)
                5 C Sugar
                4 oz Vanilla`,
                directions: `1. Cut bread into pieces and soak in milk for 2 hours
                2. Combine with eggs, sugar and vanilla. Pour into 2 deep 3 rd pans lined with parchment and
                either
                sprayed or buttered.
                3. Bake at 325 F for 45 mins or until firm (No Jiggle)`
                },
            img: "../img/bread-pudding.png",
        },
        {
            title:'Apple Bacon Jam',
            author:'Ryan Ross',
            entry: {
                ingredients: `3.75 lb Bacon (6 sheets) (save 2 T fat)
                                1 C House bacon
                                2 yellow onions
                                4 cloves garlic
                                2 fresno chili pepper
                                3 apples (1 brunoise)
                                3 oz apple cider vinegar
                                1T mustard seed
                                4 C sugar
                                ¼ t cinnamon
                                1 T salt
                                1 t ground black pepper`,
                directions: `1. Cook sheet bacon until crispy, dice small
                                2. Robot coupe house bacon, onion, garlic, fresnos and 2 apples
                                3. Saute in bacon fat
                                4. Add seasonings and sugar and let simmer until thickened
                                5. Add remaining apple and cool`
                },
            img: "../img/bacon-jam.png",
        },
        {
            title:'Lemon Ricotta Pancakes',
            author:'Ryan Ross',
            entry: {
                ingredients: `1 ½ cups complete buttermilk pancake mix
                                3/4 cup milk
                                1/2 cup ricotta cheese
                                2 eggs
                                1 tsp vanilla extract
                                2 Tbs fresh lemon juice
                                1 Tbs fresh lemon zest
                                2 Tbs butter for cooking`,
                directions: `1. Grab two bowls, one large, one medium.
                                2. In the large bowl pour your pancake mix into middle and create a small well in the center.
                                3. In the medium bowl, add the milk and ricotta and whisk until well blended. Then add the eggs, beating between each. Then add the vanilla, lemon juice and lemon zest.
                                4. Make a well in the dry ingredients and add the blended wet ingredients – just fold it in gently, until JUST combined. Don’t over mix – you’ll have tough pancakes. We want fluffy pancakes!
                                5. Melt or brush butter onto a large griddle and heat to medium.
                                6. Add pancake batter, a cup at a time (or smaller if you want smaller pancakes).
                                7. When you get bubbles, flip the pancakes over and cook on the other side. Should be a minute or two per side, and golden brown.`
                },
            img: "../img/lemon-pancakes.png",
        },
    ], (error, data) => {
        res.redirect('/blogs');
    })
});

// Delete 
recipeController.delete('/:id', (req, res) => {
    Recipe.findByIdAndRemove(req.params.id, (error, data) => { 
         res.redirect('/blogs');
     });
 });
 
 // Show 
 recipeController.get('/:id', (req, res) => {
     Recipe.findById(req.params.id, (error, foundRecipe) => {
         res.render('recipes/Show', {
                 recipe: foundRecipe
         });    
     });
 });
 
 // Edit 
 recipeController.get('/edit/:id', (req, res) => {
     Recipe.findById(req.params.id, (error, foundRecipe) => {
         res.render('recipes/Edit', { recipe: foundRecipe });
     });
 });
 
 // Update
 recipeController.put('/edit/:id', (req, res) => {
     Recipe.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
         res.redirect('/blogs');
     });
 });
 
 //___________________
 //Export
 module.exports = recipeController;