describe('UserService', function(){

    var $rootScope, $httpBackend, $q, UserService, mockDeferred;

    beforeEach(function(){
        angular.mock.module('app');
        angular.mock.inject(function(_$rootScope_, _$httpBackend_, _$q_, _UserService_){
            $rootScope = _$rootScope_;
            $httpBackend = _$httpBackend_;
            $q = _$q_;
            UserService = _UserService_;
        });
    });

    it('should be defined', function(){
        expect(UserService).toBeDefined();
    });

    it('getUsers should be defined', function(){
        expect(UserService.getUsers).toBeDefined();
    });

    it('getUsers should return a value', function(){
        /*
        When testing HTTP calls, you generally want your mock data to have the same format as the actual server response.
        Go to http://reqres.in/api/users and copy the response.
        Then, put the data that you grabbed from reqres.in in a mockData variable.
        */
        var mockData = {
            "page":1,
            "per_page":3,
            "total":12,
            "total_pages":4,
            "data":[  
                {  
                    "id":1,
                    "first_name":"george",
                    "last_name":"bluth",
                    "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
                },
                {  
                    "id":2,
                    "first_name":"lucille",
                    "last_name":"bluth",
                    "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
                },
                {  
                    "id":3,
                    "first_name":"oscar",
                    "last_name":"bluth",
                    "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
                }
            ]
        };

        /*
        The UserService calls [http://reqres.in/api/users] when getUsers() is called. 
        Using $httpBackend you can monitor and intercept this call and return your own mocked data.
        You primarily want to test that the UserService resolves the promise when a call is made. 
        End-to-End testing will test the actual call to [http://reqres.in/api/users].
        */
        $httpBackend.when('GET', 'http://reqres.in/api/users').respond(200, {data: mockData});

        var resolvedValue;
        var promise = UserService.getUsers();
        promise.then(function(value){
            resolvedValue = value;
        })
        $httpBackend.flush();
        expect(resolvedValue).toEqual(mockData);
    });

});