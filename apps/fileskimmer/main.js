apps.fileskimmer = {
  main: function() {
  var did = kernel.random.base26(4)
   $('#ui').append(`
    <div id='app-` + did + `' class='ui-fm'>
      <div class='ui-fm-ip'>
        <input id='ipfi-'` + did + `' class='ui-fm-ip-fi' placeholder='Path'>
        <button id='ipsb-'` + did + `' class='ui-fm-ip-sb'>Go</button>
      <div>
      <div class='ui-fm-fp'>
        <ul class='ui-fm-fp-ul'>
        </ul>
      </div>
    </div>
   `);
   $('#app-' + did).dialog();
  }
};

apps.fileskimmer.main();
