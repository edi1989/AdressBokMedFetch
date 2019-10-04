//JavaScript

fetch("data.json")
    .then(function (response) {
        return response.json();

    })
    .then(function (data) {
        printlist(data);
    });

function printlist(listaPaPersonal) {
    console.log(listaPaPersonal)

    listaPaPersonal.sort(function (a, b) {
        return a.age - b.age;
    });

    for (i = 0; i < listaPaPersonal.length; i++) {
        //console.log(empData[i].firstname)
        var empList = document.getElementById("listemployee")
        empList.insertAdjacentHTML("beforeend", "<li class='empItem'>" + listaPaPersonal[i].firstname + " " + listaPaPersonal[i].lastname + "<br>" + listaPaPersonal[i].email + "</li>")
    }
}