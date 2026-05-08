console.log("CV Website Loaded");

alert("مرحباً! تم تحميل السيرة الذاتية بنجاح 👌");
function translateAll() {
    let ar = document.querySelectorAll(".ar");
    let en = document.querySelectorAll(".en");

    ar.forEach(el => {
        el.style.display = (el.style.display === "none") ? "inline" : "none";
    });

    en.forEach(el => {
        el.style.display = (el.style.display === "none") ? "inline" : "none";
    });
}
