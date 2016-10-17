/*
 * ShiftOS Shiftorium
 * Copyright 2016 Carver Harrison
*/

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
