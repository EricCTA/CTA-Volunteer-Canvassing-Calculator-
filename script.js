function calculateVolunteers() {
    var voterUniverse = parseInt(document.getElementById("voterUniverse").value);
    var num2HourShifts = parseInt(document.getElementById("num2HourShifts").value);
    var num4HourShifts = parseInt(document.getElementById("num4HourShifts").value);

    var contactRate = 0.15;
    var contactsPerAttempt = voterUniverse * contactRate;
    var volunteersPerHour = 15; // Number of doors attempted per volunteer per hour
    var volunteersPer2HourShift = volunteersPerHour * 2;
    var volunteersPer4HourShift = volunteersPerHour * 4;

    var totalContacts = contactsPerAttempt * (num2HourShifts * 2 + num4HourShifts * 4);
    var totalVolunteersNeeded = Math.ceil(totalContacts / (volunteersPer2HourShift * num2HourShifts + volunteersPer4HourShift * num4HourShifts));

    var volunteersFor2HourShift = Math.ceil(totalContacts / (num2HourShifts * 2));
    var volunteersFor4HourShift = Math.ceil(totalContacts / (num4HourShifts * 4));

    document.getElementById("result").innerHTML = "Total Volunteers Needed: " + totalVolunteersNeeded + "<br>" +
        "Volunteers Needed for Every 2-Hour Shift: " + volunteersFor2HourShift + "<br>" +
        "Volunteers Needed for Every 4-Hour Shift: " + volunteersFor4HourShift;
}
