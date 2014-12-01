

function airQuality_ranges(d) {
  return d > 1000 ? '#800026' :
  d > 500 ? '#BD0026' :
  d > 200 ? '#E31A1C' :
  d > 100 ? '#FC4E2A' :
  d > 50 ? '#FD8D3C' :
  d > 20 ? '#FEB24C' :
  d > 10 ? '#FED976' :
  '#CCCCCC'; 
}




var airQuality = [{
  "lat": "19.657669571841",
  "lon": "-99.096307280228",
  "aqi": "63",
  "utime": "Monday 2:00",
  "stamp": 1417417200,
  "city": "Villa de las Flores, M\u00e9xico",
  "img": "_842w8j28siIzOV8_LDMnJ1EhJVUhJ7FYwS0nvyi1GAA",
  "pol": "pm25",
  "idx": 189,
  "x": 398
}, {
  "lat": "19.6355",
  "lon": "-98.912",
  "aqi": "50",
  "utime": "Monday 2:00",
  "stamp": 1417417200,
  "city": "Acolman, M\u00e9xico",
  "img": "_842w8j28siIzOV_fMTk_JzcxDwA",
  "pol": "pm25",
  "idx": 190,
  "x": 399
}, {
  "lat": "19.601973592327",
  "lon": "-99.176832931342",
  "aqi": "28",
  "utime": "Monday 2:00",
  "stamp": 1417417200,
  "city": "Tultitlan, M\u00e9xico",
  "img": "_842w8j28siIzOV8_pDSnJLMkJzEPAA",
  "pol": "pm25",
  "idx": 191,
  "x": 400
}, {
  "lat": "19.532251530332",
  "lon": "-99.029948820132",
  "aqi": "-",
  "utime": "Wednesday 0:00",
  "sutime": "0000-00-00 00:00:00",
  "stamp": -62169966000,
  "city": "San Agunst\u00edn, M\u00e9xico",
  "img": "_842w8j28siIzOV8_ODFPwTG9NK-45PDaPAA",
  "pol": "pm25",
  "idx": 185,
  "x": 401
}, {
  "lat": "19.527746144502",
  "lon": "-99.076452189461",
  "aqi": "46",
  "utime": "Monday 2:00",
  "stamp": 1417417200,
  "city": "Xalostoc, M\u00e9xico",
  "img": "_842w8j28siIzOV8_IjEnv7gkPxkA",
  "pol": "pm25",
  "idx": 193,
  "x": 402
}, {
  "lat": "19.528397053703",
  "lon": "-99.204241583862",
  "aqi": "-",
  "utime": "Wednesday 0:00",
  "sutime": "0000-00-00 00:00:00",
  "stamp": -62169966000,
  "city": "Tlaneplantla, M\u00e9xico",
  "img": "_842w8j28siIzOV8_JCcxL7UASJTkJAIA",
  "pol": "pm25",
  "idx": 186,
  "x": 403
}, {
  "lat": "19.424386275127",
  "lon": "-99.119287310519",
  "aqi": "97",
  "utime": "Monday 2:00",
  "stamp": 1417417200,
  "city": "Merced, M\u00e9xico",
  "img": "_842w8j28siIzOV_fN7UoOTUFAA",
  "pol": "pm25",
  "idx": 195,
  "x": 404
}, {
  "lat": "19.38442",
  "lon": "-99.11764",
  "aqi": "41",
  "utime": "Monday 2:00",
  "stamp": 1417417200,
  "city": "Iztacalco, M\u00e9xico",
  "img": "_842w8j28siIzOV_fs6okMTkxJzkfAA",
  "pol": "pm25",
  "idx": 196,
  "x": 405
}, {
  "lat": "19.362385367333",
  "lon": "-99.071166347621",
  "aqi": "149",
  "utime": "Monday 2:00",
  "stamp": 1417417200,
  "city": "UAM Iztapalapa, M\u00e9xico",
  "img": "_842w8j28siIzOV8_1NFXwbOqJLEgMQeIAQ",
  "pol": "pm25",
  "idx": 197,
  "x": 406
}, {
  "lat": "19.324733358445",
  "lon": "-99.203730211028",
  "aqi": "72",
  "utime": "Monday 2:00",
  "stamp": 1417417200,
  "city": "Pedregal, M\u00e9xico",
  "img": "_842w8j28siIzOV8_IDWlKDU9MQcA",
  "pol": "pm25",
  "idx": 198,
  "x": 407
}, {
  "lat": "19.313687302949",
  "lon": "-99.149667649478",
  "aqi": "69",
  "utime": "Monday 2:00",
  "stamp": 1417417200,
  "city": "Santa Ursula, M\u00e9xico",
  "img": "_842w8j28siIzOV8_ODGvJFEhtKi4NCcRAA",
  "pol": "pm25",
  "idx": 199,
  "x": 408
}, {
  "lat": "19.245729326597",
  "lon": "-99.010219228127",
  "aqi": "-",
  "utime": "Sunday 17:00",
  "sutime": "2014-11-30 17:00:00",
  "stamp": 1417384800,
  "city": "Tlahuac, M\u00e9xico",
  "img": "_842w8j28siIzOV8_JCcxozQxGQA",
  "pol": "pm25",
  "idx": 187,
  "x": 409
}, {
  "lat": "19.6721809",
  "lon": "-99.1809685",
  "aqi": "71",
  "utime": "Monday 2:00",
  "stamp": 1417417200,
  "city": "Cuautitl\u00e1n, M\u00e9xico",
  "img": "_842w8j28siIzOV_fuTSxtCSzJOfwwjwA",
  "pol": "pm25",
  "idx": 201,
  "x": 5866
}, {
  "lat": "19.4844553",
  "lon": "-99.247098",
  "aqi": "57",
  "utime": "Sunday 20:00",
  "sutime": "2014-11-30 20:00:00",
  "stamp": 1417395600,
  "city": "FES Acatl\u00e1n, M\u00e9xico",
  "img": "_842w8j28siIzOV_fzTVYwTE5sSTn8MI8AA",
  "pol": "pm25",
  "idx": 188,
  "x": 410
}, {
  "lat": "19.4632839",
  "lon": "-99.1721332",
  "aqi": "76",
  "utime": "Monday 2:00",
  "stamp": 1417417200,
  "city": "Camarones, M\u00e9xico",
  "img": "_842w8j28siIzOV_fOTE3sSg_L7UYAA",
  "pol": "pm25",
  "idx": 203,
  "x": 3312
}, {
  "lat": "19.403793",
  "lon": "-99.024786",
  "aqi": "78",
  "utime": "Monday 2:00",
  "stamp": 1417417200,
  "city": "Nezahualc\u00f3yotl, M\u00e9xico",
  "img": "_842w8j28siIzOV_fL7UqMaM0MSf58ObK_JIcAA",
  "pol": "pm25",
  "idx": 204,
  "x": 3313
}, {
  "lat": "19.4698188",
  "lon": "-99.083374",
  "aqi": "104",
  "utime": "Monday 2:00",
  "stamp": 1417417200,
  "city": "San Juan de Arag\u00f3n, M\u00e9xico",
  "img": "_842w8j28siIzOV8_ODFPwasUSKSkKjgWJaYf3pwHAA",
  "pol": "pm25",
  "idx": 205,
  "x": 3314
}, {
  "lat": "19.4145621",
  "lon": "-99.1507923",
  "aqi": "38",
  "utime": "Monday 2:00",
  "stamp": 1417417200,
  "city": "Hospital General de M\u00e9xico, M\u00e9xico",
  "img": "_842w8j28siIzOV_fI7-4ILMkMUfBPTUvtQhIp6QqQOUA",
  "pol": "pm25",
  "idx": 206,
  "x": 411
}, {
  "lat": "19.3863928",
  "lon": "-99.2255625",
  "aqi": "55",
  "utime": "Monday 2:00",
  "stamp": 1417417200,
  "city": "Santa Fe, M\u00e9xico",
  "img": "_842w8j28siIzOV8_ODGvJFHBLRUA",
  "pol": "pm25",
  "idx": 207,
  "x": 412
}, {
  "lat": "19.3437444",
  "lon": "-99.1561883",
  "aqi": "99",
  "utime": "Monday 2:00",
  "stamp": 1417417200,
  "city": "Coyoac\u00e1n, M\u00e9xico",
  "img": "_842w8j28siIzOV_fOb8yPzH58MI8AA",
  "pol": "pm25",
  "idx": 208,
  "x": 413
}, {
  "lat": "19.2999951",
  "lon": "-99.1031492",
  "aqi": "149",
  "utime": "Monday 2:00",
  "stamp": 1417417200,
  "city": "UAM Xochimilco, M\u00e9xico",
  "img": "_842w8j28siIzOV8_1NFXISI_OSMzNzMnOR8A",
  "pol": "pm25",
  "idx": 209,
  "x": 3315
}, {
  "lat": "19.2434036",
  "lon": "-98.9997707",
  "aqi": "104",
  "utime": "Monday 2:00",
  "stamp": 1417417200,
  "city": "San Agust\u00edn, M\u00e9xico",
  "img": "_842w8j28siIzOV8_ODFPwTG9tLjk8No8AA",
  "pol": "pm25",
  "idx": 210,
  "x": 5867
}]

var AirQualityService = {

  getCustomerZipCodes: function(zipcode,category_code,min_date,max_date,order_by,callback){
    var uri = 'https://apis.bbvabancomer.com/datathon/zipcodes/_ZIPCODE_/customer_zipcodes';
    uri = uri.replace('_ZIPCODE_',zipcode);

    $.ajax({
      url: uri,
      type: 'GET',
      dataType: 'json',
      data : {
        by:'incomes',
        category:category_code,
        date_min:min_date,
        date_max:max_date,
        group_by:order_by
      },
      success: function (data) {
        if (data.result.code === 200) {
          callback(data.data.stats);
        }
        else{
          $().toasty({
            message: "There is no data for this selection.",
            autoHide: 2000
          });          
        }        
      },
      error: function () {
        console.log('Error getting cutomers by zipcode.');
        $().toasty({
          message: "There is no data for this selection.",
          autoHide: 2000
        });              
      },
      beforeSend: setHeader
    });
  }

};