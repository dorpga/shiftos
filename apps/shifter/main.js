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
  }
}

apps.shifter.main();
