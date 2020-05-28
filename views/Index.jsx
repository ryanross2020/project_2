const React = require('react');
const Layout = require('./Layout.jsx');

class Index extends React.Component {
  render() {
      console.log(this.props);
    const logout = (
        <form action="/sessions/?_method=delete" method="post">
            <input type="submit" value="Logout" />
        </form>
    );
    const { blogs, recipes } = this.props;
    return (
        <Layout title="INDEX PAGE">
                <header className="banner">
                    <h1>the Recipe Box</h1>
                </header>
                <nav className="navbar">
                    <button><a href="/blogs">Home</a></button>
                    <button><a href="/users/new" className="navlink">New Sign-Up</a></button>
                    <button><a href="/sessions/new" className="navlink">Login</a></button>
                    <h3 className="username">{this.props.username}</h3>
                   <button>{this.props.username ? logout : '' }Logout</button> 
                </nav>
                <div className="container">
                    <div className="blogContainer">
                        <ul>
                            {blogs.map((blog, i) => {
                                // console.log(blog._id);
                                return (
                                    <li className="posts">
                                    <a className="blogtitle" href={`/blogs/${blog._id}`}>{blog.title}</a>
                                    <a className="blogPic" href={`/blogs/${blog._id}`}><img style={{width: '80%'}} src={blog.img}/></a><br/>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <aside className="recipeContainer">
                        <ul>
                            {recipes.map((recipe, i) => {
                                console.log(recipe._id);
                                return (
                                    <li className="recipes">
                                    <a className="recipetitle" href={`/recipes/${recipe._id}`}>{recipe.title}</a>
                                    <a className="recipePic" href={`/recipes/${recipe._id}`}><img style={{width: '90%'}} src={recipe.img}/></a><br/>
                                    </li>
                                );
                            })}
                        </ul>
                    </aside>
                </div>
                <footer className="foot">
                    <h4>Web Developer: Ryan Ross</h4>
                </footer>
             
        </Layout>
        
        );
    }
}

module.exports = Index;