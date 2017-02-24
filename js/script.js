"use strict";
var map;

$(function() {
    initMap();
});


function initMap() {


    var list = [Kiev, Odessa, Chernivtsi, Lviv, Ternopil, Zhitomir, Bila_Zerkva, Uman, Sevastopol, Simferopol,
        Herson, Lazurnoe, Vinniza, Poltava, Zaporizhya, Uzhgorod, Mukachevo, Ivano_F, Kam_Pod, Hmelnizkiy, Belgorod_Dn,

    ]

    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 50.453314,
            lng: 30.542264
        },
        zoom: 3,
        minZoom: 3,
        maxZoom: 10
    });

    list.forEach(function(place) {
        new google.maps.Marker({
            position: place,
            map: map,
        });
    });

}
