const likeBtns = document.querySelectorAll("button[id^='like']");
const likeCounts = document.querySelectorAll("span[id^='like-count']");

likeBtns.forEach((btn, index) => {
    let count = parseInt(likeCounts[index].textContent);

    btn.addEventListener("click", () => {
        count++;
        likeCounts[index].textContent = count;
    });
});