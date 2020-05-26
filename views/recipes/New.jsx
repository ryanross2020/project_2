const React = require('react');
const Layout = require('../Layout.jsx');

class NewRecipe extends React.Component {
  render() {
      const {recipe} = this.props;
    return (
        <Layout>
            <header className="banner">
                    <h1>New Recipe</h1>
            </header>
            <nav className="navbar">
              <a className="navlink" href="/blogs">Home</a>
              <a className="navlink" href="#">Logout</a>
            </nav>
            <div className="editcontainer">
              <div className="editcard">
                <form action={`/recipes`} method="POST">
                    Title: <input type="text" name="title"  />
                    <br/>
                    Author: <input type="text" name="author"  />
                    <br/>
                    <u>Entry</u>
                    <br/>
                        Ingredients: <textarea name="entry.ingredients" ></ textarea>
                        <br/>
                        Directions: <textarea name="entry.directions" ></   textarea>
                        <br/>
                    Image URL: <input type="text" name="img" />
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