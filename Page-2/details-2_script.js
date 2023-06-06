$(document).ready(function () {
    $('[data-toggle="offcanvas"]').click(function () {
        $("#navigation").toggleClass("hidden-xs");
    });
});

let flag=1;

function addExperienceFields(){

    let months1=["--START MONTH--","January","February","March","April","May","June","July","September","October","November","December"];
    let years1=["--START YEAR",2014,2015,2016,2017,2018,2019,2020,2021];
    let months2=["--END MONTH--","January","February","March","April","May","June","July","September","October","November","December"];
    let years2=["--END YEAR",2014,2015,2016,2017,2018,2019,2020,2021];

    let br=document.createElement('br');
    let hr=document.createElement('hr');
    hr.style =" border: 1px solid grey;width:90%";

    let newNode1=document.createElement('input');
    newNode1.classList.add("form","margin","form-control","col-md-6","row");
    newNode1.setAttribute("id","company_" +flag);
    newNode1.setAttribute("placeholder","Enter the Name of the Company");

    let newNode2=document.createElement('input');
    newNode2.classList.add("form","margin","form-control","col-md-6","row");
    newNode2.setAttribute("id","title_" +flag);
    newNode2.setAttribute("placeholder","Enter Your Job Title");

    let newNode3=document.createElement('select');
    newNode3.setAttribute("id","jstart_month_" +flag);
    newNode3.setAttribute("class","form-control col-2");

    // newNode3.classList.add("margin","form-control","col-md-2");
    for(let i=0;i<months1.length;i++){
        let option=document.createElement("option");
        option.value=months1[i];
        option.text=months1[i];
        newNode3.appendChild(option);
    }

    let newNode4=document.createElement('select');
    newNode4.setAttribute("id","jstart_year_" +flag);
    
    newNode4.setAttribute("class","form-control col-2");
    // newNode4.classList.add("margin","form-control","col-md-2");
    for(let i=0;i<years1.length;i++){
        let option=document.createElement("option");
        option.value=years1[i];
        option.text=years1[i];
        newNode4.appendChild(option);
    }

    let newNode5=document.createElement('select');
    newNode5.setAttribute("id","jend_month_" +flag);
    
    newNode5.setAttribute("class","form-control col-2");
    // newNode5.classList.add("margin","form-control","col-md-2");
    for(let i=0;i<months2.length;i++){
        let option=document.createElement("option");
        option.value=months2[i];
        option.text=months2[i];
        newNode5.appendChild(option);
    }

    let newNode6=document.createElement('select');
    newNode6.setAttribute("id","jend_year_" +flag);
    
    newNode6.setAttribute("class","form-control col-2");
    // newNode6.classList.add("margin","form-control","col-md-2");
    for(let i=0;i<years2.length;i++){
        let option=document.createElement("option");
        option.value=years2[i];
        option.text=years2[i];
        newNode6.appendChild(option);
    }

    let newNode7=document.createElement('textarea');
    newNode7.classList.add("form","form-control","textarea-cls");
    newNode7.setAttribute("id","jdescription_" +flag);
    newNode7.setAttribute("placeholder","Enter Your Job Description");
    newNode7.setAttribute("rows",3);

    let instruction=document.getElementById("instruction");
    let addButton=document.getElementById("add");

    let newNode8=document.createElement('div'); 
    
    newNode8.setAttribute("class","row d-flex align-items-center justify-content-center");
    // newNode8.classList.add("row","d-flex","align-items-center","justify-content-center");
    let newNode11=document.createElement('div'); 
    
    newNode11.setAttribute("class","row d-flex align-items-center justify-content-center");
    // newNode8.classList.add("row","d-flex","align-items-center","justify-content-center");

    let newNode9=document.createElement('div');
    newNode9.setAttribute("class","col-md-6");
    
    let newNode10=document.createElement('div');
    newNode10.setAttribute("class","col-md-3");

    newNode8.appendChild(newNode3);
    newNode8.appendChild(newNode4);
    newNode8.appendChild(newNode5);
    newNode8.appendChild(newNode6);

    newNode11.appendChild(newNode1);
    newNode11.appendChild(newNode2);
    
    instruction.insertBefore(br,addButton);
    instruction.insertBefore(hr,addButton);
    // instruction.insertBefore(newNode1,addButton);
    // instruction.insertBefore(newNode2,addButton);
    instruction.insertBefore(newNode11,addButton);
    instruction.insertBefore(newNode7,addButton);
   
    instruction.insertBefore(br,addButton);
    instruction.insertBefore(newNode8,addButton);
    // instruction.insertBefore(newNode3,addButton);
    // instruction.insertBefore(newNode4,addButton);
    // instruction.insertBefore(newNode5,addButton);
    // instruction.insertBefore(newNode6,addButton);
    instruction.insertBefore(br,addButton);

    flag++;
    
}

function passvalue(){
    let comdetails1 = document.getElementById("company_0").value;
    localStorage.setItem("comvalue1",comdetails1);

    let roledetails1 = document.getElementById("title_0").value;
    localStorage.setItem("rolevalue1",roledetails1);

    let jobdisdetails1 = document.getElementById("jdescription_0").value;
    localStorage.setItem("jobdisvalue1",jobdisdetails1);


    let jsmonth1 = document.getElementById("jstart_month_0").value;
    localStorage.setItem("jsmonthvalue1",jsmonth1);

    let jsyear1 = document.getElementById("jstart_year_0").value;
    localStorage.setItem("jsyearvalue1",jsyear1);
    
    let jemonth1 = document.getElementById("jend_month_0").value;
    localStorage.setItem("jemonthvalue1",jemonth1);

    let jeyear1 = document.getElementById("jend_year_0").value;
    localStorage.setItem("jeyearvalue1",jeyear1);

    //2

    let comdetails2 = document.getElementById("company_1").value;
    localStorage.setItem("comvalue2",comdetails2);

    let roledetails2 = document.getElementById("title_1").value;
    localStorage.setItem("rolevalue2",roledetails2);

    let jobdisdetails2 = document.getElementById("jdescription_1").value;
    localStorage.setItem("jobdisvalue2",jobdisdetails2);


    let jsmonth2 = document.getElementById("jstart_month_1").value;
    localStorage.setItem("jsmonthvalue2",jsmonth2);

    let jsyear2 = document.getElementById("jstart_year_1").value;
    localStorage.setItem("jsyearvalue2",jsyear2);
    
    let jemonth2 = document.getElementById("jend_month_1").value;
    localStorage.setItem("jemonthvalue2",jemonth2);

    let jeyear2 = document.getElementById("jend_year_1").value;
    localStorage.setItem("jeyearvalue2",jeyear2);

    //3

    

    let roledetails3 = document.getElementById("title_2").value;
    localStorage.setItem("rolevalue3",roledetails3);

    let jobdisdetails3 = document.getElementById("jdescription_2").value;
    localStorage.setItem("jobdisvalue3",jobdisdetails3);


    let jsmonth3 = document.getElementById("jstart_month_2").value;
    localStorage.setItem("jsmonthvalue3",jsmonth3);

    let jsyear3 = document.getElementById("jstart_year_2").value;
    localStorage.setItem("jsyearvalue3",jsyear3);
    
    let jemonth3 = document.getElementById("jend_month_2").value;
    localStorage.setItem("jemonthvalue3",jemonth3);

    let jeyear3 = document.getElementById("jend_year_2").value;
    localStorage.setItem("jeyearvalue3",jeyear3);

    let comdetails3 = document.getElementById("company_2").value;
    localStorage.setItem("comvalue3",comdetails3);

    // location.reload();




}