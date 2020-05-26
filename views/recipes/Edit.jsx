const React = require('react');
const Layout = require('../Layout.jsx');

class EditRecipe extends React.Component {
  render() {
      const {recipe} = this.props;
    return (
        <Layout>
            <header className="banner">
                    <h1>Edit Recipe</h1>
            </header>
            <nav className="navbar">
              <a className="navlink" href="/blogs">Home</a>
              <a className="navlink" href="#">Logout</a>
            </nav>
            <div className="editcontainer">
              <div className="editcard">
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