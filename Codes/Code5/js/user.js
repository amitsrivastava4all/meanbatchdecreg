window.addEventListener("load",init);
function init(){
    document.querySelector("#login").addEventListener("click",login);
    document.querySelector("#register").addEventListener("click",register);

}
function login(){
    var userid = document.querySelector("#userid").value;
    var pwd = document.querySelector("#pwd").value;
    var userRef = firebase.database().ref('users/'+userid);
    userRef.on('value',(snapshot)=>{
        var userObject = snapshot.val();
        if(userObject && userObject.password==pwd){
            sessionStorage.userid = userid;
            location.href='question.html';
        }
        else{
            document.querySelector("#result").innerText = "Invalid Userid or Password";
        }
    })
}
function register(){
    var userid = document.querySelector("#userid").value;
    var pwd = document.querySelector("#pwd").value;
    var userObject = {"uid":userid,"password":pwd};
    var promise = firebase.database().ref('users/'+userid).set(userObject);
    promise.then(data=>{
        document.querySelector("#result").innerText = "Register SuccessFully ";
    }).catch(err=>{
        document.querySelector("#result").innerText = "Error During Register";
        console.log("Error is ",err);
    })
}