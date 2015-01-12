

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
}];

var stations = 
[
  {'code':'ACO','name':'Acolman','lng':-98.912003,'lat':19.635501},
  {'code':'AJU','name':'Ajusco','lng':-99.162611,'lat':19.154286},
  {'code':'ATI','name':'Atizapan','lng':-99.254133,'lat':19.576963},
  {'code':'CAM','name':'Camarones','lng':-99.169794,'lat':19.468404},
  {'code':'CHO','name':'Chalco','lng':-98.886088,'lat':19.266948},
  {'code':'COR','name':'CORENA','lng':-99.02604,'lat':19.265346},
  {'code':'COY','name':'Coyoacán','lng':-99.157101,'lat':19.350258},
  {'code':'CUA','name':'Cuajimalpa','lng':-99.291705,'lat':19.365313},
  {'code':'CUT','name':'Cuautitlán','lng':-99.198602,'lat':19.722186},
  {'code':'DIC','name':'Diconsa','lng':-99.185774,'lat':19.298819},
  {'code':'EAJ','name':'Ecoguardas Ajusco','lng':-99.203971,'lat':19.271222},
  {'code':'EDL','name':'Exconv. Desierto Leones','lng':-99.310635,'lat':19.313357},
  {'code':'FAC','name':'FES Acatlán','lng':-99.243524,'lat':19.482473},
  {'code':'HGM','name':'Hospital General de México','lng':-99.152207,'lat':19.411617},
  {'code':'IBM','name':'Legaria','lng':-99.21536,'lat':19.443319},
  {'code':'IZT','name':'Iztacalco','lng':-99.117641,'lat':19.384413},
  {'code':'LAA','name':'Lab. de Analisis Ambiental','lng':-99.147312,'lat':19.483781},
  {'code':'LLA','name':'Los Laureles','lng':-99.039644,'lat':19.578792},
  {'code':'LOM','name':'Lomas','lng':-99.242062,'lat':19.403},
  {'code':'LPR','name':'La Presa','lng':-99.11772,'lat':19.534727},
  {'code':'MCM','name':'Museo de la Cd. de México','lng':-99.131924,'lat':19.429071},
  {'code':'MER','name':'Merced','lng':-99.119594,'lat':19.42461},
  {'code':'MON','name':'Montecillo','lng':-98.902853,'lat':19.460415},
  {'code':'MPA','name':'Milpa Alta','lng':-99.011325,'lat':19.200712},
  {'code':'NEZ','name':'Nezahualcóyotl','lng':-99.028212,'lat':19.393734},
  {'code':'PED','name':'Pedregal','lng':-99.204136,'lat':19.325146},
  {'code':'SAG','name':'San Agustín','lng':-99.030324,'lat':19.532968},
  {'code':'SFE','name':'Santa fe','lng':-99.262865,'lat':19.357357},
  {'code':'SHA','name':'Secretaría de Hacienda','lng':-99.207868,'lat':19.446203},
  {'code':'SJA','name':'San Juan Aragón','lng':-99.086095,'lat':19.452592},
  {'code':'SNT','name':'San Nicolas Totolapan','lng':-99.256462,'lat':19.250385},
  {'code':'SUR','name':'Santa Ursula','lng':-99.149994,'lat':19.31448},
  {'code':'TAH','name':'Tlahuac','lng':-99.010564,'lat':19.246459},
  {'code':'TEC','name':'Cerro del Tepeyac','lng':-99.114229,'lat':19.487227},
  {'code':'TLA','name':'Tlalnepantla','lng':-99.204597,'lat':19.529077},
  {'code':'TLI','name':'Tultitlán','lng':-99.177173,'lat':19.602542},
  {'code':'TPN','name':'Tlalpan','lng':-99.184177,'lat':19.257041},
  {'code':'UAX','name':'UAM Xochimilco','lng':-99.103629,'lat':19.304441},
  {'code':'UIZ','name':'UAM Iztapalapa','lng':-99.07388,'lat':19.360794},
  {'code':'UNM','name':'Unidad Movil','lng':-99.147137,'lat':19.482238},
  {'code':'VIF','name':'Villa de las Flores','lng':-99.09659,'lat':19.658223},
  {'code':'XAL','name':'Xalostoc','lng':-99.0824,'lat':19.525995}
];


var AirQualityService = {

  getStationsByMonth : function(monthYear){
    var mixinRes = [];
    var res =  _.chain(historicoParticulas).filter(function(item){ 
    return ( item.date.indexOf(monthYear)!=-1 )}).groupBy('station');
    // return ( item.date.indexOf(monthYear)!=-1 && (item.parameter == "PM2.5" || item.parameter == "PM10" ))}).groupBy('station');

    stations.forEach(function(station){
      if (res._wrapped[station.code]){

        var mixin = {};
        mixin.code = station.code; 
        mixin.name = station.name; 
        mixin.lat = station.lat; 
        mixin.lng = station.lng; 
        mixin.histo = res._wrapped[station.code]; 
        mixinRes.push(mixin);

      }

    });

    return mixinRes;

  },

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