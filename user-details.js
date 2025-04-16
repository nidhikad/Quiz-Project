document.addEventListener("DOMContentLoaded", () => {
    const userForm = document.getElementById("user-form");
  
    userForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const rollNumber = document.getElementById("roll-number").value;
  
      // Validate user details if needed
  
      // Redirect to the quiz page with user details
      window.location.href = `quiz.html?name=${encodeURIComponent(
        name
      )}&email=${encodeURIComponent(email)}&rollNumber=${encodeURIComponent(
        rollNumber
      )}`;
    });
  });