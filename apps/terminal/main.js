/*
 * ShiftOS Terminal
 * (C) 2016 Carver Harrison
*/

apps.terminal = {
  currentDirectory: "/",
  tty: 0,
  main: function() {
    $("#ui").append("<div class='ui-terminal' id='tty" + apps.terminal.tty + "app-" + kernel.random.base26(4) + "' style='background-color:black' title='Terminal'></div>" );
    $('#tty' + apps.terminal.tty).terminal(function(command, term) {
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
        name: 'tty' + apps.terminal.tty,
        height: 400,
        prompt: apps.terminal.currentDirectory + '# '
    });
    $("#tty" + apps.terminal.tty).dialog();
    apps.terminal.tty++;
  }
}

apps.terminal.main();
