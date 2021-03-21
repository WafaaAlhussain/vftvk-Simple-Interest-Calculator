

function compute()
{
    if(validateForm()){
    var princeple = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    var interest = princeple*years*rate/100;
    var date = new Date();
    var current_year = date.getFullYear();
    var year = current_year + Number(years);
    document.getElementById("interest").innerHTML='If you deposit '+ princeple +',<br>at an interest rate of ' +rate+'.<br>You will receive an amount of '+interest+',<br>in the year ' + year;
    }
    
    
}
function updateTextInput(val) {
          document.getElementById('result').innerHTML=val+'%'; 
          document.getElementById('rate').value=val;
        }


function validateForm() {
  var x = document.getElementById("principal").value;
  if (x <=0) {
    alert("Enter a positive number");
    setTimeout(function(){
                document.getElementById("principal").focus();
                
            }, 1);
    return false;
  }
  return true;
}
        