const imageList = [
        { id: "logo", file: "LogoIcon.png" },
        { id: "campus-map", file: "campus_map.jpg"},
        { id: "JinRi", file: "B1-JinRi.jpg" },
        { id: "MiRae", file: "B2-future.jpg" },
        { id: "Cook", file: "dummy.png" },
        { id: "SeongSin", file: "B4-SeongSin.jpg" },
        { id: "AeGyeong", file: "B5-AeGyeong.jpg" },
        { id: "Gym", file: "B6-Gym.jpg" },
        { id: "Library", file: "B7-Library.jpg" },
        { id: "YeJi", file: "B8-YeJi.jpg" },
        { id: "DuckMoon", file: "B9-DuckMoon.jpg" },
        { id: "E-Square", file: "B10-E-Square.jpg" },
        { id: "GamSung", file: "B11-Gamsung.jpg" },
        { id: "GwangGyo", file: "B12-GwangGyo.jpg" },
        { id: "JibHyun", file: "B13-JibHyun.jpg" },
        { id: "YukYoung", file: "B14-YukYoung.jpg" },
        { id: "Engineering_Oficer_Second", file: "B15-Engineering_Oficer_Second.jpg" },
        { id: "Engineering_Practice", file: "B16-Engineering_Practice.jpg" },
        { id: "Research_Center", file: "B17-Research_Center.jpg" },
        { id: "Sanhak", file: "B18-Sanhak.jpg" },
        { id: "General_Lecture", file: "B19-General_Lecture.jpg" },
        { id: "Gyosoo_Lab", file: "B20-Gyosoo_Lab.jpg" },
        { id: "Student_Center", file: "B21-Student_Center.jpg" },
        { id: "Welfare_Center_First", file: "B22-Welfare_Center_First.jpg" },
        { id: "Harmony", file: "B23-Harmony.jpg" },
        { id: "Museum", file: "B24-Museum.jpg" },
        { id: "Telecon", file: "B25-Telecon.jpg" },
        { id: "Hoyun", file: "B26-Hoyun.jpg" },
        { id: "Sculpture", file: "B27-Sculpture.jpg" },
        { id: "Wood", file: "dummy.png" }, 
        { id: "Hongbo", file: "B29-Hongbo.jpg" },
        { id: "Gisooksa", file: "B30-Gisooksa.jpg" },
        { id: "Hanoori", file: "B31-Hanoori.jpg" },
        { id: "MainGate", file: "dummy.png" },
        { id: "SubGate", file: "dummy.png" },
        { id: "seminar", file: "B34-seminar.jpg" },
        { id: "kyungsyul", file: "kyungsyul.png" },
        { id: "gamsung", file: "gamsung.jpg" },
        { id: "esquare", file: "esquare.png" }
    ];

function loadImages() {
    const baseURL = "https://raw.githubusercontent.com/Kyonggi-WebP/capuseek/img/";

    imageList.forEach(img => {
        const element = document.getElementById(img.id);
        if (element) {
            element.src = baseURL + img.file;
        }
    });
}

function loadImagesIn(container) {
    const baseURL = "https://raw.githubusercontent.com/Kyonggi-WebP/capuseek/img/";

    imageList.forEach(img => {
        const element = container.querySelector(`img#${img.id}`);
        if (element) {
            element.src = baseURL + img.file;
        }
    });
}


document.addEventListener("DOMContentLoaded", () => {
  const collapses = document.querySelectorAll('.accordion-collapse');

  collapses.forEach(collapse => {
    collapse.addEventListener('shown.bs.collapse', () => {
      // DOM 렌더링이 끝난 다음 이미지 로드 실행 (약간의 지연)
      setTimeout(() => {
        loadImages();
      }, 10);  // 10ms 정도면 충분
    });
  });
});