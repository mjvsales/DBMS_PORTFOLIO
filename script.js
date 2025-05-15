const hoverSound = new Audio('hover.mp3'); 

document.addEventListener("DOMContentLoaded", () => {
    const hoverElements = document.querySelectorAll("button, .portfolio-item");

    hoverElements.forEach(el => {
        el.addEventListener("mouseenter", () => {
            hoverSound.currentTime = 0;
            hoverSound.play().catch(() => {});
        });
    });

    document.querySelectorAll(".portfolio-item").forEach(item => {
        item.addEventListener("click", () => {
            const name = item.textContent.trim().split("\n")[0];
            showGlitchAlert(`You clicked on: ${name}`);
        });
    });
});

function showGlitchAlert(message) {
    const alertBox = document.createElement("div");
    alertBox.textContent = message;
    alertBox.style.position = "fixed";
    alertBox.style.top = "20px";
    alertBox.style.left = "50%";
    alertBox.style.transform = "translateX(-50%)";
    alertBox.style.padding = "15px 30px";
    alertBox.style.background = "rgba(255, 0, 255, 0.9)";
    alertBox.style.color = "#000";
    alertBox.style.fontWeight = "bold";
    alertBox.style.fontSize = "18px";
    alertBox.style.boxShadow = "0 0 10px #00ffff";
    alertBox.style.border = "2px solid #00ffff";
    alertBox.style.zIndex = "9999";
    alertBox.style.borderRadius = "10px";
    alertBox.style.animation = "glitch 0.8s ease-in-out infinite alternate";

    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.remove();
    }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector("main h1");
    if (heading) {
        const text = heading.textContent;
        heading.textContent = "";
        let i = 0;
        const typer = setInterval(() => {
            heading.textContent += text.charAt(i);
            i++;
            if (i >= text.length) clearInterval(typer);
        }, 75);
    }
});
function showProjectDetails(project) {
    const modal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalLink = document.getElementById("modal-link");
    const modalImage = document.getElementById("modal-image");

    if (project === 'mathboost') {
        modalTitle.textContent = "MathBoost";
        modalDescription.textContent = "MathBoost is an interactive web app for practicing math problems. It was a application to help students to find related modules for the math subject they are taking.";
        modalLink.href = "https://github.com/mjvsales/Projects.git"; // Link to your project
        modalImage.src = "https://postimg.cc/ZWnNBffZ"; // Image URL
    }
}
    function showProjectDetails(project2) {
    const modal = document.getElementById("project-modal1");
    const modalTitle = document.getElementById("modal-title1");
    const modalDescription = document.getElementById("modal-description1");
    const modalLink = document.getElementById("modal-link1");
    const modalImage = document.getElementById("modal-image1");

    if (project2 === 'CyberOasis') {
        modalTitle1.textContent = "CyberOasis";
        modalDescription1.textContent = "CyberOasis is a website that tracks all of the games you played and interact with other users with the leaderboards.";
        modalLink1.href = "https://github.com/mjvsales/Projects.git"; // Link to your project
        modalImage1.src = "https://i.ibb.co/1YfMnk6Y/Cyber-Oasis.png" ; // Image URL
    }
    
}

function closeModal() {
    const modal = document.getElementById("project-modal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("project-modal");
    if (event.target === modal) {
        closeModal();
    }
}
