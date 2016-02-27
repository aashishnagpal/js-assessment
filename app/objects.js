exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    var properties = [];
    var temp;
    for (temp in obj) {
      if (obj.hasOwnProperty(temp)) {
        properties.push(temp + ': ' + obj[temp]);
      }
    }

    return properties;
  }
};
