// Create a monitorsListArray array here
var monitorsListArray = ["Apple", "Peach", "Berry"];
// End of monitorsListArray array

function myMonitorsFunction(arr) {
    var newMonitorsList = [...arr];
    // Only change code below this line
    var monitorsList =[];

    for (var i = 0; i < newMonitorsList.length; i++) {
        var lst = [newMonitorsList[i]];
        lst.push(i + 1);
        monitorsList.push(lst);
    }
    return monitorsList;
    // Only change code above this line
}

console.log(myMonitorsFunction(monitorsListArray));  // Change this line
module.exports = myMonitorsFunction;