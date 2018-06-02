// @flow

function makeRegistry(base) {
  return {
    _data: {},
    add(name, func) {
      // precautionary case conversion, as later querying of
      // the registry by function-caller uses lower case as well.
      // eslint-disable-next-line
      name = name.toLowerCase();

      // eslint-disable-next-line
      if (this._data.hasOwnProperty(name)) {
        // TODO warn
      }
      this._data[name] = func;
    },
    addMultiple(functions) {
      Object.keys(functions).forEach(name => {
        this.add(name, functions[name]);
      });
    },
    get(name) {
      return this._data[name] || (base && base.get(name));
    },
    getLocalFunctions() {
      return this._data;
    },
    inherit() {
      return makeRegistry(this);
    },
    create() {
      return makeRegistry(base);
    },
  };
}

module.exports = makeRegistry(null);
