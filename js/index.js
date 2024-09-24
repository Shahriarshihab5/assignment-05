document.getElementById('history-btn').addEventListener('click',function(){

  window.location.href='./history.html'

})
  

document.getElementById('donate-now-btn').addEventListener('click', function() {
    const donationInput = document.getElementById('donation-amount'); // Input field for donation
    const donationAmount = parseInt(donationInput.value); // Get the donation amount input

    // Get the total and local donation elements
    const totalDonationElement = document.getElementById('total-donation'); // Orange mark value
    const localDonationElement = document.getElementById('local-donation'); // Blue mark value

    // Check if a valid number is entered
    if (!isNaN(donationAmount) && donationAmount > 0) {
        const currentTotalDonation = parseInt(totalDonationElement.textContent); // Current total donation (orange)
        const currentLocalDonation = parseInt(localDonationElement.textContent); // Current local donation (blue)

        // Update total donation (subtract)
        const newTotalDonation = currentTotalDonation - donationAmount;
        totalDonationElement.textContent = newTotalDonation >= 0 ? newTotalDonation : 0;

        // Update local donation (increase)
        const newLocalDonation = currentLocalDonation + donationAmount;
        localDonationElement.textContent = newLocalDonation;

        // Clear the input field after donation
        donationInput.value = '';
    } else {
        alert('Please enter a valid donation amount.');
    }
});
