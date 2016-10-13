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
    read: function(c) {
      return filesystem.read(n);
    },
    delete: function(c) {
      filesystem.delete(n);
    }
  }
};
