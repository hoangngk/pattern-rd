
var Interface = require('./../helpers/interface.class');

var AjaxHandler = new Interface('AjaxHandler', ['request', 'createXhrObject']);

var SimpleHandler = function() {};

SimpleHandler.prototype = {
  request: function(method, url, callback, postVars) {
    var xhr = this.createXhrObject();

    xhr.onreadystatechange = function() {
      if (xhr.readyState !== 4) return;
      (xhr.status === 200) ? callback.success(xhr.responseText, xhr.responseXML) : callback.failure(xhr.status);
    };

    xhr.open(method, url, true);

    if (method !== 'POST') postVars = null;

    xhr.send(postVars);

  },
  createXhrObject: function() { // Factory method
    var methods = [
      function() { return new XMLHttpRequest(); },
      function() { return new ActiveXObject('Msxml2.XMLHTTP'); },
      function() { return new XMLHttpRequest('Microsoft.XMLHTTP'); }
    ];

    for (var i = 0; i < methods.length; i++) {
      try {
        method[i]();
      }
      catch (e) {
        continue;
      }
      this.createXhrObject = methods[i]; // memoize the method, this is interesting thing
      return methods[i];
    }
    throw new Error('SimpleHandler: Cound not create a XHR object.');
  }
};

// perform a request
var myHandler = new SimpleHandler();
var callback = {
  success: function() { alert('success'); },
  failure: function() { alert('failure'); }
};
myHandler.request('GET', 'script.php', callback);