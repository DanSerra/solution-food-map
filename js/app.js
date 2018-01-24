//  Data de restaurantes
var restaurants = [{
    "name": "Goethe-Institut Mexiko",
    "img": "../assets/img/GIMexiko.jpg",
    "address": "Tonalá 43, Roma Nte., 06700 Ciudad de México, CDMX",
    "category": "Mexicana",
    "price": "$",
    "coordinates": {
      lng: -99.1637556,
      lat: 19.4201687
    }
  },
  {
    "name": "Huset",
    "img": "../assets/img/huset_roma.jpg",
    "address": "Colima 256, Roma Nte., 06700 Ciudad de México, CDMX",
    "category": "Gourmet",
    "price": "$$",
    "coordinates": {
      lng: -99.1640023,
      lat: 19.4192023
    }
  },
  {
    "name": "Yuban",
    "img": "../assets/img/yuban-m.jpg",
    "address": "Colima 268, Roma Nte., 06700 Ciudad de México, CDMX",
    "category": "Mexicana",
    "price": "$$$",
    "coordinates": {
      lng: -99.1640023,
      lat: 19.4192023
    }
  },
  {
    "name": "Butcher & Sons Roma",
    "img": "../assets/img/butcher1.jpg",
    "address": "Orizaba 87, Roma Nte., 06700 Ciudad de México, CDMX",
    "category": "Hamburguesería",
    "price": "$$$",
    "coordinates": {
      lng: -99.1611437,
      lat: 19.4193863
    }
  },
  {
    "name": "Pan D'Monium Antojeria Vegana",
    "img": "../assets/img/pan.jpeg",
    "address": "Orizaba s/n, Roma Norte, Roma Nte., 06700 Cuauhtémoc, CDMX",
    "category": "Vegana",
    "price": "$$",
    "coordinates": {
      lng: -99.1610123,
      lat: 19.4197784
    }
  },
  {
    "name": "Burro De Oro",
    "img": "../assets/img/burrooro.jpg",
    "address": "Orizaba y Colima, Roma Norte, Cuauhtémoc, 06700 Ciudad de México, D.F., Roma Nte., 06700 Ciudad de México, CDMX",
    "category": "Burritos",
    "price": "$",
    "coordinates": {
      lng: -99.1606958,
      lat: 19.41986
    }
  }
];

function loadPage() {
  splash();
  showRestaurants(restaurants);
  $('#search').keyup(filterRestaurants);
}

function splash() {
  setInterval(function() {
    //location.replace("views/view-2.html");
    $('#splash').hide();
    $('#principal').removeAttr('class');
  }, 5000);
}

// Pinta en el HTML la plantilla con la info de los restaurantes
function showRestaurants(array) {

  var contedorCart = $('<article class="item-restaurante"/>');
  var  colum = $('<div class="col s12 m12"/>');
  var  cardHor = $('<div class="card horizontal"/>');
  var  cardImage= $('<div class="card-image"/>');
  var  image = $('<img class="responsive-img src="' + value.img + '" alt="');
  var  cardStac = $('<div class="card-stacked"/>');
  var  cardContent =$( '<div class="card-content"/>');
  var  title=$('<h5/>');
  var  categoria= $('<p/>'),
  var  action= $('<div class="card-action">');
  var  atributos = $('<a href="#modal1" class="modales" data-lat="__lat__" data-lng="__lng__" data-name="__name__" data-src="__src__" data-price="__price__" data-category="__category__" data-address="__address__" class="cambiarMapa modal-trigger">Ver detalles</a>')





    // Plantilla para hacer la tarjeta de restaurantes en el html
    // var template = '<article class="item-restaurante">' +
    //       '<div class="col s12 m12">' +
    //           '<div class="card horizontal">' +
    //               '<div class="card-image">' +
    //                   '<img class="responsive-img" src="__src__">' +
    //               '</div>' +
    //               '<div class="card-stacked">' +
    //                   '<div class="card-content">' +
    //                       '<h5>__name__</h5>' +
    //                     '<p>Comida __category__</p>' +
    //                   '</div>' +
    //                   '<div class="card-action">' +
    //                   //en los atributos data guardamos toda la información que más adelante queremos ocupar para nuestros  modales o para la API de Google Maps
    //                 '<a href="#modal1" class="modales" data-lat="__lat__" data-lng="__lng__" data-name="__name__" data-src="__src__" data-price="__price__" data-category="__category__" data-address="__address__" class="cambiarMapa modal-trigger">Ver detalles</a>' +
    //              '</div>' +
    //               '</div>' +
    //           '</div>' +
    //       '</div>' +
    //    '</article>';

    // var finalTemplate = "";
    // array.forEach(function (restaurant) {
    // 	finalTemplate += template.replace("__src__", restaurant.img)
    // 						  .replace("__name__", restaurant.name)
    //                           .replace("__category__", restaurant.category)
    //                           .replace("__lat__", restaurant.coordinates.lat)
    // 						  .replace("__lng__", restaurant.coordinates.lng)
    // 						  .replace("__name__", restaurant.name)
    // 						  .replace("__src__", restaurant.img)
    // 						  .replace("__price__", restaurant.price)
    // 						  .replace("__category__", restaurant.category)
    // 						  .replace("__address__", restaurant.address);
    //
    // });

    $("#restaurants-list").html(finalTemplate);
}

// Hace el filtro por restaurantes (lo devuleve en arreglo)
var filterRestaurants = function() {
  if ($('#search').val().toLowerCase().trim().length >0){
    var searchRestaurants =$('#search').val().toLowerCase();
    var filterRestaurants = restaurants.filter(function(rest){
      return rest.name.toLowerCase().indexOf(searchRestaurants)>=0;
    })
    showRestaurants(filterRestaurants);
  }
  else {
    $('#restaurant-list').empty();
    showRestaurants(restaurants);
  }
};

// Pintar modal con detalles de cada restaurant
var paintModal = function() {
  var name= $(this).data('name');
  var price = $(this).data('price');
  var category =$(this).data('category');
  var address =$(this).data('address');

}


$(document).ready(loadPage);
