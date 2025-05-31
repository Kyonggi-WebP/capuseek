document.addEventListener("DOMContentLoaded", function () {
    // 공부장소 필터링
    const filterButtons = document.querySelectorAll(".image-card");
    const allCards = document.querySelectorAll("#study .card.mb-3");
    const tagButtons = document.querySelectorAll(".tag-btn");


    // 장소 필터 버튼
    function showCardsByTarget(target) {
        allCards.forEach(card => {
            const category = card.dataset.category;
            const shouldShow = target === "all" || category === target;

            card.hidden = !shouldShow;
            if (shouldShow) {
                card.classList.remove("fade-in-up");
                void card.offsetWidth;
                card.classList.add("fade-in-up");
            }
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener("click", e => {
            e.preventDefault();
            showCardsByTarget(button.dataset.target);
        });
    });

    // 해시태그 필터 버튼
    tagButtons.forEach(tagBtn => {
        tagBtn.addEventListener("click", () => {
            const selectedTag = tagBtn.getAttribute("data-tag");

            // 버튼 활성화 상태 스타일 처리
            tagButtons.forEach(btn => btn.classList.remove("active"));
            tagBtn.classList.add("active");

            allCards.forEach(card => {
                const smallText = card.querySelector("small");
                const hashtags = smallText?.innerText || "";

                const shouldShow = hashtags.includes(selectedTag);

                if (shouldShow) {
                    card.removeAttribute("hidden");
                } else {
                    card.setAttribute("hidden", "true");
                }

                if (shouldShow) {
                    card.classList.remove("fade-in-up");
                    void card.offsetWidth;
                    card.classList.add("fade-in-up");
                }
            });
        });
    });
});