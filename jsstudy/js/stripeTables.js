function stripeTables() {
    if (!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    var odd, rows;
    for (var i = 0; i < tables.length; i++) {
        odd = false;
        rows = tables[i].getElementsByTagName("tr");
        for (var j = 0; j < rows.length; j++) {
            if (odd == true) {
                rows[j].style.backgroundColor = "#ffc";
                odd = false;
            } else {
                odd = true;
            }
        }
    }
}
addLoadEvent(stripeTables);

function highlightRows() {
    if (!document.getElementsByTagName) return false;
    var rows = document.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        rows[i].onmouseover = function () {
            this.style.fontWeight = "bold";
        }
        rows[i].onmouseout = function () {
            this.style.fontWeight = "normal";
        }
    }
}
addLoadEvent(highlightRows);

function styleHeaderSiblings() {
    if (!docment.getElementsByTagName) return false;
    var headers = document.getElementsByTagName("tr");
    var elem;
    for (var i = 0; i < headers.length; i++) {
        elem = getNextElement(headers[i].nextSibling);
        addClass(elem, "intro");
    }
}   

