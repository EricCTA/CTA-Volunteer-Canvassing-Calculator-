function calculateFunding() {
    // Get input value
    var pacContribution = parseFloat(document.getElementById("pacContribution").value);

    // Calculate maximum additional funds for ABC Committee (65% of PAC contribution)
    var abcMaxContribution = pacContribution * 0.65;

    // Display the result
    document.getElementById("result").innerHTML = "Maximum Additional Funds for ABC Committee: $" + abcMaxContribution.toFixed(2);
}
