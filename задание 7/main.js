document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("pop_up_back").style.display = "flex";
});

document.getElementById("close").addEventListener("click", () => {
    document.getElementById("pop_up_back").style.display = "none";
    document.getElementById("parent_id").style.filter = "none";
});

document.getElementById("profile_id").addEventListener("click", () => {
    document.getElementById("pop_up_back").style.display = "flex";
    document.getElementById("parent_id").style.filter = "blur(2px)";
});