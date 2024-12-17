function submitFeedback() {
    // Get values from the input fields
    let name = document.getElementById("name").value;
    let feedback = document.getElementById("feedback").value;

    // Check if fields are not empty
    if (name && feedback) {
        // Display the feedback dynamically
        document.getElementById("output").textContent = `Thank you, ${name}! Your feedback: "${feedback}"`;

        // Log feedback to the console
        console.log("Name:", name);
        console.log("Feedback:", feedback);
    } else {
        // Alert if fields are empty
        alert("Please fill out both fields!");
    }
}
