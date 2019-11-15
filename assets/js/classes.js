var d = new Date();
var day = d.getDay(d.toString());
let element = document.getElementById("div2");
let para;
let node;

let titleNode = document.createTextNode("Predicted Classes For Today:");
let title = document.createElement("h1");
title.appendChild(titleNode);
element.appendChild(title);

getSchedule(getPeriods(day));

element = document.getElementById("div3");
titleNode = document.createTextNode("Predicted Classes For Next Time You Have Class:");
title = document.createElement("h1");
title.appendChild(titleNode);
element.appendChild(title);

if (day == 5 || day == 6) {
    day = 1;
}
else {
    day++;
}

getScheduleTommorow(getPeriods(day));

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

function getSchedule(periods) {
    try {
        let classes = ["English 2 Honors", "Chemistry Honors", "Precalculus Honors", "World History", "Creed, Community, Call", "Photography 1", "Spanish 3", "Debate", "Speech"];
        var answer;
        periods = periods.toString();
        var node1 = document.createTextNode("Classes you have:");
        var para1 = document.createElement("h3");
        para1.appendChild(node1);
        var element1 = document.getElementById("div2");
        element1.appendChild(para1);
        for (i = 0; i < periods.length; i++) {
            var spaceNode = document.createTextNode(" ");
            var space = document.createElement("p");
            space.appendChild(spaceNode);
            var Break = document.createElement("br");
            var period = (parseInt(periods.charAt(i)) <= 7) ? parseInt(periods.charAt(i)) : "EC";
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            var node = document.createTextNode(period + ": " + classes[periods.charAt(i)-1]);
            classes[period-1] = "null";
            var element = document.getElementById("div2");
            element.appendChild(node);
            element.appendChild(checkbox);
            element.appendChild(Break);
            element.appendChild(space);
            element.appendChild(Break);
        }

        var node2 = document.createTextNode("Classes you don't have:");
        var para2 = document.createElement("h3");
        para2.appendChild(node2);
        var element2 = document.getElementById("div2");
        element2.appendChild(para2);

        for (i = 0; i < classes.length; i++) {
            if (classes[i] != "null") {
                var para = document.createElement("p");
                var period = (i <= 6) ? i+1 : "EC";
                var node = document.createTextNode(period + ": " + classes[i]);
                para.appendChild(node);
                var element = document.getElementById("div2");
                element.appendChild(para);
            }
        }
    }
    catch (error) {
        let node = document.createTextNode("You do not have any classes today! :)");
        let para = document.createElement("p");
        para.appendChild(node);
        let element = document.getElementById("div2");
        element.appendChild(para);
    }
} 
function getScheduleTommorow(periods) {
    try {
        let classes = ["English 2 Honors", "Chemistry Honors", "Precalculus Honors", "World History", "Creed, Community, Call", "Photography 1", "Spanish 3", "Debate", "Speech"];
        var answer;
        periods = periods.toString();
        var node1 = document.createTextNode("Classes you have:");
        var para1 = document.createElement("h3");
        para1.appendChild(node1);
        var element1 = document.getElementById("div3");
        element1.appendChild(para1);
        for (i = 0; i < periods.length; i++) {
            var spaceNode = document.createTextNode(" ");
            var space = document.createElement("p");
            var period = (parseInt(periods.charAt(i)) <= 7) ? parseInt(periods.charAt(i)) : "EC";
            var checkbox = document.createElement("input");
            var Break = document.createElement("br");
            checkbox.type = "checkbox";
            var node = document.createTextNode(period + ": " + classes[periods.charAt(i)-1]);
            classes[period-1] = "null";
            var element = document.getElementById("div3");
            space.appendChild(spaceNode);
            element.appendChild(node);
            element.appendChild(checkbox);
            element.appendChild(Break);
            element.appendChild(space);
            element.appendChild(Break);
        }

        var node2 = document.createTextNode("Classes you don't have:");
        var para2 = document.createElement("h3");
        para2.appendChild(node2);
        var element2 = document.getElementById("div3");
        element2.appendChild(para2);

        for (i = 0; i < classes.length; i++) {
            if (classes[i] != "null") {
                var para = document.createElement("p");
                var period = (i <= 6) ? i+1 : "EC";
                var node = document.createTextNode(period + ": " + classes[i]);
                para.appendChild(node);
                var element = document.getElementById("div3");
                element.appendChild(para);
            }
        }
    }
    catch (error) {
        console.log(error);
        let node = document.createTextNode("You do not have any classes today! :)");
        let para = document.createElement("p");
        para.appendChild(node);
        let element = document.getElementById("div3");
        element.appendChild(para);
    }
} 


function calculate() {
    remove();
    let classes = ["English 2 Honors", "Chemistry Honors", "Precalculus Honors", "World History", "Creed, Community, Call", "Photography 1", "Spanish 3"];
    var periods = document.getElementById("input").value;
    var answer;
    periods = periods.toString();
    var node1 = document.createTextNode("Classes you have:");
    var para1 = document.createElement("h3");
    para1.setAttribute("id", 'para');
    para1.appendChild(node1);
    var element1 = document.getElementById("div1");
    element1.appendChild(para1);

    for (i = 0; i < periods.length; i++) {
        var spaceNode = document.createTextNode(" ");
        var space = document.createElement("p");
        space.setAttribute("id", 'para');
        var period = (parseInt(periods.charAt(i)) <= 7) ? parseInt(periods.charAt(i)) : "EC";
        var checkbox = document.createElement("input");
        checkbox.setAttribute("id", 'para');
        var Break = document.createElement("br");
        Break.setAttribute("id", 'para');
        checkbox.type = "checkbox";
        var span = document.createElement("span");
        var node = document.createTextNode(period + ": " + classes[periods.charAt(i)-1]);
        span.appendChild(node);
        span.setAttribute("id", 'para');
        classes[period-1] = "null";
        var element = document.getElementById("div3");
        space.appendChild(spaceNode);
        element1.appendChild(span);
        element1.appendChild(checkbox);
        element1.appendChild(Break);
        element1.appendChild(space);
        element1.appendChild(Break);
    }

    var node2 = document.createTextNode("Classes you don't have:");
    var para2 = document.createElement("h3");
    para2.setAttribute("id", 'para');
    para2.appendChild(node2);
    var element2 = document.getElementById("div1");
    element2.appendChild(para2);

    for (i = 0; i < classes.length; i++) {
        if (classes[i] != "null") {
            var para = document.createElement("p");
            para.setAttribute("id", 'para');
            var node = document.createTextNode((i+1) + ". " + classes[i]);
            para.appendChild(node);
            var element = document.getElementById("div1");
            element.appendChild(para);
        }
    }
    
}
function remove() {
    var moreElements = true;
    while(moreElements) {
        try {
            var remove = document.getElementById("para");
            remove.parentNode.removeChild(remove);
        }
        catch (error) {
            moreElements = false;
        }
    }
}