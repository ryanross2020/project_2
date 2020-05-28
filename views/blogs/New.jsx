const React = require('react');
const Layout = require('../Layout.jsx');

class New extends React.Component {
  render() {
      const logout = (
        <form action="/sessions/?_method=delete" method="post">
            <input type="submit" value="Logout" />
        </form>
      );
      const {blog} = this.props;
    return (
        <Layout title="New Blog Page">
            <header className="banner">
              <h1>New Blog Post</h1>
            </header>
            <nav className="navbar">
                    <button><a className="navlink" href="/blogs">Home</a></button>
                    <h3 className="username">{this.props.username}</h3>
                    <button>{this.props.username ? logout : '' }Logout</button>
            </nav>
            <div className="editContainer">
              <div className="editCard">
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

module.exports = New;