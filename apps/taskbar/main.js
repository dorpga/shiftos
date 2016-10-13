apps.taskbar = {
  main: function() {
    $("#ui").append("\
                    <div class='ui-bottom'>\
                            <div id='utmm' class='ui-taskbar-menu-list'></div>\
                            <div class='ui-taskbar'>\
                              <div id='utm' class='ui-taskbar-menu'>\
                                <div id='utmb' class='ui-taskbar-menu-button'>Menu</div>\
                              </div>\
                              <div id='utt' class='ui-taskbar-tasks'></div>\
                              <div id='utr' class='ui-taskbar-tray'></div>\
                            </div>\
                      </div>\
    ");
    
    $("#utmm").menu();
    $("#utmm").hide();
    $("#utmb").click(function () {
      $("#utmm").toggle();
    });
  }
};

apps.taskbar.main()
