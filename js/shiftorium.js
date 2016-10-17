/*
 * ShiftOS Shiftorium
 * Copyright 2016 Carver Harrison
*/

// All upgrades
var allUpgrades = {
    "shifter": {
        iname: "shifter",
        name: "Shifter",
        description: "Change the look of ShiftOS",
        group: "apps",
        cost: 25
    },
    "fileskimmer": {
        iname: "fileskimmer",
        name: "File Skimmer",
        description: "Just a file manager",
        group: "apps",
        cost: 25
    },
    "pong": {
        iname: "pong",
        name: "Pong",
        description: "Earn codepoints by playing pong",
        group: "games",
        cost: 10
    },
    "tetris": {
        iname: "tetris",
        name: "Tetris",
        description: "Earn codepoints by playing tetris",
        group: "games",
        cost: 10
    },
    "ui_dialog_titlebar": {
        iname: "ui_dialog_titlebar",
        name: "Window Titlebar",
        description: "Titlebar for windows and dialogs",
        group: "features",
        cost: 5
    },
    "ui_dialog_title": {
        iname: "ui_dialog_title",
        name: "Window Title",
        description: "Titles for windows and dialogs",
        group: "features",
        cost: 5
    },
    "ui_dialog_titlebar_close": {
        iname: "ui_dialog_titlebar_close",
        name: "Window Close Button",
        description: "Close windows with a button",
        group: "features",
        cost: 5
    },
    "ui_resizable_handle": {
        iname: "ui_resizable_handle",
        name: "Resize Handle",
        description: "Resize windows",
        group: "features",
        cost: 5
    }
};

// Enable an upgrade
function enableUpgrade(cat, name) {
  game.shiftorium[cat][name] = true;
}

// Disable an upgrade
function disableUpgrade(cat, name) {
  game.shiftorium[cat][name] = true;
}

// Check an upgrade's status
function checkUpgrade(cat, name) {
  return game.shiftorium[cat][name];
}
