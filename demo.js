let Type = {}
for(var i = 0,type; type = ['String', 'Array', 'Number'][i++];) {
    (function(type) {
        Type['is' + type] = function(obj) {
            return Object.prototype.toString.call(obj) === '[object ' + type + ']';
        } 
    })(type)
}
Type.isArray([]) // true
Type.isString('') // true
