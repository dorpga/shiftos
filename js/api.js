var api = {
  save: {
    codepoints: {
      add: function(c) {
        game.codepoints += c;
      },
      remove: function(c) {
        game.codepoints -= c;
      },
      get: function(c) {
        return game.codepoints
      }
    }
  },
  filesystem: {
    write: function(n, d) {
      filesystem.write(n, d);
    },
    read: function(n) {
      return filesystem.read(n);
    },
    delete: function(n) {
      filesystem.delete(n);
    }
  }
};
