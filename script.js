function calculateFunding() {
    // Get input values
    var pacContribution = parseInt(document.getElementById("pacContribution").value);
    var abcContribution = parseInt(document.getElementById("abcContribution").value);

    // Calculate total campaign budget (PAC contribution is unrestricted)
    var totalCampaignBudget = pacContribution + (abcContribution / 0.65);

    // Determine maximum additional funding from SPG
    var maxAdditionalFunding = totalCampaignBudget - pacContribution - abcContribution;

    // Display the result
    document.getElementById("result").innerHTML = "Maximum Additional Funding from SPG: $" + maxAdditionalFunding.toFixed(2);
}
