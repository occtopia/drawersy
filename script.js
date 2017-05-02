navigation = function() {
'use strict';

    var defaults = {
      transitionSpeed: 250,           // Number:    Specify the transition speed of the menu
      transitionType: 'slide',        // String:    Specify the type of menu transition
      location: 'top',                // String:    Specify the location of the menu's origin
      menuToggle: "#navBtn",           // Selector:  Specify the ID of the toggle element
      menuID: "#navMenu",              // Selector:  Specify the ID of the main menu element
      navbarID: "#navBar",             // Selector:  Specify the ID of the navigation bar
    };

  if (arguments[0] && typeof arguments[0] === "object") {
    this.options = extendDefaults(defaults, arguments[0]);
  }

  function extendDefaults(source, properties) {
    var property;
    for (property in properties) {
      if (properties.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    }
    return source;
  }

  var menu  = document.querySelector(defaults.menuID);
      //btn   = document.querySelector(defaults.menuToggle);
      //nabar = document.querySelector(defaults.navbarID);

function initNavigation() {

  menu.classList.add('closed');
  //menu.classList.add(defaults.transitionSpeed);
  menu.setAttribute("style", "speed:" + defaults.transitionSpeed);




    function b(){
      menu.classList.toggle('closed');
      menu.classList.toggle('open');
    }


    document.querySelector('a#navBtn').addEventListener('click', b );


}

initNavigation();




};

navigation(/*{
    transitionSpeed: 250,
    transitionType: 'slide',
    location: 'top',
    menuToggle: "#navBtn",           // Selector: Specify the ID of the custom toggle element
    menuID: "#navBar",
    navbarID: "#navBar",
}*/);









/*
  var defaults = {
    id_navMenu: 'navMenu',
    id_navBar: 'navBar',
    id_navBtn: 'navBtn',

    speed: 2000,
    transition: 'slide',
    entrance: 'top'
  };


      var navMenu = document.getElementById(this.defaults.menuID);
      var navBar  = document.getElementById(this.defaults.navBar);
      var navBtn  = document.getElementById(this.defaults.navBtn);


    document.getElementById(defaults.id_navMenu).classList.toggle(defaults.entrance);
    document.getElementById(defaults.id_navMenu).classList.toggle(defaults.transition);


  function b(){
    document.getElementById(this.defaults.menuID).classList.toggle('closed');
    document.getElementById(this.defaults.menuID).classList.toggle('open');
  }


document.querySelector('a#navBtn').addEventListener('click', b );


}


//navSlider('#this', defaults);
var nav = navSlider(".nav-collapse",{});
*/
