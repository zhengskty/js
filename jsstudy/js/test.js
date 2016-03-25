// window.onload = function () {
// 	var testdiv = document.getElementById("testdiv");
// 	testdiv.innerHTML = "<p>I inserted <em>this</em> content.</p>";
// }




// window.onload = function() {
//     var para = document.createElement("p");
//     var info = "nodeName: ";
//     info += para.nodeName;
//     info += "nodeType: ";
//     info += para.nodeType;
//     alert(info);
// }
window.onload = function() {
    var testdiv = document.getElementById("testdiv");
    var para = document.createElement("p");
    testdiv.appendChild(para);
    var txt = document.createTextNode("Hello World");
    para.appendChild(txt);
}
