const React = require('react');
const Layout = require('../Layout.jsx')

class Show extends React.Component {
    render(){
        const logout = (
            <form action="/sessions/?_method=delete" method="post">
                <input type="submit" value="Logout" />
            </form>
        );
        const {recipe} = this.props
        return (
            <Layout title="Show Recipe Page">
               <header className="banner"></header>
                <nav className="navbar">
                    <button><a className="navlink" href="/blogs">Home</a></button>
                    <button><a className="navlink" href="/recipes/new">Add a New Recipe</a></button>
                    <h3 className="username">{this.props.username}</h3>
                    <button>{this.props.username ? logout : '' }Logout</button>
                </nav>
                <div className= "showContainer">
                    <div className="showCard">
                        <h1 className="showtitle">{recipe.title}</h1>
                        <br/>
                        <img src={recipe.img} style={{width: '60%'}} alt=""/>
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