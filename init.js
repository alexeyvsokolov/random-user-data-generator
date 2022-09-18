// window.onload = function()
// {
//     const initPerson = personGenerator.getPerson();
//     document.getElementById('surnameOutput').innerText = initPerson.surname;
//     document.getElementById('firstNameOutput').innerText = initPerson.firstName;
//     document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
//     document.getElementById('genderOutput').innerText = initPerson.gender;
//     document.getElementById('birthDayOutput').innerText = initPerson.day;
//     document.getElementById('birthMonthOutput').innerText = initPerson.month;
//     document.getElementById('birthYearOutput').innerText = initPerson.year;
//     document.getElementById('professionOutput').innerText = initPerson.profession;
// };

document.getElementById('generation').addEventListener('click', function() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthDayOutput').innerText = initPerson.day;
    document.getElementById('birthMonthOutput').innerText = initPerson.month;
    document.getElementById('birthYearOutput').innerText = initPerson.year;
    document.getElementById('professionOutput').innerText = initPerson.profession;
});

document.getElementById('clear').addEventListener('click', function() {
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('patronymicOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('birthDayOutput').innerText = '';
    document.getElementById('birthMonthOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
    document.getElementById('professionOutput').innerText = '';
}
);