function calculateVolunteers() {
    // Get input values
    var voterUniverse = parseInt(document.getElementById("voterUniverse").value);

    // Assumptions
    var contactRate = 0.15;
    var votersPerHourPerVolunteer = 15;
    var canvassingHoursPerShift = 3; // Only 3 out of 4 hours are used for canvassing

    // Calculate total door knocks
    var totalDoorKnocks = voterUniverse / contactRate;

    // Calculate total canvassing hours required
    var totalCanvassingHours = totalDoorKnocks / votersPerHourPerVolunteer;

    // Calculate number of shifts needed
    var numShifts = Math.ceil(totalCanvassingHours / canvassingHoursPerShift);

    // Calculate number of volunteers needed
    var volunteersNeeded = Math.ceil(numShifts);

    // Display the result
    document.getElementById("result").innerHTML = "Number of Volunteers Needed: " + volunteersNeeded;
}
