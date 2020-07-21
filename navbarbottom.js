const navbarBottom = document.querySelector(".navbar__bottom");

function scrollNavbar() {
    let scrollH = document.documentElement.scrollTop;  // 현재 스크롤바 위치
    let windowHeight = window.innerHeight; // 스크린 창
    let fullHeight = document.body.scrollHeight; // margin 값 제외 총 높이
    if(scrollH + windowHeight >= fullHeight) {   // 스크롤바와 스크린창의 높이가, 총 높이와 같거나 크면
        navbarBottom.style.display = "none"; // 넷바바텀 논.
    } else {
        navbarBottom.style.display = "flex"

    }
}
window.addEventListener('scroll', scrollNavbar);

// 넷바바텀, 맨 밑까지 떨어지면 사라지게 하기
// scrollTop/navbarbottom의 크기를 빼면 된다.