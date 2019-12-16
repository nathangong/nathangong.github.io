function main(classes, starts, ends) {
    var d = new Date();
    var day = d.getDay(d.toString());
    let element = document.getElementById("todayClasses");

    let titleNode = document.createTextNode("Today's Classes:");
    let title = document.createElement("h1");
    title.appendChild(titleNode);
    element.appendChild(title);

    getSchedule(classes, starts, ends);

    if (day == 5 || day == 6) {
        day = 1;
    } else {
        day++;
    }

}

function getPeriods(day) {
    switch (day) {
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

function getSchedule(classes, starts, ends) {
    var currTime = new Date(Date.now());
    for (i = 0; i < classes.length; i++) {
        var spaceNode = document.createTextNode(" ");
        var space = document.createElement("p");
        space.appendChild(spaceNode);
        var Break = document.createElement("br");
        var span = document.createElement("span");
        var node = document.createTextNode("Period " + classes[i].charAt(classes[i].length - 1) + " - " + classes[i].substring(0, classes[i].length - 5));
        span.appendChild(node);
        if ((i == 0 && currTime.getTime() < ends[i].getTime()) || (i != 0 && currTime.getTime() > ends[i-1].getTime() && currTime.getTime() < ends[i].getTime())) {
            span.setAttribute("style", "font-weight: bold");
        }
        var courses = document.getElementById("todayClasses");
        courses.appendChild(span);
        courses.appendChild(Break);
        courses.appendChild(space);
        courses.appendChild(Break);
        var startHour = starts[i].getHours() % 12;
        if (startHour == 0) startHour = 12;
        var startMinute = starts[i].getMinutes();
        if (startMinute < 10) startMinute = "0" + startMinute;
        var endHour = ends[i].getHours() % 12;
        if (endHour == 0) endHour = 12;
        var endMinute = ends[i].getMinutes();
        if (endMinute < 10) endMinute = "0" + endMinute;
        node = document.createTextNode(startHour + ":" + startMinute + "-" + endHour + ":" + endMinute);
        span = document.createElement("span");
        span.appendChild(node);
        if ((i == 0 && currTime.getTime() < ends[i].getTime()) || (i != 0 && currTime.getTime() > ends[i-1].getTime() && currTime.getTime() < ends[i].getTime())) {
            span.setAttribute("style", "font-weight: bold");
        }
        spaceNode = document.createTextNode(" ");
        space = document.createElement("p");
        space.appendChild(spaceNode);
        Break = document.createElement("br");
        var times = document.getElementById("todayTimes");
        times.appendChild(span);
        times.appendChild(Break);
        times.appendChild(space);
        times.appendChild(Break);
    }
    if (classes.length == 0) {
        let node = document.createTextNode("You do not have any classes today! :)");
        let para = document.createElement("p");
        para.appendChild(node);
        let element = document.getElementById("todayClasses");
        element.appendChild(para);
    }
}

function getScheduleTommorow(classes, date, starts, ends) {
    titleNode = document.createTextNode("Next Day's Classes:");
    title = document.createElement("h1");
    title.appendChild(titleNode);
    var element1 = document.getElementById("tomorrowClasses");
    element1.appendChild(title);
    for (i = 0; i < classes.length; i++) {
        var spaceNode = document.createTextNode(" ");
        var space = document.createElement("p");
        space.appendChild(spaceNode);
        var Break = document.createElement("br");
        var node = document.createTextNode("Period " + classes[i].charAt(classes[i].length - 1) + " - " + classes[i].substring(0, classes[i].length - 5));
        var element = document.getElementById("tomorrowClasses");
        element.appendChild(node);
        element.appendChild(Break);
        element.appendChild(space);
        element.appendChild(Break);
        var startHour = starts[i].getHours() % 12;
        if (startHour == 0) startHour = 12;
        var startMinute = starts[i].getMinutes();
        if (startMinute < 10) startMinute = "0" + startMinute;
        var endHour = ends[i].getHours() % 12;
        if (endHour == 0) endHour = 12;
        var endMinute = ends[i].getMinutes();
        if (endMinute < 10) endMinute = "0" + endMinute;
        node = document.createTextNode(startHour + ":" + startMinute + "-" + endHour + ":" + endMinute);
        span = document.createElement("span");
        span.appendChild(node);
        spaceNode = document.createTextNode(" ");
        space = document.createElement("p");
        space.appendChild(spaceNode);
        Break = document.createElement("br");
        var times = document.getElementById("tomorrowTimes");
        times.appendChild(span);
        times.appendChild(Break);
        times.appendChild(space);
        times.appendChild(Break);
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
        var node = document.createTextNode("Period " + classes[i].charAt(classes[i].length - 1) + " - " + classes[i].substring(0, classes[i].length - 5));
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

$(document).ready(function() {
    setInterval('refreshPage()', 500000);
});

function refreshPage() { 
    location.reload(); 
}