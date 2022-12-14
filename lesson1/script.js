function viewer() {
    let name= visitorForm.fullName.value + " " + visitorForm.visitorAge.value;

    let ul = document.getElementById("myVisitors");

    let li = document.createElement("LI");
    li.appendChild(document.createTextNode(name));
    ul.appendChild(li);
}