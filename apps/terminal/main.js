/*
 * ShiftOS Terminal
 * (C) 2016 Carver Harrison
*/

apps.terminal = {
  tty: 0,
  main: function() {
    $("#ui").append("<div class='ui-terminal' id='tty" + apps.terminal.tty + "'></div>" );
    function($, undefined) {
    $('#tty' + apps.terminal.tty).terminal(function(command, term) {
        var cmd = command.split(' ');
        switch (cmd[0]) {
          case "ver":
            term.echo("ShiftOS Version " + SHIFTOS_VERSION);
            break;
          case "help":
            term.echo("help - Command list");
            term.echo("ver - Version");
            break;
          default:
            term.echo("Unknown Command: " + cmd[0]);
        }
    }, {
        greetings: 'Javascript Interpreter',
        name: 'js_demo',
        height: 200,
        prompt: 'js> '
    });
    $("#tty" + apps.terminal.tty).dialog();
    apps.terminal.tty++;
  }
}

apps.terminal.main();
