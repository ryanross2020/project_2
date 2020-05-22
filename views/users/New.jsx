const React = require('react');
const Layout = require('../Layout.jsx');

class NewUser extends React.Component {
    render() {
        return (
            <Layout>
                <header className="banner"></header>
                <div className="userContainer">
                    <h1>Create New Membership</h1>
                    <div className="userCard">
                        <form action="/sessions/" method="POST">
                            <p className="loginname">username:</p><input type="text" name="username" />
                            <br />
                            <br></br>
                            <p className="loginname">password:</p><input type="password" name="password" />
                            <br />
                            <br></br>
                            <input className="submits" 
                            type="submit" name="" value="Create New Member" />
                        </form>
                    </div>
                </div>
            </Layout>
        );
    }
}

module.exports = NewUser;