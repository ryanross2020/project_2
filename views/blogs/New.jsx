const React = require('react');
const Layout = require('../Layout.jsx');

class Edit extends React.Component {
  render() {
      const logout = (
        <form action="/sessions/?_method=delete" method="post">
            <input type="submit" value="Logout" />
        </form>
      );
      const {blog} = this.props;
    return (
        <Layout>
            <header className="banner">
                    <h1>New Blog Post</h1>
            </header>
            <nav className="navbar">
                    <a className="navlink" href="/blogs">Home</a><br/>
                    <h3 className="username">{this.props.username}</h3><br/>
                    <button>{this.props.username ? logout : '' }Logout</button>
            </nav>
            <div className="editcontainer">
              <div className="editcard">
                <form action={`/blogs`} method="POST">
                    Title: <input type="text" name="title" />
                    <br/>
                    Author: <input type="text" name="author" />
                    <br/>
                    Entry: <textarea name="entry" ></textarea>
                    <br/>
                    Image URL: <input type="text" name="img" />
                    <br/>
                    <input className="submits" type="submit" name="" value="Add New Blog"/>
                </form>
              </div>
            </div>
        </Layout>
      );
  }
}

module.exports = Edit;