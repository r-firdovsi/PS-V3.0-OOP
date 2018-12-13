let addTableButton = document.getElementById("addbtn");
let startProgram = document.getElementById("startbtn");
let tableArea = document.getElementById("tableaddarea");
let numberOfTables = document.getElementById("nmbroftables");
let tableVariations = document.getElementById("inputarea");
let tb = new Table(0,0);

// ⓒ 2018 Powered by Javascript OOP. Created by Firdovsi Rustemov

eventListener();

function eventListener() {
 addTableButton.addEventListener("click", addTable);
};

function addTable() {
    for(let i=0;i < numberOfTables.value;i++){tb.addNewTable()}
};