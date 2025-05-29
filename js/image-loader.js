document.addEventListener("DOMContentLoaded", () => {
    const baseURL = "https://raw.githubusercontent.com/Kyonggi-WebP/capuseek/img/";

    const imageList = [
        { id: "logo", file: "LogoIcon.png" },
        { id: "campus-map", file: "campus_map.jpg"},
        { id: "kyungsyul", file: "kyungsyul.png" },
        { id: "gamsung", file: "gamsung.jpg" },

    ];

    imageList.forEach(img => {
        const element = document.getElementById(img.id);
        if (element) {
            element.src = baseURL + img.file;
        }
    });
})