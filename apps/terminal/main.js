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
          case "move":
            $("#app-" + myId).position = {left: cmd[1], top: cmd[2]};
            break;
          case "title":
            $("#app-" + myId).attr("title") = cmd[1];
            break;
          case "rslarge":
            $("#app-" + myId).dialog({
              height: 800,
              width: 800
            });
            break;
          case "rssmall":
            $("#app-" + myId).dialog({
              height: 100,
              width: 100
            });
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
            term.echo("ver - Version");
            term.echo("js - Run javscript command");
            term.echo("launch - Start application");
            term.echo("debug - Run debug commands");
            term.echo("move - Move terminal window");
            term.echo("rslarge - Make terminal larger");
            term.echo("rssmall - Make terminal smaller");
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
