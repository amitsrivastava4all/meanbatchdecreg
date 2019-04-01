userModule.controller('userctrl',($scope,userfactory)=>{
    $scope.user = {};
$scope.doRegister=()=>{
    console.log('User id is ',$scope.user.userid, ' Pwd is ',$scope.user.password);
    const promise = userfactory.register($scope.user);
    promise.then(data=>{
        console.log('PR Data is ',data);
        $scope.data = data;
    },err=>{
        console.log('PR Error is ',err);
        $scope.err = err;
    })
}    

})