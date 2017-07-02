module.exports = {
    setPropertyAll : function(arr, key, value) {
      if (arr && (typeof arr === 'object')) {
        // arr.forEach(item => {
        //   item[key] = value;
        // }, this);
        for (var index in arr) {
          arr[index][key] = value;
        }
      }
    }
};
