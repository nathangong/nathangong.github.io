function main(classes) {
    var d = new Date();
    var day = d.getDay(d.toString());
    let element = document.getElementById("div2");
    let para;
    let node;

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
    var node1 = document.createTextNode("Classes you have:");
    var para1 = document.createElement("h3");
    para1.appendChild(node1);
    var element1 = document.getElementById("div2");
    element1.appendChild(para1);
    for (i = 0; i < classes.length; i++) {
        var spaceNode = document.createTextNode(" ");
        var space = document.createElement("p");
        space.appendChild(spaceNode);
        var Break = document.createElement("br");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        var node = document.createTextNode(classes[i]);
        var element = document.getElementById("div2");
        element.appendChild(node);
        element.appendChild(checkbox);
        element.appendChild(Break);
        element.appendChild(space);
        element.appendChild(Break);
    }
    if (classes.length == 0) {
        let node = document.createTextNode("You do not have any classes today! :)");
        let para = document.createElement("p");
        para.appendChild(node);
        let element = document.getElementById("div2");
        element.appendChild(para);
    }
} 
function getScheduleTommorow(classes) {
    var usedPeriods = [];
    titleNode = document.createTextNode("Next School Day's Classes:");
    title = document.createElement("h1");
    title.appendChild(titleNode);
    var node1 = document.createTextNode("Classes you have:");
    var para1 = document.createElement("h3");
    para1.appendChild(node1);
    var element1 = document.getElementById("div3");
    element1.appendChild(title);
    element1.appendChild(para1);
    for (i = 0; i < classes.length; i++) {
        var spaceNode = document.createTextNode(" ");
        var space = document.createElement("p");
        space.appendChild(spaceNode);
        var Break = document.createElement("br");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        var node = document.createTextNode(classes[i]);
        var element = document.getElementById("div3");
        element.appendChild(node);
        element.appendChild(checkbox);
        element.appendChild(Break);
        element.appendChild(space);
        element.appendChild(Break);
        usedPeriods.push(parseInt(classes[i].charAt(classes[i].length-1)));
    }
    if (classes.length == 0) {
        let node = document.createTextNode("ITS THE END OF THE SCHOOL YEAR!!!!!");
        let para = document.createElement("p");
        para.appendChild(node);
        let element = document.getElementById("div2");
        element.appendChild(para);
    }
} 