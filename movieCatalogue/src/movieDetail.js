import React from 'react';
    import request from 'superagent' ; 

	var Specification = React.createClass({
      render: function(){
            var movie = this.props.movie ;             
            var availability = movie.availability.map(function(avb,index) {
              return (
                       <dd key={index}>{avb}</dd>
                     ) ;
                }) ;
            var dimensions = movie.sizeAndWeight.dimensions.map(function(dim,index) {
              return (
                        <dd key={index}>{dim}</dd>
                     ) ;
                }) ;
          var display = (
              <div>
                 <ul className="specs">
                  <li >
                    <dl>
                      <dt>Director</dt>
                         {availability}
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>Lead role</dt>
                      <dd>{movie.battery.type}</dd>
                      <dt>Support</dt>
                      <dd>{movie.battery.talkTime}</dd>
                    </dl>
                  </li>    
                  <li>
                    <span>Awards</span>
                    <dl>
                      <dt>Oscars</dt>
                      <dd>{movie.awards.oscars}</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>Writers</dt>
                      <dd>{movie.connectivity.cell}</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>MetaScore</dt>
                      <dd>{movie.android.os}</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>Genre</dt>
                      <dd>{movie.display.screenSize}</dd>
                    </dl>
                  </li>   
                  <li>
                    <dl>
                      <dt>Country</dt>
                      <dd>{movie.camera.primary}</dd>
                      <dt>Language</dt>
                      <dd>{movie.camera.features.join(', ')}</dd>
                    </dl>
                  </li>
                  <li>
                    <dt>Additional Features</dt>
                    <dd>{movie.additionalFeatures}</dd>
                  </li>              
                  </ul>            
            </div>
           )
            return (
                 <div>
                  {display}
              </div>
             );
      }
  });
	
    var ImagesSection = React.createClass({
      render: function(){
            var thumbImages = this.props.movie.images.map(function(img,index) {
              return (
                  <li>
                   <img key={index} src={"/movieSpecs/" + img}
                       alt="missing" />
                </li>
                ) ;
                } );
            var mainImage = (
              <div className="movie-images">
              <img src={"/movieSpecs/" + this.props.movie.images[0]} 
                    alt={this.props.movie.name}
                    className="movie" />
            </div>
            ) ;
              return (
                  <div>
                   {mainImage}
                   <h1>{this.props.movie.name}</h1>
                   <p>{this.props.movie.description}</p>
                   <ul className="movie-thumbs">
                       {thumbImages}
                   </ul>
                  </div>
                  );
          }
    })

    var MovieDetail = React.createClass({
       getInitialState: function() {
           return { movie: null };
       },
       componentDidMount: function() {
          request.get(
             '/movieSpecs/movies/' + this.props.params.id + '.json', function(err, res) {
                 var json = JSON.parse(res.text);
                if (this.isMounted()) {
                    this.setState({ movie : json});
          }
        }.bind(this));
      } ,
      render: function(){
          var display = <p>No movie details</p> ; 
            var movie = this.state.movie ;
          if (movie) {
                  display =  (
                      <div>
                         <ImagesSection movie={movie} />
                         <Specification  movie={movie} />       
                    </div>
                    ) ;
              }
                return (
                <div>
              {display}
            </div>
            );
      }
    });

    export default MovieDetail;