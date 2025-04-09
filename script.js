const lightSwitch = document.getElementById("switch");
const lightBulb0 = document.getElementById("lightoff");
const lightBulb1 = document.getElementById("lighton");

lightSwitch.addEventListener("click", function(){
    if (lightSwitch.classList.contains("btn-warning"))
        {
        lightSwitch.classList.replace("btn-warning", "btn-dark");
        lightBulb0.classList.replace("d-block","d-none");
        lightBulb1.classList.replace("d-none","d-block");
        lightSwitch.textContent = "Spegni la luce"

    }
    else 
    {
        lightSwitch.classList.replace("btn-dark","btn-warning")
        lightBulb0.classList.replace("d-none","d-block")
        lightBulb1.classList.replace("d-block","d-none");
        lightSwitch.textContent = "Accendila luce"


    }
    }

)
