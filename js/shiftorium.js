/*
 * ShiftOS Shiftorium
 * Copyright 2016 Carver Harrison
*/

// All upgrades
var allUpgrades = {
    "shifter",
    "fileskimmer"
    "pong",
    "tetris",
    "ui_dialog_titlebar",
    "ui_dialog_title",
    "ui_dialog_titlebar_close",
    "ui_resizable_handle"
    "apps",
    "games",
    "features"
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
