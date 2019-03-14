app.factory('adminfactory',($http,$q)=>{
    const object = {
        search(pid){
            const url = `http://localhost:1234/showproduct/${pid}/1ABZQ23`;
                console.log("Get PID in Factory ",pid);
                let defered = $q.defer();
                $http.get(url).then((data)=>{
                        defered.resolve(data);    
                },(err)=>{
                        defered.reject(err);
                })
                return defered.promise;
        }
    };
    return object;
})