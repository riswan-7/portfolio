function sendMail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields before sending your message.");
    return; 
}
var params = {
    name: name,
    email: email,
    message: message,
};
const serviceID = "service_j4t9wnc"; 
const templateID = "template_lo2wlav"; 
emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
        if (res.status >= 200 && res.status < 300) {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            alert("Your message has been sent successfully.");
        } else {
            alert("Something went wrong. Please try again.");
        }
    })
    .catch((err) => {
        console.error("Failed to send email:", err);
        alert("Failed to send your message. Please try again later.");
    });
}