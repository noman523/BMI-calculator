   // var bmivalue = document.getElementById("bmivalue").value;
   var alert = document.getElementById("alert");
   document.getElementById("alert").style.display = "none";
   
   
   var  getbmivalue = () => {
   var height = document.getElementById("height").value;
   var weight = document.getElementById("weight").value;
   
   
   height = height * 12;
   height = height * 0.025; //now height in meter
   var newbmivalue = weight / (height * height);
   document.getElementById("bmivalue").value = newbmivalue;
   
   
   
   
   if(newbmivalue < 18.5){
     document.getElementById("alert").style.display = "block";
     alert.classList.add("alert-danger");
     document.getElementById("alert").innerHTML = "You are Underweight!";
       // alert("Hello");
     }
     else if(newbmivalue > 18.5 && newbmivalue < 24.9){
       document.getElementById("alert").style.display = "block";
       alert.classList.add("alert-primary");
       document.getElementById("alert").innerHTML = "You are Normal weight!";
     }
     else if(newbmivalue > 25  && newbmivalue < 29.9){
       document.getElementById("alert").style.display = "block";
       alert.classList.add("alert-warning");
       document.getElementById("alert").innerHTML = "You are Overweight  weight!";
     }
     else if(newbmivalue > 30 ){
       document.getElementById("alert").style.display = "block";
       alert.classList.add("alert-dark");
       document.getElementById("alert").innerHTML = "You are Obesity !";
     }
   } 