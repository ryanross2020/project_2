const React = require('react');
const Layout = require('./Layout.jsx');

class Index extends React.Component {
  render() {
    // const logout = (
    //     <form action="/sessions/?_method=delete" method="post">
    //         <input type="submit" value="Logout" />
    //     </form>
    // );
    const { blogs } = this.props;
    return (
        <Layout title="INDEX PAGE">
            <div>
                <header className="banner">
                    <h1>Captains' Logs</h1>
                </header>
                <nav className="navbar">
                    <p className="username">{this.props.username}</p>
                    <a className="navlink" href="/logs/new">Add A New Entry</a>
                </nav>
                <div className="blogcontainer">
                    <ul>
                        {blogs.map((blog, i) => {
                            console.log(blog._id);
                            return (
                                <li className="posts">
                                <a className="blogtitle" href={`/blogs/${blog._id}`}>{blog.title}</a>
                                <a href={`/blogs/${blog._id}`}><img style={{width: '300px', height: '400px'}} src={blog.img}/></a><br/>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <aside className="recipecontainer">
                    <ul>
                        {recipes.map((recipe, i) => {
                            console.log(recipe._id);
                            return (
                                <li className="recipes">
                                <a className="recipetitle" href={`/recipes/${recipe._id}`}>{recipe.title}</a>
                                <a href={`/recipes/${recipe._id}`}><img style={{width: '100px', height: '200px'}} src={recipe.img}/></a><br/>
                                </li>
                            );
                        })}
                    </ul>
                </aside>
                <footer className="foot">
                    <h2></h2>
                </footer>
            </div> 
        </Layout>
        
        );
    }
}

module.exports = Index;