// avaliation
var liked = document.getElementById("liked");
var unliked = document.getElementById("unliked");

liked.addEventListener("click", likeClicked);
unliked.addEventListener("click", unlikeClicked);

function likeClicked() {
    alert("Você gostou!");
}

function unlikeClicked() {
    alert("Você não gostou!");
}

// article url
function openLink(url) {
    window.location.href = url;
}