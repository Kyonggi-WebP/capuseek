function renderMapBuildingInfo(buildingId) {
    const building = BuildingList.find(b => b.id === buildingId);
    if (!building) return;

    const tagsHTML = building.tags.map(tag => `<span class="badge bg-secondary me-1">${tag}</span>`).join(" ");

    const html = `
      <div class="card mt-3 map-card">
        <div class="card-body">
          <h5 class="card-title">${building.name}</h5>
          <p class="card-text">${building.description}</p>
          <div class="tags">${tagsHTML}</div>
        </div>
        <img id="map-${building.id}" class="map-img-right" alt="${building.name}">
      </div>
    `;

    const container = document.getElementById("map-building-info");
    container.innerHTML = html;

    // 이미지 로딩
    const imgElement = document.getElementById(`map-${building.id}`);
    const imgData = imageList.find(img => img.id === building.id);
    if (imgElement && imgData) {
        imgElement.src = `https://raw.githubusercontent.com/Kyonggi-WebP/capuseek/img/${imgData.file}`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const locationItems = document.querySelectorAll("#map .location-list li");

    locationItems.forEach(item => {
        item.addEventListener("click", () => {
            // 모든 항목에서 active 클래스 제거
            locationItems.forEach(li => li.classList.remove("active"));

            // 현재 클릭된 항목에 active 클래스 추가
            item.classList.add("active");

            // map 하단에 해당 건물 정보 출력
            const buildingId = item.getAttribute("onclick").match(/'([^']+)'/)[1];
            renderMapBuildingInfo(buildingId);
        });
    });
});
