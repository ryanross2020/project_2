const React = require('react')

class Layout extends React.Component {
    render(){
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic" />
                    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.css" />
                    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.css" />
                    <title>the Recipe Box</title>
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