// from data.js
var tableData=data;

// select tbody
var tbody=d3.select("tbody");

// create function to display the alien sightings

function displayData(alienSightings) {
    tbody.text("")
    alienSightings.forEach(function(alienSightings) {
        var row=tbody.append("tr")
        Object.entries(alienSightings).forEach(function ([key, value]) {
            var cell=row.append("td").text(value);
            
        });
        
    })};
    

// display all alien sightings 
displayData(tableData);

// filter with date

var dateTimeFilter=d3.select("#datetime");
var button=d3.select("filter-btn");


function click() {
    d3.event.preventDefault();
    console.log(dateTimeFilter.property("value"));

    // create a new table displaying filter applied
    var newTable=tableData.filter(alienRecord => alienRecord.datetime===dateTimeFilter.property("value"));
    displayData(newTable);
    
};

// listener
dateTimeFilter.on("change",click);
