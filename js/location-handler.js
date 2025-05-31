document.addEventListener("DOMContentLoaded", () => {
  const locationItems = document.querySelectorAll("#map .location-list li");

  locationItems.forEach(item => {
    item.addEventListener("click", () => {
      // 모든 항목에서 active 클래스 제거
      locationItems.forEach(li => li.classList.remove("active"));

      // 현재 클릭된 항목에 active 클래스 추가
      item.classList.add("active");

      // building 정보 표시 (ID는 문자열로 전달)
      showBuildingInfo(item.id);
      loadBuildingImages();
    });
  });
});
