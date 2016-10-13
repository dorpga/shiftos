/*
 * ShiftOS UI
 * Copyright 2016 Carver Harrison
*/

// UI functions and settings
var UI = {
  openGuiApp: function(app) {
  },
  openCliApp: function(app) {
  },
  openDialog: function(title, message, icon, type) {
    var buttons;
    switch (type) {
      case "message":
        buttons = "<button class='ui-dialog-button-submit'>OK</button>";
        break;
    }
    $("#ui-display").append("<div class='ui-dialog' " + title + "' id='dialog-'" + UI.nextDialogId + "'><div class='ui-dialog-icon'><img src='images/dialog/" + icon + "' height='64' width='64' alt='" + icon + "' />" + "</div><div class='ui-dialog-message'>" + message + "</div><div class='ui-dialog-buttons'>" + buttons + "</div></div>");
    $("#dialog-" + UI.nextDialogId).dialog();
    UI.nextDialogId++;
  },
  closeApp: function(app) {
  },
  toggleFullscreen: function(app) {
  },
  openApps: [],
  nextDialogId: 0
};

// Init ui
function ui_init() {
  console.log("Started ui"); // Finish init
}
