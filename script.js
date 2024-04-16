function calculateVolunteers() {
    var voterUniverse = parseInt(document.getElementById("voterUniverse").value);
    var num2HourShifts = parseInt(document.getElementById("num2HourShifts").value);
    var num4HourShifts = parseInt(document.getElementById("num4HourShifts").value);

    var contactRate = 0.15;
    var doorsPerHourPerVolunteer = 15;
    
    var totalDoors2Hour = num2HourShifts * 2 * doorsPerHourPerVolunteer;
    var totalDoors4Hour = num4HourShifts * 4 * doorsPerHourPerVolunteer;

    var totalDoors = totalDoors2Hour + totalDoors4Hour;

    var expectedContacts = Math.round(totalDoors * contactRate);
    var volunteersNeeded = Math.ceil(voterUniverse / totalDoors);

    document.getElementById("result").innerHTML = "Volunteers Needed: " + volunteersNeeded + "<br>" +
        "Expected Contacts: " + expectedContacts;
}
