$(document).ready(function () {
    $('[data-toggle="offcanvas"]').click(function () {
        $("#navigation").toggleClass("hidden-xs");
    });
});

let flag=0;

function addAchievements(){
    flag++;

    let br=document.createElement('br');
    let hr=document.createElement('hr');

    let newNode1=document.createElement('input');
    newNode1.classList.add("form","form-control");
    newNode1.setAttribute("id","achievement_" +flag);
    newNode1.setAttribute("placeholder","Enter an Achievement");

    let instruction=document.getElementById("instruction");
    let addButton=document.getElementById("add");

    instruction.insertBefore(br,addButton);
    instruction.insertBefore(hr,addButton);
    instruction.insertBefore(newNode1,addButton);
    instruction.insertBefore(br,addButton);
}

function passvalue(){
    let achdetails1 = document.getElementById("achievement_0").value;
    localStorage.setItem("achvalue1",achdetails1);

    let achdetails2 = document.getElementById("achievement_1").value;
    localStorage.setItem("achvalue2",achdetails2);

    let achdetails3 = document.getElementById("achievement_2").value;
    localStorage.setItem("achvalue3",achdetails3);

    let achdetails4 = document.getElementById("achievement_3").value;
    localStorage.setItem("achvalue4",achdetails4);

    let achdetails5 = document.getElementById("achievement_4").value;
    localStorage.setItem("achvalue5",achdetails5);

    let achdetails6 = document.getElementById("achievement_5").value;
    localStorage.setItem("achvalue6",achdetails6);
    // location.reload();
}