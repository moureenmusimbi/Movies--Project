const arrow = document.querySelectorALL(".arrow");
const movieLists = document.querySelectorALL(".movie-list");
arrow.forEach((arrow, i) => {
    arrow.addEventListener("click", () => {
        console.log("you clicked to: " + i)
    })
})