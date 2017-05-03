navigation = function() {
'use strict';

    var defaults = {
      transitionSpeed: 250,           // Number:    Specify the transition speed of the menu
      transitionType: 'slide',        // String:    Specify the type of menu transition
      location: 'top',                // String:    Specify the location of the menu's origin
      menuToggle: "#navBtn",           // Selector:  Specify the ID of the toggle element
      menuID: "#navMenu",              // Selector:  Specify the ID of the main menu element
      navbarID: "#navBar",             // Selector:  Specify the ID of the navigation bar
      container: "#main"
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
  var main  = document.querySelector(defaults.container);
      //btn   = document.querySelector(defaults.menuToggle);
      //nabar = document.querySelector(defaults.navbarID);

function initNavigation() {
  main.classList.add('closed');
  menu.classList.add('closed');
  //menu.classList.add(defaults.transitionSpeed);
  menu.setAttribute("style", "speed:" + defaults.transitionSpeed);




    function b(){
      menu.classList.toggle('closed');
      menu.classList.toggle('open');
      main.classList.toggle('closed');
      main.classList.toggle('open');
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
