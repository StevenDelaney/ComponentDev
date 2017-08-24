    import React from 'react';
    import ReactDOM from 'react-dom';
    import Top10App from './App';
    import '../node_modules/bootstrap/dist/css/bootstrap.css';
	import { Router, Route, IndexRoute, browserHistory } from 'react-router';
	import MovieDetail from './movieDetail';
	
	var App = React.createClass({
      render : function() {
        return (
          <div>
            <h1>Top 10 movies of All Time!</h1>
            {this.props.children}
          </div>
        )
      }
    });

    ReactDOM.render( (
      <Router history={browserHistory} >
        <Route path="/" component={App}>
           <IndexRoute component={Top10App}/>
           <Route path="movies/:id" component={MovieDetail} />
        </Route>
      </Router>
    ),
      document.getElementById('root')
    );