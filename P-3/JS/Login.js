"use scrict";

function check() {
    const username_Login = document.getElementById("username").value;
    const password_Login = document.getElementById("pass").value;

    if (username_Login != "Ms" || password_Login != "12345678") {
        window.alert("نام کاربری یا پسورد اشتباه است");
    }
    else {
        location.replace("../Fact.html")
    }
}