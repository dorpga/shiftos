/*
 * ShiftOS UI
 * Copyright 2016 Carver Harrison
*/

// UI functions and settings
var UI = {
  openApp: function(app) {
    $.getScript("apps/" + app + "/main.js", function(){
      console.log("Started app " + app);
    });
  },
  openDialog: function(title, message, type) {
    var buttons;
    switch (type) {
      case "message":
        buttons = "<button class='ui-dialog-button-submit' onclick='$(\"#dialog-" + UI.nextDialogId + "\").dialog(\"close\")'>OK</button>";
        break;
    }
    $("#ui").append("<div class='ui-dialog' title='" + title + "' id='dialog-" + UI.nextDialogId + "'><div class='ui-dialog-message'>" + message + "</div><div class='ui-dialog-buttons'>" + buttons + "</div></div>");
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

function ui_loop() {
  // Upgrade: UI Dialog Title
  if(checkUpgrade("ui_dialog_title")) {
    $(".ui-dialog-title").show();
  } else {
    $(".ui-dialog-title").hide();
  }
}
