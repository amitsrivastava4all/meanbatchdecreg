const nodemailer = require("nodemailer");
// Step -1 
function sendMail(trackNo, template){
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'ram@gmail.com',
           pass: 'XXXXXXX'
       }
   });

   const mailOptions = {
    from: 'ram@gmail.com', // sender address
    to: 'shyam@yahoo.com', // list of receivers
    subject: 'Subject of your email', // Subject line
    html: "<h1>Forget password</h1><a href='/forgetpwd?trackNo=${trackNo}'>Change Pwd</a>"// plain text body
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });

}


sendMail(1010,require("./jobtemplate")('Amit'));