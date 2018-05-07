angular.module('app')
    .controller('LabController', [
        function () {
            var vm = this;
            vm.show = show;
            vm.persons = [
                {
                name: 'Mark Twain',
                nationality: 'American',
                dates: '1835-1910'
            },
            {
                name: 'A. A. Milne',
                nationality: 'English',
                dates: '1882-1956'
            },
            {
                name: 'Ernest Hemingway',
                nationality: 'American',
                dates: '1899-1961'
            },
        ];

            function show(person) {
                alert('Show details for: ' + person.name);
            }
        }
    ]);