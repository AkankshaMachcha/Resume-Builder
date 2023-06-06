$(document).ready(function () {
    $('[data-toggle="offcanvas"]').click(function () {
        $("#navigation").toggleClass("hidden-xs");
    });
});

let summary=document.getElementById("summary");
let error=document.getElementsByClassName("error");
let flag=0;

function validateForm(){
    if(summary.value == ""){
        document.getElementById("summary_error").innerHTML = "Summary Empty!";
    }
    else{
        document.getElementById("summary_error").innerHTML = "";
        flag++;
    }
    if(flag==error.length){
        flag=0;
        return true;
    }
    else{
         flag=0;
         return false;
    }
}
console.log(flag);

function passvalue(){
let shortinfodetails = document.getElementById("shortinfo").value;
    localStorage.setItem("shortinfovalue",shortinfodetails);
    location.reload();

}