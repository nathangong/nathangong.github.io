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
        node = "Period " + node.charAt(node.length-1) + " - " + node.substring(0, node.length-5);
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
        checkbox.setAttribute("id", id);
        checkbox.setAttribute("onclick", "writeCookie(" + "\"tommorowCheckbox" + i + "\", " + "\"" + date.toUTCString() + "\")");
        var node = document.createTextNode("Period " + classes[i].charAt(classes[i].length-1) + " - " + classes[i].substring(0, classes[i].length-5));
        var element = document.getElementById("homework");
        element.appendChild(node);
        element.appendChild(checkbox);
        element.appendChild(Break);
        element.appendChild(space);
        element.appendChild(Break);

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

function writeCookie(elementID) {
    checkbox = document.getElementById(elementID);
    var checked = checkbox.checked;
    document.cookie = elementID + "=" + checked + "; expires =";
}