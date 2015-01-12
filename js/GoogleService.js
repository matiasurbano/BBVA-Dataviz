
var GoogleService = {
  api_key : 'AIzaSyB4N13s5Wq3D1u5WhnCYbRw9gxJn3dvPfg',

  getPlaces: function (query, location,radius, callback) {
    var uri = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

    // var uri = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
    //     uri += 'query=_QUERY_&location=_LOCATION_&radius=_RADIUS_&'
    //     uri += 'sensor=false&key=_APIKEY_';
    // uri = uri.replace('_QUERY_',query);
    // uri = uri.replace('_LOCATION_',location);
    // uri = uri.replace('_RADIUS_',radius);
    // uri = uri.replace('_APIKEY_',this.api_key);

    var optData ={
      'query' : query,
      'location' : location,
      'radius' : radius,
      'sensor' : false,
      'key': this.api_key
    };



    $.ajax({
      url: uri,
      type: 'GET',
      dataType: 'jsonp',
      data : optData ,
      done: function (data) {
        if (data.result) {
          callback(data.data.categories);
        }
       else{
          $().toasty({
              message: "There is no data for this selection.",
              autoHide: 3000
          });          
        }
      }
      // ,
      // error: function (e) {
      //   console.log('Error getting categories.');
      //   $().toasty({
      //       message: "There is no data for this selection.",
      //       autoHide: 3000
      //   });              
      // }
    });

  }

};