apps.shifter = {
  main: function() {
    var myId = kernel.random.base26(4);
    $("#ui").append(`
      <div id='app-` + myId + `'>
        <table>
          <thead>
            <tr>
              <td>Shiftlets</td>
              <td>Settings</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ul id='ss-` + myId + `' class='shifter-shiftlets'>
                </ul>
              </td>
              <td>
                <ul id='st-` + myId + `' class='shifter-settings'>
                </ul>
              </td>
              <td>
                <div id='sp-` + myId + `' class='shifter-preview'>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class='shifter-buttons'>
          <button onclick='apps.shifter.apply()'>Apply</button>
          <button onclick='apps.shifter.reset()'>Reset</button>
        </div>
      </div>
    `);
    $("#app-" + myId).dialog();
    for (i = 0; i < Object.getOwnPropertyNames(allUpgrades).length; i++) {
      if (game.shiftorium.shiftlets[allUpgrades[Object.getOwnPropertyNames(allUpgrades)[i]].name]) {
       $("#ss-" + myId).append(`
        <li>
          <a href="javascript:apps.shifter.showShifter(allUpgrades[Object.getOwnPropertyNames(allUpgrades)[` + i + `]])">` + allUpgrades[Object.getOwnPropertyNames(allUpgrades)[i]].name + `</a>
        </li>`
       );
        console.log("Added " + allUpgrades[Object.getOwnPropertyNames(allUpgrades)[i]].name + " to shifter list");
      }
    }
  }
}

apps.shifter.main();
