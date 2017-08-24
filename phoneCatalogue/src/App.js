  import React from 'react';
  import './App.css' 

    var SelectBox = React.createClass({
      render: function(){
           return (
             <div className="col-md-10">
            <input type="text" placeholder="Search" />
            Sort by:
            <select>
              <option value="name">Alphabetical</option>
              <option value="age">Newest</option>
            </select>
             </div>
            );
          }
       });

        // TODO (missing component)

       var FilteredPhoneList = React.createClass({
            render: function(){
                var displayedPhones = this.props.phones.map(function(phone) {
                  return <PhoneItem key={phone.id} phone={phone} /> ;
                }) ;
                return (
                        <div className="col-md-10">
                          <ul className="phones">
                              {displayedPhones}
                          </ul>
                        </div>
                  ) ;
            }
        });

    var PhoneCatalogueApp = React.createClass({
      render: function(){
          return (
              <div className="view-container">
              <div className="view-frame">
                 <div className="container-fluid">
                   <div className="row">
                       <SelectBox />
                       {   <li class="thumbnail phone-listing">
            <a href="phones/motorola-xoom-with-wi-fi" 
                    class="thumb">  
               <img 
                 src="assets/images/phones/motorola-xoom-with-wi-fi.0.jpg"
                 alt="Motorola XOOM\u2122 with Wi-Fi"/> </a>
            <a href="phones/motorola-xoom-with-wi-fi"> 
                 Motorola XOOM\u2122 with Wi-Fi </a>
            <p>The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).</p>
        </li> }
                  </div> 
                  </div>                   
                </div>
              </div>
          );
      }
    });

    export default PhoneCatalogueApp;