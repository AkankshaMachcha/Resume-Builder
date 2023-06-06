$(document).ready(function () {
    $('[data-toggle="offcanvas"]').click(function () {
        $("#navigation").toggleClass("hidden-xs");
    });
});

let flag1=1;
let flag2=1;

function addSkillField(){

    let br=document.createElement('br');
    let newNode1=document.createElement('input');
    newNode1.classList.add("form");
    newNode1.setAttribute("placeholder","Enter Skill");
    newNode1.setAttribute("id","skill_name_" + flag1);

    let newNode2=document.createElement('textarea');
    newNode2.classList.add("skill");
    newNode2.classList.add("form");
    newNode2.setAttribute("placeholder","Add Description");
    newNode2.setAttribute("rows",4);
    newNode2.setAttribute("id","skill_description_" + flag1);

    let instruction=document.getElementById("instruction");
    let addButton=document.getElementById("add1");
    let submitButton=document.getElementById("sub");

    instruction.insertBefore(br,addButton);
    instruction.insertBefore(newNode1,addButton);
    instruction.insertBefore(br,addButton);
    instruction.insertBefore(newNode2,addButton);
    instruction.insertBefore(br,addButton);
    flag1++

}

function addTechSkillField(){

    
    let br=document.createElement('br');
    let newNode=document.createElement('input');
    // let techlabel = document.createElement('label');
     newNode.classList.add("form");
    // techlabel.innerHTML="Technical Skills:";
    newNode.setAttribute("placeholder","Enter Technical Skill");
    newNode.setAttribute("id","tech_skill_" + flag2);

    let instruction=document.getElementById("instruction2");
    let addButton=document.getElementById("add2");
    // instruction.insertBefore(techlabel , newNode);
    instruction.insertBefore(newNode,addButton);
    instruction.insertBefore(br,addButton);

    flag2++;
}



function passvalue(){

    if(flag1>=1){
        let skill1details = document.getElementById("skill_name_0").value;
        localStorage.setItem("skill1value",skill1details);

        let skilldis1 = document.getElementById("skill_description_0").value;
        localStorage.setItem("skilldisvalue1",skilldis1);
    }

    //2
    if(flag1>=2){
        let skill2details = document.getElementById("skill_name_1").value;
        localStorage.setItem("skill2value",skill2details);

        let skilldis2 = document.getElementById("skill_description_1").value;
        localStorage.setItem("skilldisvalue2",skilldis2);
    }

    //3
    if(flag1>=3){
        let skill3details = document.getElementById("skill_name_2").value;
        localStorage.setItem("skill3value",skill3details);

        let skilldis3 = document.getElementById("skill_description_2").value;
        localStorage.setItem("skilldisvalue3",skilldis3);
    }


    //TechnicalSkill

    if(flag2>=1){
        let techskill1 = document.getElementById("tech_skill_0").value;
        localStorage.setItem("techskillvalue1",techskill1);
    }

    if(flag2>=2){
        let techskill2 = document.getElementById("tech_skill_1").value;
        localStorage.setItem("techskillvalue2",techskill2);
    }

    if(flag2>=3){
        let techskill3 = document.getElementById("tech_skill_2").value;
        localStorage.setItem("techskillvalue3",techskill3);
    }

    if(flag2>=4){
        let techskill4 = document.getElementById("tech_skill_3").value;
        localStorage.setItem("techskillvalue4",techskill4);
    }

    if(flag2>=5){
        let techskill5 = document.getElementById("tech_skill_4").value;
        localStorage.setItem("techskillvalue5",techskill5);
    }

    if(flag2>=6){
        let techskill6 = document.getElementById("tech_skill_5").value;
        localStorage.setItem("techskillvalue6",techskill6);
    }

    if(flag2>=7){
        let techskill7 = document.getElementById("tech_skill_6").value;
        localStorage.setItem("techskillvalue7",techskill7);
    }

    if(flag2>=8){
        let techskill8 = document.getElementById("tech_skill_7").value;
        localStorage.setItem("techskillvalue8",techskill8);
    }

    if(flag2>=9){
        let techskill9 = document.getElementById("tech_skill_8").value;
        localStorage.setItem("techskillvalue9",techskill9);
    }
    location.reload();



}