function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let error = document.getElementById("error");

    if(name === "" || email === "" || message === ""){
        error.textContent = "All fields are required!";
        error.style.color = "red";
    }
    else if(!email.includes("@")){
        error.textContent = "Please enter a valid email!";
        error.style.color = "red";
    }
    else{
        error.textContent = "Message sent successfully!";
        error.style.color = "lightgreen";
        this.reset();
    }
});
