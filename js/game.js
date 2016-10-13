/*
 * ShiftOS Game Engine
 * Copyright 2016 Carver Harrison
*/

// Game structure
var game = {
  firstrun: true,
  intro: function() {
    Cookies.set("started", true, {});
    Cookies.set("codepoints", 0, {});
  },
  debug: {
    resetFirstRun: function() {
      Cookies.remove("started", {});
      console.log("Finished reseting first run");
    }
  }
}

// Game init
function game_init() {
  game.firstRun = !Cookies.get("started", {}); // Check first run
  if (game.firstRun) {
    console.log("Game has not been started before"); // Print out if the game has been run before
    game.intro();
  }
  console.log("Started game"); // Finish game init
}
