'use strict';

angular.module('sjomlaslangurApp')
    .factory('User', function ($resource) {
        return $resource('api/users/:login', {}, {
                'query': {method: 'GET', isArray: true},
                'get': {
                    method: 'GET',
                    transformResponse: function (data) {
                        data = angular.fromJson(data);
                        return data;
                    }
                },
                'update': { method:'PUT' },
                'getFavorites': { method:'GET', isArray: true, url: 'api/users/favorites' },
                'getPhrases': { method:'GET', isArray: true, url: 'api/users/:id/phrases', params: { id: '@id'} }
            });
        });
