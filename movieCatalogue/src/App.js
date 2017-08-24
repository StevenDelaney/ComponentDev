import React from 'react';
import './App.css' ;
import _ from 'lodash';
import Movies from  './Data';
import { Link } from 'react-router'; 

      var SelectBox = React.createClass({
          handleChange : function(e, type,value) {
               e.preventDefault();
               this.props.onUserInput( type,value);
          },
          handleTextChange : function(e) {
                this.handleChange( e, 'search', e.target.value);
          },
          handleSortChange : function(e) {
              this.handleChange(e, 'sort', e.target.value);
          },
          render: function(){
               return (
                 <div className="col-md-10">
                 <input type="text" placeholder="Search" 
                              value={this.props.filterText}
                              onChange={this.handleTextChange} />
               Sort by:
                   <select id="sort" value={this.props.order } 
                             onChange={this.handleSortChange} >
							 <option value="age">Newest</option>
                   <option value="name">Alphabetical</option>
                   
               </select>
                 </div>
                );
              }
           });

     var MovieItem = React.createClass({
      render: function(){
           return (
                <li className="thumbnail movie-listing">
                  <Link to={'/movies/' + this.props.movie.id} className="thumb">
                       <img src={"/movieSpecs/movies/" + this.props.movie.imageUrl}
                     alt={this.props.movie.name} /> </Link>
                  <Link to={'/movies/' + this.props.movie.id}> {this.props.movie.name}</Link>
                  <p>{this.props.movie.snippet}</p>
                </li>
                ) ;
             }
         }) ;

   var FilteredMovieList = React.createClass({
        render: function(){
            var displayedMovies = this.props.movies.map(function(movie) {
              return <MovieItem key={movie.id} movie={movie} /> ;
            }) ;
            return (
                    <div className="col-md-10">
                      <ul className="movies">
                          {displayedMovies}
                      </ul>
                    </div>
              ) ;
        }
    });

var Top10App = React.createClass({
     getInitialState: function() {
           return { search: '', sort: 'name' } ;
      }, 
     handleChange : function(type,value) {
            if ( type === 'search' ) {
                this.setState( { search: value } ) ;
              } else {
                 this.setState( { sort: value } ) ;
              }
      }, 
        render: function(){
               var list = Movies.filter(function(p) {
                      return p.name.toLowerCase().search(
                             this.state.search.toLowerCase() ) !== -1 ;
                        }.bind(this) );  
               var filteredList = _.sortBy(list, this.state.sort) ;
               return (
              <div className="view-container">
              <div className="view-frame">
                 <div className="container-fluid">
                   <div className="row">
                      <SelectBox onUserInput={this.handleChange } 
                             filterText={this.state.search} 
                             sort={this.state.sort} />
                       <FilteredMovieList movies={filteredList} />
                  </div> 
                  </div>                   
                </div>
              </div>
          );
        }
});

export default Top10App;