# SkySlider
Simple, lightweight, responsive jQuery Plugin for image slider and carousel with API and callbacks.

Browser: IE10+

DEMO - https://codepen.io/skyangel/pen/ZoZWzO

#For use: 

    var $slider = $('#slider').skySlider();

#Default params:

    {
        interval: 3000,        
        carousel: false, //true or false
        duration: 500,
        items: 1,  //set slide items in viewport
        loop: false, //true or false
        autoplay: false, //true or false
        callback: function() {} //in callback you can get slide sets index
    }

#Carousel

    var $carousel = $('#carousel').skySlider({        
        interval: 3000,
        items: 2,
        carousel: true,
        loop: true,
        autoplay: true,
        callback: function(number) {
            console.log('Current slideSet - ' + number);
        }
    });

#API

    Total number of slides - $slider.getSlideSetsCount()