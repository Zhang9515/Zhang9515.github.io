"use strict";
var map;

$(function() {
    updateTime();

    initMap();
});

function updateTime() {

    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();

    var time = "";
    time = (hour < 10) ? "0" + hour + ':' : hour + ':';
    time += (minutes < 10) ? "0" + minutes : minutes;

    $(".time").html(time);

    setTimeout(updateTime, 1000);
}



function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 8
    });
}
