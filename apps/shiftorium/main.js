apps.shiftorium = {
  main: function() {
    var did = kernel.random.base26(4);
    $("#ui").append(`
      <div class='ui-shiftorium' id='app-` + did + `'>
        <table>
          <tr>
            <td colspan="2">
              <div class='ui-shiftorium-title'>
                <h1>Shiftorium</h1>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class='ui-shiftorium-upgrades'>
                <ul class='ui-shiftorium-upgrades-list'>
                </ul>
              </div>
            </td>
            <td>
              <div class='ui-shiftorium-info'>
                  <h2 class='ui-shiftorium-info-title'>Welcome to the Shiftorium!</h3>
                  <p class='ui-shiftorium-info-text'>Select a upgrade for more info.</p>
                  <span class='ui-shiftorium-info-cost'>0 Codepoints</span>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <div class='ui-shiftorium-buttons'>
                <button class='btn ui-shiftorium-button ui-shiftorium-button-buy'>Buy</button>
                <button class='btn ui-shiftorium-button ui-shiftorium-button-exit'>Exit</button>
                <span class='ui-shiftorium-codepoints'><span class='t-codepoints'></span> Codepoints</span>
              </div>
            </td>
          </tr>
        </table>
      </div>
    `);
    $("#app-" + did).dialog();
  },
  showUpgrade: function(o) {
    apps.shiftorium.selectedUpgrade = o.iname;
    $('.ui-shiftorium-info-title').html(o.name);
    $('.ui-shiftorium-info-text').html(o.description);
    $('.ui-shiftorium-info-cost').html(o.cost + " Codepoints");
    $('.ui-shiftorium-button-buy').click(function () {
      enableUpgrade(o.group, o.iname);
      api.save.codepoints.remove(o.cost);
      $('.ui-shiftorium-info-cost').html("Purchaced");
    });
  }
}

apps.shiftorium.main();
for (i = 0; i < Object.getOwnPropertyNames(allUpgrades).length; i++) {
   $('.ui-shiftorium-upgrades-list').append(`
    <li>
      <a href="javascript:apps.shiftorium.showUpgrade(allUpgrades[Object.getOwnPropertyNames(allUpgrades)[` + i + `]])">` + allUpgrades[Object.getOwnPropertyNames(allUpgrades)[i]].name + `</a>
    </li>`
   );
   console.log("Added " + allUpgrades[Object.getOwnPropertyNames(allUpgrades)[i]].name + " to shiftorium list");
}
