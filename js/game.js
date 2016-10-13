/*
 * ShiftOS Game Engine
 * Copyright 2016 Carver Harrison
*/

var game = {
  firstrun: true
}

// Game init
function game_init() {
  game.firstRun = !Cookies.get('started');  // Check first run
  if (game.firstRun) console.log("Game has not been started before");  // Print out if the game has been run before
  console.log("Started game");  // Finish game init
}
