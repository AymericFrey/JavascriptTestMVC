var Observer = function() {
  this.update = function(message) {
    throw 'NotSupportedException';
  }
};

var Subject = function() {
  var callbacks = $.Callbacks("unique");
  this.notify = callbacks.fire;
  this.addObserver = callbacks.add;
  this.removeObserver = callbacks.remove;
};