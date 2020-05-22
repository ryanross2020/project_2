const React = require('react')

class Layout extends React.Component {
    render(){
        return(
            <html>
                <head>
                    <title>Ryan's Food Blog</title>
                    <link rel="stylesheet" href="/css/app.css"/>
                </head>
                <body>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Layout;