/*
 * ShiftOS Init
 * Copyright 2016 Carver Harrison
*/

kernel_init(); // Init the kernel
filesystem_init(); // Init the filesystem
game_init(); // Init the game
ui_init(); // Init the ui
console.log("ShiftOS " + SHIFTOS_VERSION); // Print out version
UI.createDialog("ShiftOS", "ShiftOS Started", "finished-init.png", "message"); // Create welcome dialog
