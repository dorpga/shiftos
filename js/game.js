/*
 * ShiftOS Game Engine
 * Copyright 2016 Carver Harrison
*/

var game = {
  firstrun: true,
  intro: function() {
    Cookies.set("started", true, {path: ''});
  },
  debug: {
    resetFirstRun: function() {
      Cookies.remove("started", {path: ''});
      console.log("Finished reseting first run");
    }
  }
}

// Game init
function game_init() {
  game.firstRun = !Cookies.get("started", {path: ''}); // Check first run
  if (game.firstRun) {
    console.log("Game has not been started before"); // Print out if the game has been run before
    game.intro();
  }
  console.log("Started game"); // Finish game init
}
