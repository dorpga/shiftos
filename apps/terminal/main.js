/*
 * ShiftOS Terminal
 * (C) 2016 Carver Harrison
*/

apps.terminal = {
  currentDirectory: "/",
  main: function() {
    var myId = kernel.random.base26(4)
    $("#ui").append("<div class='ui-terminal' id='app-" + myId + "' style='background-color:black' title='Terminal'></div>" );
    $('#app-' + myId).terminal(function(command, term) {
        var cmd = command.split(' ');
        switch (cmd[0]) {
          case "ver":
            term.echo("ShiftOS Version " + SHIFTOS_VERSION);
            break;
          case "js":
            term.echo(eval(cmd[1]));
            break;
          case "launch":
            term.echo(UI.openApp(cmd[1]));
            break;
          case "debug":
            switch (cmd[1]) {
              case "clearsave":
                game.clearSave();
                break;
              case "resetfirstrun":
                game.debug.resetFirstRun();
                break;
            }
            break;
          case "help":
            term.echo("help - Command list");
            term.echo("js - Run javscript command");
            term.echo("launch - Start application");
            term.echo("debug - Run debug commands");
            term.echo("ver - Version");
            break;
          default:
            term.echo("Unknown Command: " + cmd[0]);
        }
    }, {
        greetings: 'ShiftOS Terminal',
        name: 'Terminal',
        height: 400,
        prompt: apps.terminal.currentDirectory + '# '
    });
    $("#app-" + myId).dialog();
  }
}

apps.terminal.main();
