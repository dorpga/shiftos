apps.taskbar = {
  main: function() {
    $("#ui").append("\
                    <div class='ui-mtt'>\
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
    
    var o = "<ul id='utml'><li><div class='ui-menusection' id='ms-apps'>Applications</div>"
    
    
    for (i = 0; i <= game.shiftorium.apps.length; i++) {
      var cg = game.shiftorium.apps.installed[i];
      o += "<li><div class='ui-menuitem' id='ma-" + cg.internalName + "'>" + cg.name + "</div></li>"
      $("#ma-" + cg.internalName).click(function() {
         ui.openApp(cg.internalName);
      });
    }
    $("#utmm").append(o + "</li></ul>");
    
    $("#utmm").menu();
    $("#utmm").hide();
    $("#utmb").click(function () {
      $("#utmm").toggle();
    });
  }
};

apps.taskbar.main();
