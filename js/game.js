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
    Cookies.set("shiftorium", {
      apps: {
        installed: [],
        notinstalled: []
      },
      games: {
        installed: [],
        notinstalled: []
      },
      features: {
        installed: [],
        notinstalled: []
      },
      shiftlets: {
        installed: [],
        notinstalled: []
      },
      groups: {
        installed: [],
        notinstalled: []
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
    apps: {
      installed: JSON.parse(Cookies.get("shiftorium")).apps.installed,
      notinstalled: JSON.parse(Cookies.get("shiftorium")).apps.notinstalled,
    },
    games: {
      installed: JSON.parse(Cookies.get("shiftorium")).games.installed,
      notinstalled: JSON.parse(Cookies.get("shiftorium")).games.notinstalled,
    },
    features: {
      installed: JSON.parse(Cookies.get("shiftorium")).features.installed,
      notinstalled: JSON.parse(Cookies.get("shiftorium")).features.notinstalled,
    },
    shiftlets: {
      installed: JSON.parse(Cookies.get("shiftorium")).shiftlets.installed,
      notinstalled: JSON.parse(Cookies.get("shiftorium")).shiftlets.notinstalled,
    },
    groups: {
      installed: JSON.parse(Cookies.get("shiftorium")).groups.installed,
      notinstalled: JSON.parse(Cookies.get("shiftorium")).groups.notinstalled,
    }
  };
  console.log("Started game"); // Finish game init
}
