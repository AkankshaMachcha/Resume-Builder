$(document).ready(function () {
    $('[data-toggle="offcanvas"]').click(function () {
        $("#navigation").toggleClass("hidden-xs");
    });
});
let flag = 0;

function addEducationFields() {
    flag++;

    let br = document.createElement('br');
    let hr = document.createElement('hr');
    hr.style =" border: 1px solid grey;width:90%";

    let months = ["--SELECT STARTING YEAR--", 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
    let years = ["--SELECT GRADUATION YEAR--", 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

    let newNode1 = document.createElement('input');
    newNode1.classList.add("form", "form-control", "col-md-4");
    newNode1.setAttribute("id", "school_" + flag);
    newNode1.setAttribute("placeholder", "Enter the name of your Institute");

    let newNode2 = document.createElement('input');
    newNode2.classList.add("form", "form-control", "col-md-6");
    newNode2.setAttribute("id", "city_" + flag);
    newNode2.setAttribute("placeholder", "Enter the City");

    let newNode3 = document.createElement('input');
    newNode3.classList.add("form", "form-control", "col-md-6");
    newNode3.setAttribute("id", "state_" + flag);
    newNode3.setAttribute("placeholder", "Enter the State");

    let newNode4 = document.createElement('input');
    newNode4.classList.add("form", "form-control", "col-md-4");
    newNode4.setAttribute("id", "degree_" + flag);
    newNode4.setAttribute("placeholder", "Enter your Degree");

    let newNode5 = document.createElement('input');
    newNode5.classList.add("form", "form-control", "col-md-4");
    newNode5.setAttribute("id", "field_" + flag);
    newNode5.setAttribute("placeholder", "Enter your Field of Study");

    let newNode6 = document.createElement('select');
    newNode6.classList.add("form", "form-control", "col-md-4");
    newNode6.setAttribute("id", "graduation_month_" + flag);
    for (let i = 0; i < months.length; i++) {
        let option = document.createElement("option");
        option.value = months[i];
        option.text = months[i];
        newNode6.appendChild(option);
    }

    let newNode7 = document.createElement('select');
    newNode7.classList.add("form", "form-control", "col-md-4");
    newNode7.setAttribute("id", "graduation_year_" + flag);
    for (let i = 0; i < years.length; i++) {
        let option = document.createElement("option");
        option.value = years[i];
        option.text = years[i];
        newNode7.appendChild(option);
    }


    let newNode8 = document.createElement('input');
    newNode8.classList.add("form", "form-control", "col-md-4");
    newNode8.setAttribute("id", "cgpa_" + flag);
    newNode8.setAttribute("placeholder", "Enter your Grade");


    let newNode9 = document.createElement('div');
    newNode9.setAttribute("class", "row d-flex align-items-center justify-content-center");
    newNode9.appendChild(newNode2);
    newNode9.appendChild(newNode3);

    let newNode10 = document.createElement('div');
    newNode10.setAttribute("class", "row d-flex align-items-center justify-content-center");
    newNode10.appendChild(newNode4);
    newNode10.appendChild(newNode5);
    newNode10.appendChild(newNode1);

    let newNode11 = document.createElement('div');
    newNode11.setAttribute("class", "row d-flex align-items-center justify-content-center");
    newNode11.appendChild(newNode8);
    newNode11.appendChild(newNode6);
    newNode11.appendChild(newNode7);



    let instruction = document.getElementById("instruction");
    let addButton = document.getElementById("add");

    instruction.insertBefore(br, addButton);
    instruction.insertBefore(hr, addButton);

    // instruction.insertBefore(newNode1, addButton);
    // // instruction.insertBefore(newNode2,addButton);
    // // instruction.insertBefore(newNode3,addButton);
    // instruction.insertBefore(newNode9, addButton);
    // instruction.insertBefore(newNode4, addButton);
    // instruction.insertBefore(newNode5, addButton);
    // instruction.insertBefore(newNode8, addButton);
    // instruction.insertBefore(newNode6, addButton);
    // instruction.insertBefore(newNode7, addButton);
    instruction.insertBefore(newNode10,addButton);
    instruction.insertBefore(newNode9,addButton);
    instruction.insertBefore(newNode11,addButton);

    instruction.insertBefore(br, addButton);
    flag++;
}

function passvalue() {
    let cndetail1 = document.getElementById("degree_0").value;
    localStorage.setItem("cnvalue1", cndetail1);

    let fldetail1 = document.getElementById("field_0").value;
    localStorage.setItem("flvalue1", fldetail1);

    let clgdetail1 = document.getElementById("school_0").value;
    localStorage.setItem("clgvalue1", clgdetail1);

    let ecitydetail1 = document.getElementById("city_0").value;
    localStorage.setItem("ecityvalue1", ecitydetail1);

    let estatedetail1 = document.getElementById("state_0").value;
    localStorage.setItem("estatevalue1", estatedetail1);

    let estyeardetail1 = document.getElementById("graduation_month_0").value;
    localStorage.setItem("estyearvalue1", estyeardetail1);

    let eendyeardetail1 = document.getElementById("graduation_year_0").value;
    localStorage.setItem("eendyearvalue1", eendyeardetail1);

    let cgpadetail1 = document.getElementById("cgpa_0").value;
    localStorage.setItem("cgpavalue1", cgpadetail1);

    //2

    let cndetail2 = document.getElementById("degree_1").value;
    localStorage.setItem("cnvalue2", cndetail2);

    let fldetail2 = document.getElementById("field_1").value;
    localStorage.setItem("flvalue2", fldetail2);

    let clgdetail2 = document.getElementById("school_1").value;
    localStorage.setItem("clgvalue2", clgdetail2);

    let ecitydetail2 = document.getElementById("city_1").value;
    localStorage.setItem("ecityvalue2", ecitydetail2);

    let estatedetail2 = document.getElementById("state_1").value;
    localStorage.setItem("estatevalue2", estatedetail2);

    let estyeardetail2 = document.getElementById("graduation_month_1").value;
    localStorage.setItem("estyearvalue2", estyeardetail2);

    let eendyeardetail2 = document.getElementById("graduation_year_1").value;
    localStorage.setItem("eendyearvalue2", eendyeardetail1);

    let cgpadetail2 = document.getElementById("cgpa_1").value;
    localStorage.setItem("cgpavalue2", cgpadetail2);

    location.reload();


}