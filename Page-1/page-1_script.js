$(document).ready(function () {
    $('[data-toggle="offcanvas"]').click(function () {
        $("#navigation").toggleClass("hidden-xs");
    });
});

// function validateForm() {
//     console.log("validate");
//     if (first_name.value == "") {
//         document.getElementById("f_name_error").innerHTML = "First Name Empty!";
//     }
//     else if (!(isNaN(first_name.value))) {
//         document.getElementById("f_name_error").innerHTML = "Enter a Proper Name!";
//     }
//     else {
//         document.getElementById("f_name_error").innerHTML = "";
//         flag++;
//     }
//     if (middle_name.value == "") {
//         document.getElementById("m_name_error").innerHTML = "Middle Name Empty!";
//     }
//     else if (!(isNaN(middle_name.value))) {
//         document.getElementById("m_name_error").innerHTML = "Enter a Proper Name!";
//     }
//     else {
//         document.getElementById("m_name_error").innerHTML = "";
//         flag++;
//     }
//     if (last_name.value == "") {
//         document.getElementById("l_name_error").innerHTML = "Last Name Empty!";
//     }
//     else if (!(isNaN(last_name.value))) {
//         document.getElementById("l_name_error").innerHTML = "Enter a Proper Name!";
//     }
//     else {
//         document.getElementById("l_name_error").innerHTML = "";
//         flag++;
//     }
//     if (address.value == "") {
//         document.getElementById("address_error").innerHTML = "Address Empty!";
//     }
//     else {
//         document.getElementById("address_error").innerHTML = "";
//         flag++;
//     }
//     if (city.value == "") {
//         document.getElementById("city_error").innerHTML = "City Empty!";
//     }
//     else if (!(isNaN(city.value))) {
//         document.getElementById("city_error").innerHTML = "Enter a Proper City!";
//     }
//     else {
//         document.getElementById("city_error").innerHTML = "";
//         flag++;
//     }
//     if (zipcode.value == "") {
//         document.getElementById("zipcode_error").innerHTML = "Zipcode Empty!";
//     }
//     else if (isNaN(zipcode.value)) {
//         document.getElementById("zipcode_error").innerHTML = "Enter a Proper Zipcode!";
//     }
//     else {
//         document.getElementById("zipcode_error").innerHTML = "";
//         flag++;
//     }
//     if (country.value == "") {
//         document.getElementById("country_error").innerHTML = "Country Empty!";
//     }
//     else if (!(isNaN(country.value))) {
//         document.getElementById("country_error").innerHTML = "Enter a Proper Country!";
//     }
//     else {
//         document.getElementById("country_error").innerHTML = "";
//         flag++;
//     }
//     if (email.value == "") {
//         document.getElementById("email_error").innerHTML = "Email Address Empty!";
//     }
//     else {
//         document.getElementById("email_error").innerHTML = "";
//         flag++;
//     }
//     if (phone.value == "") {
//         document.getElementById("phone_error").innerHTML = "Phone Number Empty!";
//     }
//     else if (isNaN(phone.value) || phone.value.length < 10) {
//         document.getElementById("phone_error").innerHTML = "Enter a Proper Phone Number!";
//     }
//     else {
//         document.getElementById("phone_error").innerHTML = "";
//         flag++;
//     }
//     if (error.length == flag) {
//         flag = 0;
//         // passvalue();
//         return true;
//     }
//     else {
//         flag = 0;
//         return false;
//     }
// }

function passvalue() {

    //     console.log("test");
    // let first_name = document.getElementById("inputFname");
    // let middle_name = document.getElementById("inputMname");
    // let last_name = document.getElementById("inputLname");
    // let address = document.getElementById("inputAddress");
    // let city = document.getElementById("inputCity");
    // let State = document.getElementById("inputState");
    // let zipcode = document.getElementById("inputZip");
    // let country = document.getElementById("inputCountry");
    // let email = document.getElementById("inputEmail4");
    // let phone = document.getElementById("inputTelephone");
    // let flag = 0;
    // let error = document.getElementsByClassName("error");


    let f__name = document.getElementById("inputFname").value;
    let middle__name = document.getElementById("inputMname").value;
    //   localStorage.setItem("mnamevalue", middle__name);

    let last__name = document.getElementById("inputLname").value;
    let aboutyou = document.getElementById("inputAddress").value;
    let citydetails = document.getElementById("inputCity").value;
    let countrydetails = document.getElementById("inputCountry").value;
    let zipcodedetails = document.getElementById("inputZip").value;

    let statedetails = document.getElementById("inputState").value;
    let emaildetails = document.getElementById("inputEmail4").value;
    let phonedetails = document.getElementById("inputTelephone").value;
    //   localStorage.setItem("lnamevalue", last__name);

    // if(f_name == "" || middle__name=="" || last__name == ""|| aboutyou=="" || citydetails ==""||
    // countrydetails ==""|| zipcodedetails == ""||statedetails =="" || emaildetails==""||phonedetails ==""){
    //     returnflas
    // }

    const first__name = f__name + " " + middle__name + " " + last__name;
    localStorage.setItem("fnamevalue", first__name);


    // window.location.href="/Resume_Temp/1/re1.html";


    localStorage.setItem("addressvalue", aboutyou);


    localStorage.setItem("cityvalue", citydetails);


    localStorage.setItem("countryvalue", countrydetails);


    localStorage.setItem("zipcodevalue", zipcodedetails);


    localStorage.setItem("statevalue", statedetails);

    localStorage.setItem("emailvalue", emaildetails);


    localStorage.setItem("phonevalue", phonedetails);
    // location.replace("/Page-1.2/Page2.html");
    //   location.reload();
    // return false;
}




// }

/*
  if (first_name.value == "") {
        document.getElementById("f_name_error").innerHTML = "First Name Empty!";
    }
    else if (!(isNaN(first_name.value))) {
        document.getElementById("f_name_error").innerHTML = "Enter a Proper Name!";
    }
    else {
        document.getElementById("f_name_error").innerHTML = "";
        flag++;
    }
    if (middle_name.value == "") {
        document.getElementById("m_name_error").innerHTML = "Middle Name Empty!";
    }
    else if (!(isNaN(middle_name.value))) {
        document.getElementById("m_name_error").innerHTML = "Enter a Proper Name!";
    }
    else {
        document.getElementById("m_name_error").innerHTML = "";
        flag++;
    }
    if (last_name.value == "") {
        document.getElementById("l_name_error").innerHTML = "Last Name Empty!";
    }
    else if (!(isNaN(last_name.value))) {
        document.getElementById("l_name_error").innerHTML = "Enter a Proper Name!";
    }
    else {
        document.getElementById("l_name_error").innerHTML = "";
        flag++;
    }
    if (address.value == "") {
        document.getElementById("address_error").innerHTML = "Address Empty!";
    }
    else {
        document.getElementById("address_error").innerHTML = "";
        flag++;
    }
    if (city.value == "") {
        document.getElementById("city_error").innerHTML = "City Empty!";
    }
    else if (!(isNaN(city.value))) {
        document.getElementById("city_error").innerHTML = "Enter a Proper City!";
    }
    else {
        document.getElementById("city_error").innerHTML = "";
        flag++;
    }
    if (zipcode.value == "") {
        document.getElementById("zipcode_error").innerHTML = "Zipcode Empty!";
    }
    else if (isNaN(zipcode.value)) {
        document.getElementById("zipcode_error").innerHTML = "Enter a Proper Zipcode!";
    }
    else {
        document.getElementById("zipcode_error").innerHTML = "";
        flag++;
    }
    if (country.value == "") {
        document.getElementById("country_error").innerHTML = "Country Empty!";
    }
    else if (!(isNaN(country.value))) {
        document.getElementById("country_error").innerHTML = "Enter a Proper Country!";
    }
    else {
        document.getElementById("country_error").innerHTML = "";
        flag++;
    }
    if (email.value == "") {
        document.getElementById("email_error").innerHTML = "Email Address Empty!";
    }
    else {
        document.getElementById("email_error").innerHTML = "";
        flag++;
    }
    if (phone.value == "") {
        document.getElementById("phone_error").innerHTML = "Phone Number Empty!";
    }
    else if (isNaN(phone.value) || phone.value.length < 10) {
        document.getElementById("phone_error").innerHTML = "Enter a Proper Phone Number!";
    }
    else {
        document.getElementById("phone_error").innerHTML = "";
        flag++;
    }
    if (error.length == flag) {
        flag = 0;
      
        return true;
    }
    else {
        flag = 0;
          // passvalue();
*/