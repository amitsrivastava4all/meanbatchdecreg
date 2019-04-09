const dashboardModule = angular.module('dashboard',['app','ngRoute']);
dashboardModule.constant('DASHBOARD_URL','http://localhost:1234/dashboard')
dashboardModule.run(($http,$q, DASHBOARD_URL,$window,$rootScope)=>{
    console.log('Dashboard Run loaded...');
    const url = DASHBOARD_URL+"?role="+localStorage.role;
    console.log("NEW URL is ",url);
    
    $http.get(url).then(data=>{
        console.log('Data is in Dashboard ',data);
        //localStorage.rights = data.data.role.rights;
        $rootScope.rights = data.data.role.rights;
        console.log('RootScope is ',$rootScope.rights);
        if(data.data.status=='E'){
            $window.location.href = '/index.html';
        }
    },(err)=>{
        $window.location.href = '/index.html';
    });
    console.log('Run Called.... ',$http, ' ',$q);
});
dashboardModule.controller('dashboardctrl',($scope)=>{

//console.log('dashboard controller loaded ',$scope.rights);
})
dashboardModule.config(($routeProvider,$locationProvider)=>{
    console.log('Dashboard config loaded...');
    $locationProvider.hashPrefix('');
    $routeProvider.when("/",{
        templateUrl:"../../views/home.html",
       
    }).when("/orders",{
        templateUrl:"../../views/orders.html",
       
    }).when("/products",{
        templateUrl:"../../views/products.html",
       
    }).when("/customers",{
        templateUrl:"../../views/customers.html",
       
    }).otherwise({template:'<h1>Wrong URL</h1>'
       });

})
// Custom Directive
dashboardModule.directive('tcsHeader',function(){
    console.log('TCS Header Call');
    return {
        templateUrl:'../../views/ui/header.html',
        restrict:'EA'
        
    }
})
// Custom Filter
dashboardModule.filter('titlecase',()=>{
    return (name,start,end)=>{
            return name.charAt(0).toUpperCase() + name.substring(start,end).toLowerCase();
    }
})