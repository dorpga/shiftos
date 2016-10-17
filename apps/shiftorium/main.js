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
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <div class='ui-shiftorium-buttons'>
                <button class='btn ui-shiftorium-button ui-shiftorium-button-buy'>Buy</button>
                <button class='btn ui-shiftorium-button ui-shiftorium-button-exit'>Exit</button>
              </div>
            </td>
          </tr>
        </table>
      </div>
    `);
    $("#app-" + did).dialog();
  }
}

apps.shiftorium.main();
for (i = 0; i < Object.getOwnPropertyNames(allUpgrades).length; i++) {
   $('.ui-shiftorium-upgrades-list').append(`
    <li>
      <a href="javascript:apps.shiftorium.showUpgrade(` + allUpgrades[Object.getOwnPropertyNames(allUpgrades)[i]].constructor.name + `)">` + allUpgrades[Object.getOwnPropertyNames(allUpgrades)[i]].name + `</a>
    </li>`
   );
   console.log("Added " + allUpgrades[Object.getOwnPropertyNames(allUpgrades)[i]].name + " to shiftorium list");
}
