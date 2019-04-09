const app = angular.module('app',[]);
app.config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
  })
  app.run(($http, $q, $window)=>{
      $http.get('/isFirstTime').then((data)=>{
          if(data.data.status=='Y'){
            $window.location.href='/changepassword.html';
          }
         else
         if(data.data.status=='E' || data.data.status=='F'){
          $window.location.href='/error.html';
         }
      },(err)=>{
        $window.location.href='/error.html';
      })
  })