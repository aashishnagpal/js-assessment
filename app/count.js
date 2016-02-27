exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var timer;
    function logger() {
      console.log(start++);
      if (start <= end) {
        timer = setTimeout(logger, 100);
      }
    }
    
    logger();
    
    return {
      cancel: function () {
        clearTimeout(timer);
      }
    }
  }
};
