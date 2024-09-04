  let calcScroolValue = () => {
    let scroolProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value")
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scroolValue = Math.round((pos * 100) / calcHeight);

    if (pos > 100) {
        scroolProgress.style.display = "grid";
    } else {
        scroolProgress.style.display = "none";
    }

    scroolProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    
    scroolProgress.style.background = `conic-gradient( rgb(255,207,119) 0% ${scroolValue}%, #d7d7d7 ${scroolValue}% 100%)`;
};

window.onscroll = calcScroolValue;
window.onload = calcScroolValue;