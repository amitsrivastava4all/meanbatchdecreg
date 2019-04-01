userModule.factory('userfactory',($http,$q,REGISTER_URL)=>{
    return {
        register(userObject){
            var defer = $q.defer();
            $http.post(REGISTER_URL,userObject).then((data)=>{
                    console.log('DATA IS ',data);
                    defer.resolve(data);
            },(err)=>{
                console.log('Err IS ',data);
                    defer.reject(err);
            });
            return defer.promise;
        },
        login(){

        },
        profile(){

        }
    }
})