document.addEventListener("DOMContentLoaded", () => {

const BuildingList = [
    {
        id: "JinRi", //이미지 ID
        name: "진리관", //alt 내용
        description: "시설 설명", //시설에 대한 설명
        tags: ["강의동", "진리관"] // 태그
    },
    {
        id: "MiRae",
        name: "미래관",
        description: "시설 설명",
        tags: ["강의동", "미래관"]
    },
    {
        id: "SeongSin",
        name: "성신관",
        description: "시설 설명",
        tags: ["강의동", "성신관"]
    },
    {
        id: "AeGyeong",
        name: "애경관",
        description: "시설 설명",
        tags: ["강의동", "애경관"]
    },
    {
        id: "Gym",
        name: "체육관",
        description: "시설 설명",
        tags: ["체육관"]
    },
    {
        id: "Library",
        name: "중앙도서관",
        description: "시설 설명",
        tags: ["중앙도서관"]
    },
    {
        id: "YeJi",
        name: "예지관",
        description: "시설 설명",
        tags: ["강의동", "예지관"]
    },
    {
        id: "DuckMoon",
        name: "덕문관",
        description: "시설 설명",
        tags: ["강의동", "덕문관"]
    },
    {
        id: "E-Square",
        name: "E스퀘어",
        description: "시설 설명",
        tags: ["식당", "E스퀘어"]
    },
    {
        id: "GamSung",
        name: "감성코어",
        description: "시설 설명",
        tags: ["식당", "감성코어"]
    },
    {
        id: "GwangGyo",
        name: "광교관",
        description: "시설 설명",
        tags: ["강의동", "광교관"]
    },
    {
        id: "JibHyun",
        name: "집현관",
        description: "시설 설명",
        tags: ["강의동", "집현관"]
    },
    {
        id: "YukYoung",
        name: "육영관",
        description: "시설 설명",
        tags: ["강의동", "육영관"]
    },
    {
        id: "Engineering_Oficer_Second",
        name: "제2공학관",
        description: "시설 설명",
        tags: ["제2공학관"]
    },
    {
        id: "Engineering_Practice",
        name: "공학실습동",
        description: "시설 설명",
        tags: ["공학실습동"]
    },
    {
        id: "Research_Center",
        name: "리서치센터",
        description: "시설 설명",
        tags: ["리서치센터"]
    },
    {
        id: "Sanhak",
        name: "산학협력단",
        description: "시설 설명",
        tags: ["산학협력단"]
    },
    {
        id: "General_Lecture",
        name: "종합강의동",
        description: "시설 설명",
        tags: ["강의동", "종합강의동"]
    },
    {
        id: "Gyosoo_Lab",
        name: "교수연구동",
        description: "시설 설명",
        tags: ["교수연구동"]
    },
    {
        id: "Student_Center",
        name: "학생회관",
        description: "시설 설명",
        tags: ["학생회관"]
    },
    {
        id: "Welfare_Center_First",
        name: "제1복지관",
        description: "시설 설명",
        tags: ["제1복지관"]
    },
    {
        id: "Harmony",
        name: "어울림관",
        description: "시설 설명",
        tags: ["어울림관"]
    },
    {
        id: "Museum",
        name: "박물관",
        description: "시설 설명",
        tags: ["박물관"]
    },
    {
        id: "Telecon",
        name: "텔레컨벤션센터",
        description: "시설 설명",
        tags: ["텔레컨벤션센터"]
    },
    {
        id: "Hoyun",
        name: "호연관",
        description: "시설 설명",
        tags: ["강의동", "호연관"]
    },
    {
        id: "Sculpture",
        name: "조각실습동",
        description: "시설 설명",
        tags: ["조각실습동"]
    },
    {
        id: "Hongbo",
        name: "홍보관",
        description: "시설 설명",
        tags: ["홍보관"]
    },
    {
        id: "Gisooksa",
        name: "기숙사",
        description: "시설 설명",
        tags: ["경기드림타워", "기숙사"]
    },
    {
        id: "Hanoori",
        name: "한우리관",
        description: "시설 설명",
        tags: ["한우리관"]
    },
    {
        id: "seminar",
        name: "중앙세미나실",
        description: "시설 설명",
        tags: ["중앙세미나실"]
    },
];
const buildingElement = document.getElementById("lecture-list");

BuildingList.forEach(building => {
  const tagsHTML = building.tags.map(tag => `<span class="badge bg-secondary">${tag}</span>`).join(" ");
  buildingElement.innerHTML += `
    <div class="col-md-6 col-lg-4">
      <div class="card lecture-card h-100">
        <img id="${building.id}" alt="${building.name}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${building.name}</h5>
          <p class="card-text">${building.description}</p>
          <div class="tags">${tagsHTML}</div>
        </div>
      </div>
    </div>
  `;
});

})