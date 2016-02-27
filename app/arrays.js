exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    if (arr && typeof arr.length === 'number') {
      var i = arr.length - 1;
      for (; i >= 0; i--) {
        if (arr[i] === item) {
          return i;
        }
      }
    }
    return -1;
  },

  sum : function(arr) {
    var sum = 0;
    if (arr && typeof arr.length === 'number') {
      var i = arr.length - 1;
      for (; i >= 0; i--) {
        sum += arr[i];
      }
    }
    return sum;
  },

  remove : function(arr, item) {
    var resultArr = [];
    if (arr && typeof arr.length === 'number') {
      var i = 0;
      for (; i < arr.length; i++) {
        if (arr[i] !== item) {
          resultArr.push(arr[i]);
        }
      }
    }
    return resultArr;
  },

  removeWithoutCopy : function(arr, item) {
    if (arr && typeof arr.length === 'number') {
      var i = arr.length - 1;
      for (; i >= 0; i--) {
        if (arr[i] === item) {
          arr.splice(i, 1);
        }
      }
    }
    return arr;
  },

  append : function(arr, item) {
    if (arr && typeof arr.length === 'number') {
      arr.push(item);
    }
    return arr;
  },

  truncate : function(arr) {
    if (arr && typeof arr.length === 'number') {
      arr.pop();
    }
    return arr;
  },

  prepend : function(arr, item) {
    if (arr && typeof arr.length === 'number') {
      arr.unshift(item);
    }
    return arr;
  },

  curtail : function(arr) {
    if (arr && typeof arr.length === 'number') {
      arr.shift();
    }
    return arr;
  },

  concat : function(arr1, arr2) {
    if (arr1 && typeof arr1.length === 'number' && arr2 && typeof arr2.length === 'number') {
      return arr1.concat(arr2);
    }
  },

  insert : function(arr, item, index) {
    if (arr && typeof arr.length === 'number') {
      arr.splice(index, 0, item);
      return arr;
    }
  },

  count : function(arr, item) {
    var count = 0;
    if (arr && typeof arr.length === 'number') {
      var i = arr.length - 1;
      for (; i >= 0; i--) {
        if (arr[i] === item) {
          count++;
        }
      }
    }
    return count;
  },

  duplicates : function(arr) {
    var duplicatesOnlyArr = [];
    if (arr && typeof arr.length === 'number') {
      var i = arr.length - 1;
      for (; i >= 0; i--) {
        var element = arr[i];
        for (j=i -1; j>=0; j--) {
          if (arr[j] === element && this.indexOf(duplicatesOnlyArr, element) === -1) {
            duplicatesOnlyArr.push(element);
            break;
          }  
        }
      }
    }
    return duplicatesOnlyArr;
  },

  square : function(arr) {
    if (arr && typeof arr.length === 'number') {
      var i = arr.length - 1;
      for (; i >= 0; i--) {
        arr[i] = Math.pow(arr[i], 2);
      }
    }
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var occurences = [];
    if (arr && typeof arr.length === 'number') {
      var i = arr.length - 1;
      for (; i >= 0; i--) {
        if (arr[i] === target) {
          occurences.push(i);
        }
      }
    }
    return occurences;
  }
};
