const React = require('react');
const Layout = require('../Layout.jsx');

class EditRecipe extends React.Component {
  render() {
      const logout = (
        <form action="/sessions/?_method=delete" method="post">
            <input type="submit" value="Logout" />
        </form>
      );
      const {recipe} = this.props;
    return (
        <Layout title="Edit Recipe Page">
            <header className="banner">
                    <h1>Edit Recipe</h1>
            </header>
            <nav className="navbar">
                    <a className="navlink" href="/blogs">Home</a><br/>
                    <h3 className="username">{this.props.username}</h3><br/>
                    <button>{this.props.username ? logout : '' }Logout</button>
            </nav>
            <div className="editContainer">
              <div className="editCard">
                <form action={`/recipes/edit/${recipe._id}?_method=put`} method="POST">
                    Title: <input type="text" name="title" value={recipe.title} />
                    <br/>
                    Author: <input type="text" name="author" value={recipe.author} />
                    <br/>
                    <u>Entry</u>
                    <br/>
                        Ingredients: <textarea name="entry.ingredients" value={recipe.entry.ingredients}></ textarea>
                        <br/>
                        Directions: <textarea name="entry.directions" value={recipe.entry.directions}></   textarea>
                        <br/>
                    Image URL: <input type="text" name="img" value={recipe.img} />
                    <br/>
                    <input className="submits" type="submit" name="" value="Edit Recipe"/>
                </form>
              </div>
            </div>
        </Layout>
      );
  }
}

module.exports = EditRecipe;