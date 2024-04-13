function calculateVolunteers() {
    var voterUniverse = parseInt(document.getElementById("voterUniverse").value);
    var numHours = parseInt(document.getElementById("numHours").value);

    var contactRate = 0.15;
    var doorsPerHourPerVolunteer = 15;
    
    var totalDoorsKnocked = numHours * doorsPerHourPerVolunteer;
    var expectedContacts = Math.round(totalDoorsKnocked * contactRate);
    var volunteersNeeded = Math.ceil(voterUniverse / totalDoorsKnocked);

    document.getElementById("result").innerHTML = "Volunteers Needed: " + volunteersNeeded + "<br>" +
        "Expected Contacts: " + expectedContacts;
}
