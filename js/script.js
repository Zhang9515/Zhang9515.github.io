"use strict";

var map;

$(function() {
    initMap();
});


function initMap() {

    var list = [Kiev, Odessa, Chernivtsi, Lviv, Ternopil, Zhitomir, Bila_Zerkva, Uman, Sevastopol, Simferopol,
        Herson, Lazurnoe, Vinniza, Poltava, Zaporizhya, Uzhgorod, Mukachevo, Ivano_F, Kam_Pod, Hmelnizkiy, Belgorod_Dn,
        Yalta, Sudak, Alushta, Vien, Madrid, Barcelona, Zaragoza, Figueres, Collioure, Lisbon, Cascais, Sintra,
        Cabo_da_Roca, Munchen, Timisoara, Hunedoara, Split, Omis, Trogir, Mostar, Budva, Brescia, Venice, Milan, Minsk,
        Brest, Hatin, Antalya, Alanya, Athens, Varna
    ]

    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 48.198784,
            lng: 13.213503
        },
        zoom: 4,
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
