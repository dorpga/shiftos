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
  debug: {
    resetFirstRun: function() {
      Cookies.remove("started", {});
      console.log("Finished reseting first run");
    }
  },
  shiftorium: {
    apps: {
      installed: Cookies.get("shiftorium").apps.installed,
      notinstalled: Cookies.get("shiftorium").apps.notinstalled,
    },
    games: {
      installed: Cookies.get("shiftorium").games.installed,
      notinstalled: Cookies.get("shiftorium").games.notinstalled,
    },
    features: {
      installed: Cookies.get("shiftorium").features.installed,
      notinstalled: Cookies.get("shiftorium").features.notinstalled,
    },
    shiftlets: {
      installed: Cookies.get("shiftorium").shiftlets.installed,
      notinstalled: Cookies.get("shiftorium").shiftlets.notinstalled,
    },
    groups: {
      installed: Cookies.get("shiftorium").groups.installed,
      notinstalled: Cookies.get("shiftorium").groups.notinstalled,
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
