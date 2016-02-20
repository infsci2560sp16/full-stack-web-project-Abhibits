
function employeeValidation()
{
 var firstname= document.getElementById("cust_name").value;

 var email= document.getElementById("cust_email").value;
 var street= document.getElementById("street").value;
 var city= document.getElementById("city").value;
 var state= document.getElementById("state").value;

 var zipcode= parseInt(document.getElementById("zipcode").value);

 var pass=document.getElementById("pass").value;
 var pass1=document.getElementById("pass1").value;
 var emailreg= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,6}$/;
 var alphareg=/^[A-Za-z]+$/;
 var alphanum= /^[0-9a-zA-Z]+$/;



 if(firstname!=="" && street!=="" && city!=="" && state!=="" && zipcode!=="" && email!=="")
 {
   if(email.match(emailreg))
   {
     if(firstname.match(alphareg))
     {
       if(employeeid.match(alphanum))
       {
               if(pass.match(pass1))
         {
           if(pass.length>=6 && pass.length<=20)
           {
           alert("data suceessfully validated");
                 return true;
           }
           else
           {
           alert("password must contain 6 to 20 character");
                      return false;
           }
         }
         else
         {
         alert("password cannot be matched");
         return false;
         }

       }

     else{
       alert("enter a valid first name");
       return false;
     }
   }

   else{
     alert("enter a valid email");
     return false;
   }
 }
 else{
   alert("all fields are required");
   return false;
 }

}
}
