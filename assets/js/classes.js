function main(classes) {
    var d = new Date();
    var day = d.getDay(d.toString());
    let element = document.getElementById("today");

    let titleNode = document.createTextNode("Today's Classes:");
    let title = document.createElement("h1");
    title.appendChild(titleNode);
    element.appendChild(title);

    getSchedule(classes);

    if (day == 5 || day == 6) {
        day = 1;
    }
    else {
        day++;
    }

}

function getPeriods(day) {
    switch(day) {
        case 1:
            return "123456";
        case 2:
            return "1723458";
        case 3:
            return "167239";
        case 4:
            return "145672";
        case 5:
            return "34567";
        default:
            return null;
            break;
    }
}

function getSchedule(classes) {
    for (i = 0; i < classes.length; i++) {
        var spaceNode = document.createTextNode(" ");
        var space = document.createElement("p");
        space.appendChild(spaceNode);
        var Break = document.createElement("br");
        var node = document.createTextNode("Period " + classes[i].charAt(classes[i].length-1) + " - " + classes[i].substring(0, classes[i].length-5));
        var element = document.getElementById("today");
        element.appendChild(node);
        element.appendChild(Break);
        element.appendChild(space);
        element.appendChild(Break);
    }
    if (classes.length == 0) {
        let node = document.createTextNode("You do not have any classes today! :)");
        let para = document.createElement("p");
        para.appendChild(node);
        let element = document.getElementById("today");
        element.appendChild(para);
    }
} 
function getScheduleTommorow(classes, date) {
    titleNode = document.createTextNode("Next Day's Classes:");
    title = document.createElement("h1");
    title.appendChild(titleNode);
    var element1 = document.getElementById("tomorrow");
    element1.appendChild(title);
    for (i = 0; i < classes.length; i++) {
        var spaceNode = document.createTextNode(" ");
        var space = document.createElement("p");
        space.appendChild(spaceNode);
        var Break = document.createElement("br");
        var node = document.createTextNode("Period " + classes[i].charAt(classes[i].length-1) + " - " + classes[i].substring(0, classes[i].length-5));
        var element = document.getElementById("tomorrow");
        element.appendChild(node);
        element.appendChild(Break);
        element.appendChild(space);
        element.appendChild(Break);
    }
    if (classes.length == 0) {
        let node = document.createTextNode("IT'S THE END OF THE SCHOOL YEAR!!!!!");
        let para = document.createElement("p");
        para.appendChild(node);
        let element = document.getElementById("today");
        element.appendChild(para);
    }
    homework(classes, date);
}

function homework(classes, date) {
    titleNode = document.createTextNode("Homework:");
    title = document.createElement("h1");
    title.appendChild(titleNode);
    var element1 = document.getElementById("homework");
    element1.appendChild(title);
    for (i = 0; i < classes.length; i++) {
        var spaceNode = document.createTextNode(" ");
        var space = document.createElement("p");
        space.appendChild(spaceNode);
        var Break = document.createElement("br");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        id = "tommorowCheckbox" + i;
        checkbox.setAttribute("class", id);
        checkbox.setAttribute("style", "display:none!important");
        checkbox.setAttribute("id", "cbx");
        checkbox.setAttribute("onclick", "writeCookie(" + "\"tommorowCheckbox" + i + "\", " + "\"" + date.toUTCString() + "\")");
        var container = document.createElement("label");
        container.setAttribute("class", "container");
        container.appendChild(checkbox);
        var checkmark = document.createElement("span");
        checkmark.setAttribute("class", "checkmark");
        container.appendChild(checkmark);
        var node = document.createTextNode("Period " + classes[i].charAt(classes[i].length-1) + " - " + classes[i].substring(0, classes[i].length-5));
        var div = document.getElementById("homework");
        div.appendChild(node);
        div.appendChild(container);
        div.appendChild(Break);
        div.appendChild(space);
        div.appendChild(Break);

        cookie = document.cookie;
        if (cookie.includes(id)) {
            index = cookie.lastIndexOf(id);
            var checked = cookie.substring(index + id.length + 1, index + id.length + 2);
            if (checked == "t") {
                checkbox.checked = true;
            }
        }
    }
    if (classes.length == 0) {
        let node = document.createTextNode("IT'S THE END OF THE SCHOOL YEAR!!!!!");
        let para = document.createElement("p");
        para.appendChild(node);
        let element = document.getElementById("today");
        element.appendChild(para);
    }
}

function writeCookie(elementID, expirationDate) {
    checkbox = document.getElementsByClassName(elementID)[0];
    var checked = checkbox.checked;
    document.cookie = elementID + "=" + checked + "; expires =" + expirationDate;
}