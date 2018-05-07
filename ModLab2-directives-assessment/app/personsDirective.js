angular.module('app').directive('persons', function () {
    return {
        // Although an attribute approach may seem sufficient (smaller template), I could only get this to work with an element approach:
        // https://stackoverflow.com/questions/18559271/angular-directive-table-rows-issue
        // https://weblogs.asp.net/dwahlin/creating-custom-angularjs-directives-part-2-isolate-scope 
        // https://stackoverflow.com/questions/41459237/ng-click-in-a-ng-repeat-within-a-directive/41459728
        restrict: 'E', 
        replace: 'true',
        scope: {
            data: '=',
            action: '&',
        },
        template:
            '<table class="table"><thead><th>Name</th><th>Nationality</th><th>Dates</th><th></th></thead><tbody>' +
            '<tr ng-repeat="person in data" ng-mouseover="rowselected($index)" ng-class="{selected : $index == rowNumber}">' +
            '<td>{{person.name}}</td>' +
            '<td>{{person.nationality}}</td> ' +
            '<td>{{person.dates}}</td> ' +
            '<td><input type="button" ng-click="action({person: person})" value="Details" class="btn btn-primary"/></td>' +
            '</tr> ' +
            '</tbody></table>',
        link: function (scope, element, attrs) {
            // AngularJS jqLite only offers the following DOM manipulations: https://docs.angularjs.org/api/ng/function/angular.element
            // https://stackoverflow.com/questions/37897519/how-to-highlight-the-table-row-on-mouse-hover
            scope.rowselected = function (row) {
                scope.rowNumber = row;
            }

        }
    };
});