let showStats = false;

document.querySelector(".stats").addEventListener("click", () => {
    if (!showStats) {
        document.querySelector(".rs-base").classList.add("showStats")
        showStats = true;
    } else if (showStats) {
        document.querySelector(".rs-base").classList.remove("showStats")
        showStats = false;
    }
});