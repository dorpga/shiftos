/*
 * ShiftOS Game Engine
 * Copyright 2016 Carver Harrison
*/

var game = {
  firstrun: true
}

function game_init() {
  game.firstRun = !Cookies.get('started');
  console.log("Started game")
}
