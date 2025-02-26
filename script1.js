const formData = {
    email: "",
    password: ""
};


document.querySelectorAll(".toggle-password").forEach(icon => {
    icon.addEventListener("click", function () {
        const inputId = this.getAttribute("data-target");
        const passwordInput = document.getElementById(inputId);
        
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            this.textContent = "🙈"; 
            passwordInput.type = "password";
            this.textContent = "👁️";
        }
    });
});

document.getElementById("signup-email").addEventListener("input", event => {
    formData.email = event.target.value;
});
document.getElementById("signup-password").addEventListener("input", event => {
    formData.password = event.target.value;
});
document.getElementById("signin-email").addEventListener("input", event => {
    formData.email = event.target.value;
});
document.getElementById("signin-password").addEventListener("input", event => {
    formData.password = event.target.value;
});

document.getElementById("signup-btn").addEventListener("click", () => {
    console.log("Signup Data:", formData);
});
document.getElementById("signin-btn").addEventListener("click", () => {
    console.log("Signin Data:", formData);
});
