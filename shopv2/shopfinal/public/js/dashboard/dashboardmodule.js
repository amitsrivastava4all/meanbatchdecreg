const dashboardModule = angular.module('dashboard',['app']);

dashboardModule.run(($http,$q)=>{
    console.log('Run Called.... ',$http, ' ',$q);
})