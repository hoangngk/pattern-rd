// Constructor
var Interface = function(name, methods) {
  if (arguments.length != 2) {
    throw new Error('Interface constructor called with ' + arguments.length + 'arguments, but expected exactly 2.');
  }

  this.name = name;
  this.methods = [];
  for (var i = 0; i < methods.length; i++) {
    if (typeof methods[i] !== 'string') {
      throw new Error('Interface constructor expects method names to be passed in as a string');
    }
    this.methods.push(methods[i]);
  }
};

// static class method
Interface.ensureImplements = function(instance) {
  if (arguments.length < 2) {
    throw new Error('Function Interface.ensureImplements called with ' + arguments.length + ' arguments, but expected at least 2.');
  }

  for (var i = 1; i < arguments.length; i++) {
    var interface = arguments[i];

    if (interface.constructor !== Interface) {
      throw new Error('Function Interface.ensureImplements expects arguments two or above to be instance of Interface.');
    }

    for (var j = 0; j < interface.methods.length; j++) {
      var method = interface.methods[j];
      if (!instance[method] || typeof instance[method] !== 'function') {
        throw new Error('Function Interface.ensureImplements: instance does not implement the ' + interface.name + ' interface. Method ' + method + ' was not found.');
      }
    }
  }
};

module.exports = Interface;
