/*
 * ShiftOS Game Engine
 * Copyright 2016 Carver Harrison
*/

// Game structure
var game = {
  firstrun: true,
  codepoints: 0,
  intro: function() {
    localStorage.started = true;
    localStorage.codepoints = 0;
    localStorage.shiftorium = {
      apps: {
        "dummy": true;
      },
      games: {
        "dummy": true;
      },
      features: {
        "dummy": true;
      },
      shiftlets: {
        "dummy": true;
      },
      groups: {
        "dummy": true;
      }
    };
  },
  clearSave: function() {
    localStorage.clear();
    console.log("Cleared save file");
  },
  debug: {
    resetFirstRun: function() {
      localStorae.firstRun = false;
      console.log("Finished reseting first run");
    }
  },
  save: function() {
    localStorage.shiftorium = game.shiftorium; // Save shiftorium data
    localStorage.codepoints = game.codepoints; // Save codepoints
  },
  shiftorium: {
  }
}

// Game init
function game_init() {
  game.firstRun = !localStorage.started; // Check first run
  if (game.firstRun) {
    console.log("Game has not been started before"); // Print out if the game has been run before
    game.intro();
  }
  game.shiftorium =  {
    apps: localStorage.shiftorium.apps,
    games: localStorage.shiftorium.games,
    features: localStorage.shiftorium.features,
    shiftlets: localStorage.shiftorium.shiftlets,
    groups: localStorage.shiftorium.groups
  };
  game.codepoints = localStorage.codepoints; // Update codepoints
  console.log("Started game"); // Finish game init
}
