/*
 * ShiftOS Terminal
 * (C) 2016 Carver Harrison
*/

apps.terminal = {
  tty: 0,
  main: function() {
    $("#ui").append("<div class='ui-terminal-container' id='tty" + apps.terminal.tty + "'><pre class='ui-terminal'></pre><div class='ui-tty-input-container'><input class='ui-tty-input' id='ttyin-" + apps.terminal.tty + "><button class='ui-tty-submit-button' id='ttysubmit-" + apps.terminal.tty + "'>OK</button></div></div>" );
    $("#tty" + apps.terminal.tty).dialog();
  }
}

apps.terminal.main();
