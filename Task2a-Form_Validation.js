document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Clear previous error messages (if you want to implement error messages)
    // You can create error message elements in your HTML and clear them here
    // For example: document.getElementById('error').textContent = '';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Simple validation: Check if name is empty
    if (name === '') {
        alert('Name is required.');
        return; // Stop execution
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Invalid email format.');
        return; // Stop execution
    }

    // Validate password strength
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/; // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    if (!passwordPattern.test(password)) {
        alert('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.');
        return; // Stop execution
    }

    // If validation passes, submit the form
    console.log('Form submitted successfully!');
    this.submit(); // Uncomment this line to actually submit the form
});
