/*
 * ShiftOS Kernel
 * Copyright 2016 Carver Harrison
*/

// Object definitions
var apps = {}; // App Containers
var kernel = {
  random: {
    base26: function(length) {
      var text = "";
      var possible = "abcdefghijklmnopqrstuvwxyz";
      for( var i=0; i < length; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }
  }
};

// Variable definitions
var SHIFTOS_VERSION = "0.5.2"; // ShiftOS Version

// Kernel init
function kernel_init() {
  console.log("Started kernel");
}

function kernel_loop() {
  $('.t-codepoints').html(api.save.codepoints.get());
  $('.t-version').html(SHIFTOS_VERSION);
}
