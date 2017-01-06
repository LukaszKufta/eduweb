function createData(obj) {
    var data = obj;
    return {
        get: function(key) {
            return data[key] || null
        },
        set: function(key, vale){
            if(key && vale) {
              data[key] = vale
            }
        }
    }
}
var data = createData({});
data.set("name", "Ferdynand");
console.log( data.get("name") );