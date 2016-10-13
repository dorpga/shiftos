/*
 * ShiftOS Filesystem
 * Copyright 2016 Carver Harrison
*/

var filesystem = {
 write: function(n, d) {
  eval("filesystem.fs" + n + " = '" + d + "';");
 },
 read: function(n) {
  return eval("filesystem.fs" + n);
 },
 delete: function(n) {
  eval("filesystem.fs" + n + " = null");
 },
 exists: function(n) {
  return eval("filesystem.fs" + n + " != null");
 },
 fs: {}
};

function filesystem_init() {
  console.log("Started filesystem");
}
