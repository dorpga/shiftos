/*
 * ShiftOS Terminal
 * (C) 2016 Carver Harrison
*/

apps.terminal = {
  currentDirectory: "/",
  tty: 0,
  main: function() {
    $("#ui").append("<div class='ui-terminal' id='tty" + apps.terminal.tty + "' style='background-color:black'></div>" );
    $('#tty' + apps.terminal.tty).terminal(function(command, term) {
        var cmd = command.split(' ');
        switch (cmd[0]) {
          case "ver":
            term.echo("ShiftOS Version " + SHIFTOS_VERSION);
            break;
          case "tty":
            term.echo($('#tty' + apps.terminal.tty).terminal("name"));
            break;
          case "js":
            term.echo(eval(cmd[1]));
            break;
          case "help":
            term.echo("help - Command list");
            term.echo("tty - Get current terminal session");
            term.echo("js - Run Javscript Command");
            term.echo("ver - Version");
            break;
          default:
            term.echo("Unknown Command: " + cmd[0]);
        }
    }, {
        greetings: 'ShiftOS Terminal',
        name: 'tty' + apps.terminal.tty,
        height: 200,
        prompt: apps.terminal.currentDirectory + '# '
    });
    $("#tty" + apps.terminal.tty).dialog();
    apps.terminal.tty++;
  }
}

apps.terminal.main();
