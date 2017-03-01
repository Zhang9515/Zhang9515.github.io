"use strict";

var map;

$(function() {
  
    $(".menu_main").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    $(".menu_me").click(function() {
        $('html, body').animate({
            scrollTop: $(".about").offset().top - 51
        }, 500);
    });

    $(".menu_dev").click(function() {
        $('html, body').animate({
            scrollTop: $(".development").offset().top - 51
        }, 500);
    });

    $(".menu_hobbies").click(function() {
        $('html, body').animate({
            scrollTop: $(".hobbies").offset().top - 51
        }, 500);
    });

    $(".menu_travel").click(function() {
        $('html, body').animate({
            scrollTop: $(".travel").offset().top - 51
        }, 500);
    });

    $(".menu_contact").click(function() {
        $('html, body').animate({
            scrollTop: $(".contact").offset().top

        }, 500);
    });


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
