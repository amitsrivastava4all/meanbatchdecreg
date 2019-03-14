app.controller('adminctrl',($scope,adminfactory)=>{
    $scope.data = {};
    $scope.showIt= false;
    $scope.doSearch = ()=>{
        $scope.showIt = true;
        let pid = $scope.pid;

        $scope.message = 'Pid is '+pid;
        let pr = adminfactory.search(pid);
        pr.then((data)=>{
                $scope.data = data.data.doc;
        },(err)=>{
                $scope.err = err;
        })
    }
})