"use strict";

$(function () {
    updateTime();

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
