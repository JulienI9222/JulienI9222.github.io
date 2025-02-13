let ownerName = "Julien Inera"; // Julien Inera 
let userName = "JulienI9222"; // JulienI9222

document.querySelectorAll(".owner-name").forEach((e) => {
    e.innerHTML = ownerName;
});

document.querySelector("#github").href = "http://github.com/" + userName;
document.querySelector("#fork").href = "http://github.com/" + userName + "/" + userName + ".github.io";
