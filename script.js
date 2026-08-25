let stage = 0;
const maxStage = 5;
const stageNames = ["seed", "sprout", "grow1", "grow2", "grow3"];
const growBtn = document.querySelector("#growBtn");
const buttonLabels = [
    "Let it Sprout🌾 ",
    "Help it Grow 🌿 ",
    "Grow Stronger 🌳",
    "Grow Fully 🌸",
    "Fully Grown! 🌟"
];

let waterClicks = 0;
const maxWaterClicks = 4;
const flowerNames = ["flower1", "flower2", "flower3", "flower4", "flower5", "flower6", "flower7"];

const flowersToShow = [0, 1, 3, 5, 7];
const waterBtn = document.getElementById("waterBtn");
const waterCard = document.getElementById("waterCard");

const changebtn = () => {
    growBtn.textContent = buttonLabels[stage - 1];
};

const showStage = () => {
    stageNames.forEach((name, index) => {
        if (index === stage - 1) {
            document.querySelector(`.${name}`).style.display = "block";
        }
        else {
            document.querySelector(`.${name}`).style.display = "none";
        }
    })
};

growBtn.addEventListener("click", () => {
    if (stage <= maxStage - 1) {
        stage++;
        changebtn();
        showStage();
    }

    if (stage === 5) {
        growBtn.style.cursor = "not-allowed";
        waterBtn.disabled = false;
        waterCard.classList.remove("locked");
        growBtn.disabled = true;
    }
})

const flowerShow = () => {
    flowerNames.forEach((flower, index) => {
        if (index < flowersToShow[waterClicks]) {
            document.querySelector(`.${flower}`).style.display = "block";
        }
        else {
            document.querySelector(`.${flower}`).style.display = "none";
        }
    });
};

const waterFeedback = document.getElementById("waterFeedback");
const showWaterFeedback = () => {
    waterFeedback.textContent = "💧 Watered! + 🌸";
    waterFeedback.classList.remove("show");
    void waterFeedback.offsetWidth;
    waterFeedback.classList.add("show");
    setTimeout(() => {
        waterFeedback.classList.remove("show");
    }, 1200);
};

waterBtn.addEventListener("click", () => {
    waterClicks++;
    flowerShow();
    showWaterFeedback();
    if (waterClicks === maxWaterClicks) {
        waterBtn.disabled = true;
        waterCard.classList.add("locked");
    }
    checkButterflyUnlock();
});


let isRainy = false;
const weatherBtn = document.getElementById("weatherBtn");
const clouds = document.querySelectorAll(".clouds ellipse");
const sun = document.querySelector(".sun");
const butterflyCard = document.querySelector("#butterflyCard");
const butterflyBtn = document.querySelector("#butterflyBtn");
const butterfly = document.querySelector(".butterfly-wrapper");

weatherBtn.addEventListener("click", () => {
    isRainy = !isRainy;

    if (isRainy) {
        document.body.classList.remove("weather-clear");
        document.body.classList.add("weather-rainy");
        weatherBtn.textContent = "☀️ Toggle Weather";
        sun.style.display = "none";
        clouds.forEach(cloud => cloud.setAttribute("fill", "#a6b3bb"));
    } else {
        document.body.classList.remove("weather-rainy");
        document.body.classList.add("weather-clear");
        weatherBtn.textContent = "🌧️ Toggle Weather";
        sun.style.display = "block";
        clouds.forEach(cloud => cloud.setAttribute("fill", "#ffffff"));
    }
});

const checkButterflyUnlock = () => {
    if(stage === maxStage && waterClicks === maxWaterClicks){
        butterflyBtn.disabled = false;
        butterflyCard.classList.remove("locked");
        butterflyBtn.textContent = "Add a butterfly 🦋";
    }
}

butterflyBtn.addEventListener("click" , ()=>{
    butterfly.style.display = "block";
    butterflyBtn.disabled = true;
    butterflyCard.classList.add("locked");
});

