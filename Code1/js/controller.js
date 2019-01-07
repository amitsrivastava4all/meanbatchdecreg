function doCompute(){
    var bs = document.querySelector("#basicsalary").value;
    salaryOperations.takeSalary(bs); 
    var hra = salaryOperations.hra();  
    document.querySelector("#hra").innerText = hra;
}