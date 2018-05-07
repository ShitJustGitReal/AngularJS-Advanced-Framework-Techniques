angular.module('app').controller('ContactController', [
    function () {
        var vm = this;
        vm.sendMessage = sendMessage;

        function sendMessage(){
            alert('Contact request Sent')
        }
    }
]);