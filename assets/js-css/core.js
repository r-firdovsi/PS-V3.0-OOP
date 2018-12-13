function Table(number,id) {
this.number = number;
this.id = id;
};

// ⓒ 2018 Powered by Javascript OOP. Created by Firdovsi Rustemov

let tableImageSrc = {
        "Play Station 3": "assets/img/ps3.png",
        "Play Station 4": "assets/img/ps.png",
        "Bilyard": "assets/img/pool-table.png"
};

Table.prototype.addNewTable = function() {
    this.number++;
    this.id++;
    let tableTemplate = `
    <div class="col-md-2 btn-outline-warning">
    <img id="tableicon" src=${tableImageSrc[tableVariations.value]}>
    <h4 id="tableno${this.id}">Masa No: ${this.number}</h4>
    <button class="btn btn-outline-dark" data-toggle="modal"  id="btnid${this.id}">Hesab Ac</button>
    </div>`;
    tableArea.innerHTML += tableTemplate;
};