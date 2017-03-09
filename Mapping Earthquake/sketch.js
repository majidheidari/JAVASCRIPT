var mapimg;

var clat = 0;
var clon = 0;

var sliderlon;
var sliderlat;
var sliderzoom;

var lat = 31.2304 ;
var lon = 121.4737 ;
//Šanghaj

var ww = 1024;
var hh = 512;

var zoom = 1;
var earthquakes30,earthquakes7,earthquakes1,earthquakes0;


function preload () {
  mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/' +
    clat + ',' + clon + ',' + zoom + '/' +
    ww + 'x' + hh +
    '?access_token=pk.eyJ1IjoiYnJhbmlzbGF2YmlseSIsImEiOiJjaXo1b2VrcHUwMDUxMzJwajNwY2liMWx4In0.GU1kzcASjxsIAE2xzgdNGg')
    earthquakes30 = loadStrings('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv');
    earthquakes7 = loadStrings('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.csv');
    earthquakes1 = loadStrings('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.csv');
    earthquakes0 = loadStrings('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.csv');

}

function mercX (lon) {
  lon = radians(lon);
  var a = (256 / PI) * pow(2, zoom);
  var b = lon + PI;
  return a * b;
}

function mercY (lat) {
  lat = radians(lat);
  var a = (256 / PI) * pow(2, zoom);
  var b = tan(PI/4 + lat/2);
  var c = PI - log(b);
  return a * c;
}

function setup() {
  createCanvas (1024, 512);
  translate(width / 2 , height /2);
  imageMode(CENTER);
  image(mapimg, 0, 0);
  console.log("Zelená = Posledných 30 dní. ")
  console.log("Žltá = Posledných 7 dní. ")
  console.log("Oranžová = Posledný deň. ")
  console.log("Červená = Posledná hodina. ")

  var cx = mercX(clon);
  var cy = mercY(clat);

  //nakreslenie vsetkych zemetraseni za predoslych 30 dni
    for ( var i = 0; i < earthquakes30.length; i++) {
    var data = earthquakes30[i].split(/,/);
    var lat = data [1];
    var lon = data [2];
    var size = data [4];

    size = pow(size, 10);
    size = sqrt(size);

    var maxsize = sqrt(pow(10, 10));

    var x = mercX(lon) - cx;
    var y = mercY(lat) - cy;

    fill(0, 255, 0, 200);
    var polomer = map ( size, 0, maxsize, 3, 90);
    ellipse(x,y,polomer,polomer);
  }

  //nakreslenie vsetkych zemetraseni za predoslych 7 dni
  for ( var i = 0; i < earthquakes7.length; i++) {
    var data = earthquakes7[i].split(/,/);
    var lat = data [1];
    var lon = data [2];
    var size = data [4];

    size = pow(size, 10);
    size = sqrt(size);

    var maxsize = sqrt(pow(10, 10));

    var x = mercX(lon) - cx;
    var y = mercY(lat) - cy;

    fill(255, 255, 0, 200);
    var polomer = map ( size, 0, maxsize, 3, 90);
    ellipse(x,y,polomer,polomer);
  }

//nakreslenie vsetkych zemetraseni za predosly den
  for ( var i = 0; i < earthquakes1.length; i++) {
    var data = earthquakes1[i].split(/,/);
    var lat = data [1];
    var lon = data [2];
    var size = data [4];

    size = pow(size, 10);
    size = sqrt(size);

    var maxsize = sqrt(pow(10, 10));

    var x = mercX(lon) - cx;
    var y = mercY(lat) - cy;

    fill(255, 102, 0, 200);
    var polomer = map ( size, 0, maxsize, 3, 90);
    ellipse(x,y,polomer,polomer);
  }

//nakreslenie vsetkych zemetraseni za predoslu hodinu
  for ( var i = 0; i < earthquakes0.length; i++) {
    var data = earthquakes0[i].split(/,/);
    var lat = data [1];
    var lon = data [2];
    var size = data [4];

    size = pow(10, size);
    size = sqrt(size);

    var maxsize = sqrt(pow(10, 10));

    var x = mercX(lon) - cx;
    var y = mercY(lat) - cy;

    fill(255, 0, 0, 200);
    var polomer = map ( size, 0, maxsize, 3, 90);
    ellipse(x,y,polomer,polomer);
  }

}
