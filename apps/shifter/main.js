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
              </td>
            </tr>
          </tbody>
          <tfoot>
            <span>
              <button onlick='apps.shifter.apply()'>Apply</button>
              <button onlick='apps.shifter.reset()'>Reset</button>
            </span>
          </tfoot>
        </table>
      </div>
    `);
    $("#app-" + myId).dialog();
  }
}

apps.shifter.main();
