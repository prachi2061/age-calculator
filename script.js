document.addEventListener("DOMContentLoaded", () => {
    // Calculate Age
    document.getElementById("calculate-age").addEventListener("click", () => {
        const birthdate = document.getElementById("birthdate").value;

        if (!birthdate) {
            showResult("Please select your birthdate.", "red");
            return;
        }

        const age = calculateAge(new Date(birthdate));
        showResult(`You are ${age} years old.`, "green");
    });

    document.getElementById("change-bg-color").addEventListener("click", () => {
        document.getElementById("background").style.background = getRandomGradient();
    });

    document.getElementById("add-greeting").addEventListener("click", () => {
        const greeting = document.createElement("p");
        greeting.textContent = "Hello! Have a great day!";
        greeting.style.fontSize = "1.5rem";
        greeting.style.color = "yellow";
        greeting.style.marginTop = "20px";
        document.getElementById("additional-buttons").appendChild(greeting);
    });

    document.getElementById("toggle-result").addEventListener("click", () => {
        const resultDiv = document.getElementById("result");
        resultDiv.classList.toggle("hidden");
    });

    
    document.getElementById("animate-result").addEventListener("click", () => {
        const resultDiv = document.getElementById("result");
        resultDiv.style.transform = resultDiv.style.transform === "rotate(360deg)" ? "rotate(0deg)" : "rotate(360deg)";
    });

    function calculateAge(birthdate) {
        const today = new Date();
        let age = today.getFullYear() - birthdate.getFullYear();
        const monthDifference = today.getMonth() - birthdate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }
        return age;
    }

    
    function showResult(message, color) {
        const resultDiv = document.getElementById("result");
        resultDiv.textContent = message;
        resultDiv.style.color = color;
    }

    function getRandomGradient() {
        const colors = [getRandomColor(), getRandomColor()];
        return `linear-gradient(to bottom, ${colors[0]}, ${colors[1]})`;
    }

    function getRandomColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
});
