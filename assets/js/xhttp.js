const CLIENTID = "0a77df35-ae06-4998-a77d-ecff0afa63ef";
const TENANTID = "b0e91a46-079b-4108-bd1a-e246d5d2f971";

var msalConfig = {
    auth: {
        clientId: CLIENTID,
        authority: "https://login.microsoftonline.com/" + TENANTID,
        redirectURI: window.location.href
    },
};

var requestObj = {
    scopes: ["calendars.read"]
};

var myMSALObj = new Msal.UserAgentApplication(msalConfig);

myMSALObj.acquireTokenSilent(requestObj).then(function (tokenResponse) {
    // Callback code here
    callRequest(tokenResponse.accessToken);
    callRequestNextDay(tokenResponse.accessToken)
}).catch(function (error) {
    console.log(error);
    msal.acquireTokenPopup(requestObj).then(function (response) {
        callRequest(response.accessToken);
        callRequestNextDay(response.accessToken);
    }).catch(function (error) {
        console.log(error);
    });
});

var add = 2;
function callRequestNextDay(accessToken) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            json = JSON.parse(xhttp.responseText);
            var done = false;
            for (i = 0; i < json.value.length; i++) {
                if (json.value[i].categories == "BCP Schedule" && !json.value[i].isAllDay) {
                    getClassesTommorow(json);
                    done = true;
                    break;
                }
            }
            if (done) return;
            callRequestNextDay(accessToken);
        }
    };
    add++;
    const STARTDATE = new Date();
    const ENDDATE = new Date();
    STARTDATE.setHours(8, 15, 0, 0);
    ENDDATE.setHours(14, 45, 0, 0); 
    STARTDATE.setDate(STARTDATE.getDate() + add);
    ENDDATE.setDate(ENDDATE.getDate() + add);
    xhttp.open("GET", "https://graph.microsoft.com/v1.0/me/calendarView?startDateTime=" + STARTDATE.toISOString() + "&endDateTime=" + ENDDATE.toISOString(), true);
    xhttp.setRequestHeader("Authorization", 'Bearer ' + accessToken);
    xhttp.setRequestHeader("Prefer", 'outlook.timezone="America/Los_Angeles"');
    xhttp.send();
}

function callRequest(accessToken) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(xhttp.responseText);
            getClasses(json);
        }
    };

    const STARTDATE = new Date();
    const ENDDATE = new Date();
    STARTDATE.setHours(8, 15, 0, 0);
    ENDDATE.setHours(14, 45, 0, 0); 
    xhttp.open("GET", "https://graph.microsoft.com/v1.0/me/calendarView?startDateTime=" + STARTDATE.toISOString() + "&endDateTime=" + ENDDATE.toISOString(), true);
    xhttp.setRequestHeader("Authorization", 'Bearer ' + accessToken);
    xhttp.setRequestHeader("Prefer", 'outlook.timezone="America/Los_Angeles"');
    xhttp.send();
}

function getClasses(json) {
    var classes = [];
    for (i = 0; i < json.value.length; i++) {
        if (json.value[i].categories == "BCP Schedule" && !json.value[i].isAllDay) {
            var name = json.value[i].subject;
            classes.push(name);
        }
    }
    main(classes);
}
function getClassesTommorow(json) {
    var classes = [];
    for (i = 0; i < json.value.length; i++) {
        if (json.value[i].categories == "BCP Schedule" && !json.value[i].isAllDay) {
            var name = json.value[i].subject;
            classes.push(name);
        }
    }
    getScheduleTommorow(classes);
}
