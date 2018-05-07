describe('UserDisplayController', function(){
    /*
    The UserService.getUsers() returns a promise to the UserDisplayController.executeSearch() that resolves when data is returned. 
    Since you are only testing the controller, you don't actually want to make a REST call.
    You will mock this by spying on when UserService.getUsers() is called. 
    This will allow you to hijack the call and return your own promise.
    That promise can then be manipulated to determine that the controller is doing the proper thing when data is returned.
    */
    var $rootScope, $q, $controller, vm, UserService, mockDeferred;

    beforeEach(function(){
        angular.mock.module('app');
        angular.mock.inject(function(_$rootScope_, _$controller_, _$q_, _UserService_){
            $rootScope = _$rootScope_;
            $controller = _$controller_;
            $q = _$q_;
            UserService = _UserService_;
            mockDeferred = $q.defer();
            spyOn(UserService, 'getUsers').and.returnValue(mockDeferred.promise);
            vm = $controller('UserDisplayController', {userService: UserService});
        });
    });

    it('should have vm defined', function(){
        expect(vm).toBeDefined();
    });

    it('should have vm.executeSearch defined', function(){
        expect(vm.executeSearch).toBeDefined();
    });

    describe('vm.execute search should call UserService.getUsers and return a result', function(){

        it('should call UserService.getUsers and set vm.users', function(){
            var mockUsers = ['user 1', 'user 2'];
            vm.executeSearch();
            mockDeferred.resolve(mockUsers);
            $rootScope.$apply();

            expect(UserService.getUsers).toHaveBeenCalled();
            expect(vm.users).toEqual(mockUsers);
        });
    
    });

});

