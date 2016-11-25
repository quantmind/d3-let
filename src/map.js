const prefix = "$";


function Map () {
    this._array = [];
}


Map.prototype = map.prototype = {
    constructor: Map,

    size () {
        return this._array.length;
    },

    get (key) {
        return this[prefix + key];
    },

    set (key, value) {
        if (!this.has(key))
            this._array.push(key);
        this[prefix + key] = value;
        return this;
    },

    has (key) {
        return (prefix + key) in this;
    },

    clear () {
        var self = this;
        this.each((_, property) => {
            delete self[prefix + property];
        });
        this._array.splice(0);
    },

    keys () {
        var entries = [];
        this.each((_, key) => {
            entries.push(key);
        });
        return entries;
    },

    values () {
        var entries = [];
        this.each((v) => {
            entries.push(v);
        });
        return entries;
    },

    each (callback) {
        var a = this._array,
            key;
        for (var i=0; i<a.length; ++i) {
            key = a[i];
            callback(this.get(key), key, i);
        }
    }

};


function map(object, f) {
  var map = new Map;

  // Copy constructor.
  if (object instanceof Map) object.each(function(value, key) { map.set(key, value); });

  // Index array by numeric index or specified key function.
  else if (Array.isArray(object)) {
      var i = -1,
          n = object.length,
          o;
      if (f == null) while (++i < n) map.set(i, object[i]);
      else while (++i < n) map.set(f(o = object[i], i, object), o);
  }

  // Convert object to map.
  else if (object) for (var key in object) map.set(key, object[key]);

  return map;
}

export default map;
