apps.fileskimmer = {
  main: function() {
  var did = kernel.random.base26(4)
   $('#ui').append(`
    <div id='app-` + did + `' class='ui-fm'>
      <div class='ui-fm-ip'>
        <input id='ipfi-` + did + `' class='ui-fm-ip-fi' placeholder='Path'>
        <button id='ipsb-` + did + `' class='ui-fm-ip-sb'>Go</button>
      <div>
      <div class='ui-fm-fp'>
        <ul id='fpul-` + did + `class='ui-fm-fp-ul'>
        </ul>
      </div>
    </div>
   `);
   $('#app-' + did).dialog();
   $('#ipsb-' + did).click(function() {
     console.log("File Skimmer: User clicked on #ipsb in " + did);
     for(i = 0; i <= $('#ipfi-' + did).value().length; i++) {
      $('#fpul' + did).append("<li><a href='javascript:kernel.openFile(\"" + $('#ipfi-' + did).value() + "\")'>" + $('#ipfi-' + did).value() +"<a></li>");
      console.log("File Skimmer: Found File " + $('#ipfi-' + did).value());
     }
   });
  }
};

apps.fileskimmer.main();
