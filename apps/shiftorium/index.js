apps.shiftorium = {
  main: function() {
    $("#ui").append(`
      <div class='ui-shiftorium'>
        <div class='ui-shiftorium-title'>
          <h1>Shiftorium</h1>
        </div>
        <div class='ui-shiftorium-upgrades'>
          <ul class='ui-shiftorium-upgrades-list'>
          </ul>
        </div>
        <div class='ui-shiftorium-info'>
            <img 
              src='/images/shiftorium/welcome.png'
              height='256'
              width='256'
              alt='Shiftorium Upgrade Image' 
              class='ui-shiftorium-image' 
            />
            <h2 class='ui-shiftorium-info-title'>Welcome to the Shiftorium!</h3>
            <p class='ui-shiftorium-info-text'>Select a upgrade for more info.</p>
        </div>
        <div class='ui-shiftorium-buttons'>
          <button class='btn ui-shiftorium-button ui-shiftorium-button-buy'>Buy</button>
          <button class='btn ui-shiftorium-button ui-shiftorium-button-exit'>Exit</button>
        </div>
      </div>
    `);
  }
}
