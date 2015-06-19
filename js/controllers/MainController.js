app.controller('MainController', function($scope) {
            $scope.today = new Date();
            $scope.appetizers = [{
                name: 'Ukrainian Salad',
                price: 4.95
            }, {
                name: 'Carot Sticks',
                price: 3.95
            }];
            $scope.mains = [{
                name: 'Varenyky',
                price: 7.95
            }, {
                name: 'Deruny',
                price: 8.95
            }];
            $scope.extras = [{
                name: 'Breadsticks',
                price: 4.95
            }, {
                name: 'Borshch of the day',
                price: 4.95
            }, {
                name: 'Chicken Wings',
                price: 6.95
            }];
        });
    