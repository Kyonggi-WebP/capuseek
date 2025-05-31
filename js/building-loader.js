function renderBuildings(list) {
  const buildingElement = document.getElementById("lecture-list");
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
}

function showBuildingInfo(id) {
  const building = BuildingList.find(building => building.id === id);
  if (!building) return;
  renderBuildings([building]);
  loadImages();
}

document.addEventListener("DOMContentLoaded", () => {
  renderBuildings(BuildingList);
  loadImages();

  document.querySelectorAll("#map .location-list li").forEach(li => {
    li.addEventListener("click", () => {
      const buildingId = li.getAttribute("id");
      showBuildingInfo(buildingId);
    });
  });
});
