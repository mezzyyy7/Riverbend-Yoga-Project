const yogaClasses = [
    {
        name: "Gentle Yoga",
        level: "beginner",
        goal: "relaxation",
        description: "A slower-paced class focused on flexibility, breathing, balance, and comfort."
    },
    {
        name: "Vinyasa Flow",
        level: "intermediate",
        goal: "energy",
        description: "A more active class that connects movement with breathing through flowing sequences."
    },
    {
        name: "Restorative Yoga",
        level: "all",
        goal: "stress",
        description: "A calming class that uses supported poses and longer holds to encourage relaxation."
    }
];

const classGoals = {
    relaxation: "Gentle Yoga",
    energy: "Vinyasa Flow",
    stress: "Restorative Yoga"
};

function recommendClass() {
    const goalSelect = document.getElementById("yoga-goal");
    const result = document.getElementById("class-result");

    if (!goalSelect || !result) {
        return;
    }

    const selectedGoal = goalSelect.value;

    if (!selectedGoal) {
        result.textContent = "Please choose a goal first.";
        return;
    }

    const recommendedName = classGoals[selectedGoal];
    const recommendedClass = yogaClasses.find(
        yogaClass => yogaClass.name === recommendedName
    );

    result.innerHTML = `
        <h3>${recommendedClass.name}</h3>
        <p>${recommendedClass.description}</p>
    `;

    localStorage.setItem("riverbendYogaGoal", selectedGoal);
}

function loadSavedGoal() {
    const savedGoal = localStorage.getItem("riverbendYogaGoal");
    const goalSelect = document.getElementById("yoga-goal");

    if (savedGoal && goalSelect) {
        goalSelect.value = savedGoal;
        recommendClass();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const recommendButton = document.getElementById("recommend-button");

    if (recommendButton) {
        recommendButton.addEventListener("click", recommendClass);
    }

    loadSavedGoal();
});