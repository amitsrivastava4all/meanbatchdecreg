userModule.controller('userctrl',($scope,userfactory, SUCCESS,FAIL, $window)=>{
    $scope.user = {};
    $scope.showHide = false;
    $scope.validationMessage = '';
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
$scope.doLogin=(isValid)=>{
    console.log('Form is ',isValid);
    if(isValid){
    $scope.showHide = true;
    console.log('User id is ',$scope.user.userid, ' Pwd is ',$scope.user.password);
    const promise = userfactory.login($scope.user);
    promise.then(data=>{
        $scope.showHide = false;
        if(data.data.status==SUCCESS){
            localStorage.tokenId = data.data.token ;
            localStorage.role = data.data.role;
            localStorage.userid = data.data.userid;
            console.log("Data is ",data.data);
            $window.location.href= '/dashboard.html';
        } 
        else if(data.data.status==FAIL){
            $scope.data = data;
        }
        console.log('PR Data is ',data);
        
    },err=>{
        console.log('PR Error is ',err);
        $scope.err = err;
    })
    }
    else{
      $scope.validationMessage = 'Form is Invalid , Please check the fields';
      return false;  
    }
}    

})