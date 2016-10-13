/*
 * ShiftOS Kernel
 * Copyright 2016 Carver Harrison
*/

// Variable definitions
const SHIFTOS_VERSION;

// Kernel init
function kernel_init() {
  SHIFTOS_VERSION = "1.0";
  console.log("Started kernel");
}
