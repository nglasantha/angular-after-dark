// See Closure, Global Imports and Global Namespace

var showModal = function () {
    var modalElement = document.getElementById("modal");
    var screenW = window.screen.width;
    var modalW = 650;
    var modalH = 400;
    modalElement.style.width = modalW + 'px';
    modalElement.style.height = modalH + 'px';
    modalElement.style.left = (screenW/2)-(modalW/2)+'px';
    modalElement.style.display = "block";

    var modalBodyElement = document.getElementsByClassName("modal-body");
    modalBodyElement[0].style.height = (modalH - 41) + 'px'; //What ? why 0th element
}

var hideModal = function () {
    document.getElementById("modal").style.display = "none";
}