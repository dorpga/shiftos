console.log("Loaded helloworld");

apps.helloworld = {
  main: function() {
    // ShiftOS bootstrap for graphical apps
    $("#ui").append("<div class='ui-app' id='app-helloworld' title='Hello World'><h1>Hello, World!</h1></div>");
    $("#app-helloworld").dialog();
  }
}

apps.helloworld.main();
