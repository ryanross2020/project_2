const React = require('react');
const Layout = require('./Layout.jsx');

class NewRecipe extends React.Component {
  render() {
      const {recipe} = this.props;
    return (
        <Layout>
            <header className="banner">
                    <h1>New Recipe</h1>
            </header>
            <nav className="navbar">
              <a className="navlink" href="/logs">Home</a>
              <a className="navlink" href="#">Logout</a>
            </nav>
            <div className="editcontainer">
              <div className="editcard">
                <form action={`/recipes/new/${recipe._id}?_method=put`} method="POST">
                    Title: <input type="text" name="title" value={recipe.title} />
                    <br/>
                    Author: <input type="text" name="author" value={recipe.author} />
                    <br/>
                    <u>Entry</u>
                    <br/>
                        Ingredients: <textarea name="entry" value={recipe.entry.ingredients}></ textarea>
                        <br/>
                        Directions: <textarea name="entry" value={recipe.entry.directions}></   textarea>
                        <br/>
                    Image URL: <input type="text" name="img" value={recipe.img} />
                    <br/>
                    <input className="submits" type="submit" name="" value="Add New Recipe"/>
                </form>
              </div>
            </div>
        </Layout>
      );
  }
}

module.exports = NewRecipe;