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
        <Layout title="Edit Blog Page">
            <header className="banner">
                    <h1>Edit Blog Post</h1>
            </header>
            <nav className="navbar">
                    <a className="navlink" href="/blogs">Home</a><br/>
                    <h3 className="username">{this.props.username}</h3><br/>
                    <button>{this.props.username ? logout : '' }Logout</button>
            </nav>
            <div className="editContainer">
              <div className="editCard">
                <form action={`/blogs/edit/${blog._id}?_method=put`} method="POST">
                    Title: <input type="text" name="title" value={blog.title} />
                    <br/>
                    Author: <input type="text" name="author" value={blog.author} />
                    <br/>
                    Entry: <textarea name="entry" value={blog.entry}></textarea>
                    <br/>
                    Image URL: <input type="text" name="img" value={blog.img} />
                    <br/>
                    <input className="submits" type="submit" name="" value="Edit Blog"/>
                </form>
              </div>
            </div>
        </Layout>
      );
  }
}

module.exports = Edit;