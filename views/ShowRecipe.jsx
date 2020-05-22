const React = require('react');
const Layout = require('./Layout.jsx')

class Show extends React.Component {
    render(){
        const {recipe} = this.props
        return (
            <Layout title="Show Page">
               <header className="banner"></header>
                <nav className="navbar">
                    <p className="username">{this.props.username}</p>
                    <a className="navlink" href="/recipes/new">Add a New Recipe</a>
                </nav>
                <div className= "showContainer">
                    <div className="showCard">
                        <h1>{recipe.title}</h1>
                        <br/>
                        <img src={recipe.img} style={{width: '300px'}} alt=""/>
                        <br/>
                        <h3>Written By: {recipe.author}</h3>
                        <br/>
                        <article>Ingredients: {recipe.entry.ingredients}</article>
                        <br/>
                        <article>Directions: {recipe.entry.directions}</article>
                        <br/>
                        <div className="forms">
                            <form action={`/recipes/edit/${recipe._id}?_method=put`}method="GET">
                                <input className="submits" type="submit" value="Edit" /></form>
                            <form id="delete" action={`/recipes/${recipe._id}?_method=DELETE`} method="POST">
                                <input className="submits" type="submit" value="Delete"/></form>
                        </div> 
                    </div>
                </div>
            </Layout>
        )
    }
};

module.exports = Show;