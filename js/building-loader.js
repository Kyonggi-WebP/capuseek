function renderBuildings(list, containerId = "lecture-list") {
    const buildingElement = document.getElementById(containerId);
    if (!buildingElement) return;
    buildingElement.innerHTML = "";

    list.forEach(building => {
        const tagsHTML = building.tags.map(tag => `<span class="badge bg-secondary">${tag}</span>`).join(" ");

        buildingElement.innerHTML += `
      <div class="col-md-3 col-lg-3">
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

    setTimeout(() => {
        loadImages();
}), 50;
}

document.addEventListener("DOMContentLoaded", () => {
    renderBuildings(BuildingList);
    loadImages(); // 전체보기용 초기 이미지 로드

    const tagCategoryMap = {
        "lecture-list-all": null, // 전체
        "lecture-list-강의동": "강의동",
        "lecture-list-실습동": "실습동",
        "lecture-list-식당": "식당",
        "lecture-list-편의시설": "편의시설",
        "lecture-list-기타": "기타"
    };

    Object.entries(tagCategoryMap).forEach(([containerId, tag]) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        const filteredBuildings = tag
            ? BuildingList.filter(b => b.tags.includes(tag))
            : BuildingList;

        renderBuildings(filteredBuildings, containerId);
        loadImages();
    });

    document.querySelectorAll(".accordion-collapse").forEach(panel => {
    panel.addEventListener("shown.bs.collapse", () => {
        loadImagesIn(panel);  // 그 아코디언 영역만 이미지 로드
    });
});

});
