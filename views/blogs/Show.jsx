const React = require('react');
const Layout = require('../Layout.jsx')

class Show extends React.Component {
    render(){
        const logout = (
            <form action="/sessions/?_method=delete" method="post">
                <input type="submit" value="Logout" />
            </form>
        );
        const {blog} = this.props
        return (
            <Layout title="Show Blog Page">
               <header className="banner"></header>
                <nav className="navbar">
                    <button><a className="navlink" href="/blogs">Home</a></button>
                    <button><a className="navlink" href="/blogs/new">Add a New Blog</a></button>
                    <h3 className="username">{this.props.username}</h3>
                    <button>{this.props.username ? logout : '' }Logout</button>
                </nav>
                <div className= "showContainer">
                    <div className="showCard">
                        <h1 className="showtitle">{blog.title}</h1>
                        <br/>
                        <img src={blog.img} style={{width: '60%'}} alt=""/>
                        <br/>
                        <article>{blog.entry}</article>
                        <br/>
                        <h3>Written By: {blog.author}</h3>
                        <br/>
                        <div className="forms">
                            <form action={`/blogs/edit/${blog._id}?_method=put`}method="GET">
                                <input className="submits" type="submit" value="Edit" /></form>

                            <form id="delete" action={`/blogs/${blog._id}?_method=DELETE`} method="POST">
                                <input className="submits" type="submit" value="Delete"/></form>
                        </div> 
                    </div>
                </div>
            </Layout>
        )
    }
};

module.exports = Show;