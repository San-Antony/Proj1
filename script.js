// Donation Form Validation
$(document).ready(function () {
  $("#donationForm").submit(function (e) {
    e.preventDefault();

    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let amount = $("#amount").val().trim();
    let payment = $("#payment").val();

    if (name === "" || email === "" || amount === "" || payment === "") {
      alert("Please fill in all fields before donating.");
      return;
    }

    if (amount < 10) {
      alert("Minimum donation amount is ₹10.");
      return;
    }

    // Success Message
    alert(`🎉 Thank you, ${name}, for your generous donation of ₹${amount}!`);

    // Reset Form
    $("#donationForm")[0].reset();
  });
});
