/*
 * ShiftOS Game Engine
 * Copyright 2016 Carver Harrison
*/

// Game structure
var game = {
  firstrun: true,
  codepoints: 0,
  intro: function() {
    Cookies.set("started", true, {});
    Cookies.set("codepoints", 0, {});
    Cookies.set("shiftorium", {
      apps: {
      },
      games: {
      },
      features: {
      },
      shiftlets: {
      },
      groups: {
      }
    }, {});
  },
  clearSave: function() {
    Cookies.remove("", {});
    console.log("Cleared save file");
  },
  debug: {
    resetFirstRun: function() {
      Cookies.remove("started", {});
      console.log("Finished reseting first run");
    }
  },
  save: function() {
    Cookies.set("shiftorium", game.shiftorium, {}); // Save shiftorium data
    Cookies.set("codepoints", game.codepoints, {}); // Save codepoints
  },
  shiftorium: {
  }
}

// Game init
function game_init() {
  game.firstRun = !Cookies.get("started", {}); // Check first run
  if (game.firstRun) {
    console.log("Game has not been started before"); // Print out if the game has been run before
    game.intro();
  }
  game.shiftorium =  {
    apps: JSON.parse(Cookies.get("shiftorium")).apps,
    games: JSON.parse(Cookies.get("shiftorium")).games,
    features: JSON.parse(Cookies.get("shiftorium")).features,
    shiftlets: JSON.parse(Cookies.get("shiftorium")).shiftlets,
    groups: JSON.parse(Cookies.get("shiftorium")).groups
  };
  game.codepoints = Cookies.get("codepoints"); // Update codepoints
  console.log("Started game"); // Finish game init
}
