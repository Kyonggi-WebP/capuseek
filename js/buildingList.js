document.addEventListener("DOMContentLoaded", () => {

    const BuildingList = [
        {
            id: "JinRi", //이미지 ID
            name: "진리관", //alt 내용
            description: "1강의동입니다. 대학 본부가 있으며 본관 건물이라고 불리기도 합니다. 강의실 앞자리 숫자가 1로 시작한다면 이곳에 있습니다.", //시설에 대한 설명
            tags: ["강의동", "1강의동", "대학 본부", "본관"] // 태그
        },
        {
            id: "MiRae",
            name: "미래관",
            description: "진리관과 이어진 건물입니다. 국제/평생교육원 수업이 진행되는 곳이기도 하며, 1층에 편의점이 있습니다.",
            tags: ["미래관"]
        },
        {
            id: "SeongSin",
            name: "성신관",
            description: "2강의동입니다. 강의실 앞자리 숫자가 2로 시작한다면 이곳에 있습니다.",
            tags: ["강의동", "2강의동"]
        },
        {
            id: "AeGyeong",
            name: "애경관",
            description: "3강의동입니다. 강의실 앞자리 숫자가 3으로 시작한다면 이곳에 있습니다.",
            tags: ["강의동", "3강의동"]
        },
        {
            id: "Gym",
            name: "씨름장",
            description: "2016년에 개관한 국내 최초 씨름 전용 체육관입니다. 체력단련실, 사워실 등이 갖춰져 있고 각종 씨름 대회와 관련 행사가 열리곤 합니다.",
            tags: ["씨름장"]
        },
        {
            id: "Library",
            name: "중앙도서관",
            description: "캠퍼스의 중심에 위치한 도서관입니다. 1000석이 넘는 좌석을 보유한 열람실, 1층에는 무인카페가 있고 학생들의 약속장소로 자주 쓰이는 곳입니다.",
            tags: ["중앙도서관", "열람실", "스터디"]
        },
        {
            id: "YeJi",
            name: "예지관",
            description: "4강의동입니다. 강의실 앞자리 숫자가 4로 시작한다면 이곳에 있습니다.",
            tags: ["강의동", "4강의동"]
        },
        {
            id: "DuckMoon",
            name: "덕문관",
            description: "5강의동입니다. 강의실 앞자리 숫자가 5로 시작한다면 이곳에 있습니다.",
            tags: ["강의동", "5강의동"]
        },
        {
            id: "E-Square",
            name: "E스퀘어",
            description: "4강의동 옆에 있는 건물로, 2층엔 교내 서점과 편의점, 스터디 룸이 있습니다. 건물 1층엔 카페와 식당이 있습니다.",
            tags: ["식당", "E스퀘어"]
        },
        {
            id: "GamSung",
            name: "감성코어",
            description: "중앙도서관 옆에 있는 식당입니다.",
            tags: ["식당", "감성코어"]
        },
        {
            id: "GwangGyo",
            name: "광교관",
            description: "6강의동입니다. 강의실 앞자리 숫자가 6으로 시작한다면 이곳에 있습니다.",
            tags: ["강의동", "6강의동"]
        },
        {
            id: "JibHyun",
            name: "집현관",
            description: "7강의동입니다. 강의실 앞자리 숫자가 7로 시작한다면 이곳에 있습니다.",
            tags: ["강의동", "7강의동"]
        },
        {
            id: "YukYoung",
            name: "육영관",
            description: "8강의동입니다. 강의실 앞자리 숫자가 8로 시작한다면 이곳에 있습니다.",
            tags: ["강의동", "8강의동"]
        },
        {
            id: "Engineering_Oficer_Second",
            name: "제2공학관",
            description: "8강의동 뒤편에 있는 시설입니다.",
            tags: ["제2공학관"]
        },
        {
            id: "Engineering_Practice",
            name: "공학실습동",
            description: "건축학과학생들이 주로 이용하게 될 곳입니다.",
            tags: ["실습동", "공학실습동"]
        },
        {
            id: "Research_Center",
            name: "리서치센터",
            description: "8강의동 뒷편에 있습니다.",
            tags: ["리서치센터"]
        },
        {
            id: "Sanhak",
            name: "산학협력단",
            description: "6강의동 옆에 있습니다. 창업보육센터와 산학협력팀 그리고 기업들이 입주해 있습니다.",
            tags: ["산학협력단"]
        },
        {
            id: "General_Lecture",
            name: "종합강의동",
            description: "상당 수의 교양 강의가 열리는 곳입니다. 교육대학원도 이곳에 있습니다. 1층에 카페가 있고 4층에는 휴게실이 있습니다. 종강이라고도 불리웁니다",
            tags: ["강의동", "종강"]
        },
        {
            id: "Gyosoo_Lab",
            name: "교수연구동",
            description: "도서관 뒤쪽에 위치하며 대부분의 교수연구실이 있는 곳입니다. 5층에는 PlanB라는 음식점이 있습니다.",
            tags: ["교수연구동"]
        },
        {
            id: "Student_Center",
            name: "학생회관",
            description: "각 학과 학생회실과 중앙동아리방, 신문방송사 등이 있는 곳입니다. 4층이 제 1복지관 지하 1층인 경슐랭과 연결되어 있습니다. 풋살장과 농구장도 있고 샤워실 또한 이용 가능합니다.",
            tags: ["학생회관", "동아리"]
        },
        {
            id: "Welfare_Center_First",
            name: "제1복지관",
            description: "학생회관과 함께 지어진 건물로, 장학지원팀과 인재개발처 등이 있습니다. 1층에는 신한은행, 우체국, 편의점이 있고 지하 1층에 있는 경슐랭 식당은 학생회관 건물 4층과 통로로 이어져 있습니다.",
            tags: ["제1복지관", "식당"]
        },
        {
            id: "Harmony",
            name: "어울림관",
            description: "제 1복지관 좌측에 있는 건물로, 동아리연습실이 있습니다. 1층에는 소극장이 있어 동아리 공연이 열리기도 합니다",
            tags: ["동아리", "어울림관"]
        },
        {
            id: "Museum",
            name: "박물관",
            description: "제 1복지관 우측에 있는 건물입니다. 우리나라 최초의 농경박물관으로 개관하였으며, 전국에서 민화를 가장 많이 보유하고 있습니다.",
            tags: ["박물관"]
        },
        {
            id: "Telecon",
            name: "텔레컨벤션센터",
            description: "입학식/졸업식 등 교내 주요 행사가 진행되는 곳입니다.",
            tags: ["텔레컨벤션센터", "랜드마크"]
        },
        {
            id: "Hoyun",
            name: "호연관",
            description: "9강의동입니다. 강의실 앞자리 숫자가 9로 시작한다면 이곳에 있습니다.",
            tags: ["강의동", "9강의동"]
        },
        {
            id: "Sculpture",
            name: "조각실습동",
            description: "9강의동 기준 왼쪽에 위치한 건물입니다.",
            tags: ["실습동", "조각실습동"]
        },
        {
            id: "Hongbo",
            name: "홍보관",
            description: "정문을 통과하면 좌측에 바로 보이는 건물입니다. 1층에는 오아시스 마켓이라는 푸드코트가 있습니다. 국제교류팀과 대외협력팀이 위치해있습니다.",
            tags: ["홍보관"]
        },
        {
            id: "Gisooksa",
            name: "경기드림타워",
            description: "두 개의 기숙사 중 한 곳입니다. 통상적으로 기숙사라고 하면 이곳을 가리키는 경우가 많습니다. 1층에 식당이 있습니다",
            tags: ["기숙사", "경기드림타워"]
        },
        {
            id: "Hanoori",
            name: "한우리관",
            description: "두 개의 기숙사 중 한 곳입니다. ",
            tags: ["기숙사", "한우리관"]
        },
        {
            id: "seminar",
            name: "중앙세미나실",
            description: "중앙도서관 바로 옆에 있습니다. 약 300석 규모의 강의실이 있는 독립 건물로, 세미나나 소규모 공연, 일부 수업이 진행되기도 합니다.",
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