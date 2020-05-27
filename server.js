//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
const show = console.log;
const blogController = require('./controllers/blogs.js');
const userController = require('./controllers/users_controller.js');
const recipeController = require('./controllers/recipes.js');
const session = require('express-session');
const bcrypt = require ('bcrypt')
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;
//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/project2';
// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true });
// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
// open the connection to mongo
db.on('open' , ()=>{});
//___________________
//Middleware
//___________________
//use public folder for static assets
app.use(express.static('public'));
// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project
//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Controllers
app.use('/blogs', blogController);
app.use('/user', userController);
app.use('/recipes', recipeController);
//___________________
// Routes
//___________________
// Authorization Route
const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
      return next()
    } else {
      res.redirect('/sessions/new')
    }
};

// Route to login Page
app.get('/sessions/new', (req, res) => {
    res.render('sessions/New', {
        currentUser: req.session.currentUser });
});

// Authorization Route, Login
app.post('/sessions/', (req, res) => {
    User.findOne({username: req.body.username},(error, foundUser) => {
        if(error) {
            res.send(error)
        } else if (!foundUser){
            res.redirect('/users/new')
        } else {
            if(bcrypt.compareSync(req.body.password, foundUser.password)){
                req.session.currentUser = foundUser.username
                res.redirect('/blogs/')
            }else {
                res.send('WRONG PASSWORD')
            }
        }
    });
});

app.delete('/sessions/', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/sessions/new')
    });
});

//___________________
//localhost:3000 
app.get('/' , (req, res) => {
  res.redirect('/blogs');
});
//___________________
//Listener
//___________________
app.listen(PORT, () => show( 'Listening on port:', PORT));