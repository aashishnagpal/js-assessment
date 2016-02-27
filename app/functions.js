exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(str2) {
      return str + ', ' + str2;
    }
  },

  makeClosures : function(arr, fn) {
    var closures = [];
    
    function closureFunc (item) {
      return function() {
        return fn(item);
      };
    }
    var i = 0;
    for (; i < arr.length; i++) {
      closures.push(closureFunc(arr[i]));
    }

    return closures;
    
  },

  partial : function(fn, str1, str2) {

  },

  useArguments : function() {
    var sum = 0;
    
    var i = arguments.length - 1;
    for (; i >= 0; i--) {
      sum += arguments[i];
    }

    return sum;
  },

  callIt : function(fn) {
    var args = [];
    var i = 1;
    for (; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    fn.apply(null, args); 
  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
