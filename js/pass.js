document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("mypassword");
    const showPassLink = document.getElementById("show_pass");

    showPassLink.addEventListener("click", function (e) {
        e.preventDefault();

        if (passwordInput.type === "password") {
            passwordInput.type = "text";

        } else {
            passwordInput.type = "password";

        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("mypassword1");
    const showPassLink = document.getElementById("show_pass1");

    showPassLink.addEventListener("click", function (e) {
        e.preventDefault();

        if (passwordInput.type === "password") {
            passwordInput.type = "text";

        } else {
            passwordInput.type = "password";

        }
    });
});