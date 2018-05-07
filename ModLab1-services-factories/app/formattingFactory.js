angular.module('app').factory('formattingFactory', [formattingFactory]);
function formattingFactory() {
    return {
        format: format
    }
    function format(str) {
        var strlength = str.length;
        if(strlength % 2 == 0){
            return str.toUpperCase();
        }
        else{
            return str.toLowerCase();
        }
    }
}