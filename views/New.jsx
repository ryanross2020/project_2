const React = require('react');
const Layout = require('./Layout.jsx');

class Edit extends React.Component {
  render() {
      const {blog} = this.props;
    return (
        <Layout>
            <header className="banner">
                    <h1>New Blog Post</h1>
            </header>
            <nav className="navbar">
              <a className="navlink" href="/blogs">Home</a>
              <a className="navlink" href="#">Logout</a>
            </nav>
            <div className="editcontainer">
              <div className="editcard">
                <form action={`/blogs/new/${blog._id}?_method=put`} method="POST">
                    Title: <input type="text" name="title" value={blog.title} />
                    <br/>
                    Author: <input type="text" name="author" value={blog.author} />
                    <br/>
                    Entry: <textarea name="entry" value={blog.entry}></textarea>
                    <br/>
                    Image URL: <input type="text" name="img" value={blog.img} />
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