function calculateVolunteers() {
    var voterUniverse = parseInt(document.getElementById("voterUniverse").value);
    var num2HourShifts = parseInt(document.getElementById("num2HourShifts").value);
    var num4HourShifts = parseInt(document.getElementById("num4HourShifts").value);

    var contactRate = 0.15;
    var doorsPerHourPerVolunteer = 15;
    
    var totalDoors2Hour = num2HourShifts * 2 * doorsPerHourPerVolunteer;
    var totalDoors4Hour = num4HourShifts * 4 * doorsPerHourPerVolunteer;

    var expectedContacts2Hour = Math.round(totalDoors2Hour * contactRate);
    var expectedContacts4Hour = Math.round(totalDoors4Hour * contactRate);

    var volunteersNeeded2Hour = Math.ceil(voterUniverse / totalDoors2Hour);
    var volunteersNeeded4Hour = Math.ceil(voterUniverse / totalDoors4Hour);

    document.getElementById("result").innerHTML = "After School Canvassing (2-hour shi
