apps.taskbar = {
  main: function() {
    $("#ui").append("\
                    <div class='ui-panel-top'>\
                            <div class='ui-taskbar'>\
                              <div id='utm' class='ui-taskbar-menu'>\
                                <div id='utmb' class='ui-taskbar-menu-button'>Menu</div>\
                              </div>\
                              <div id='utt' class='ui-taskbar-tasks'></div>\
                              <div id='utr' class='ui-taskbar-tray'></div>\
                            </div>\
                            <div id='utmm' class='ui-taskbar-menu-list'></div>\
                      </div>\
    ");
    
    $("#utmm").append("<ul id='utml'><li><div class='ui-menusection' id='ms-apps'>Applications</li>");
    
    for (i = 0; i <= game.installedApps.length; i++) {
      var cg = game.shiftorium.apps.installed[i];
      $("#ms-apps").append("<li><div class='ui-menuitem' id='ma-" + cg.internalName + "'>" + cg.name + "</div></li>");
      $("#ma-" + cg.internalName).click(function() {
         ui.openApp(cg.internalName);
      });
    }
    $("#utmm").append("</div></li>");
    
    $("#utmm").menu();
    $("#utmm").hide();
    $("#utmb").click(function () {
      $("#utmm").toggle();
    });
  }
};

apps.taskbar.main();
