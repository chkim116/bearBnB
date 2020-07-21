const aside = document.querySelector("#aside");
const searchLocation = document.querySelector(".search");
const searchBox = document.querySelector(".search-box-location");
const searchInput = searchBox.querySelector("input");



const searchHeight = searchLocation.getBoundingClientRect().height;
const asideHeight = aside.getBoundingClientRect().height;
const headerHegihts = headerHegiht(asideHeight, searchHeight);

function headerHegiht (a, b) {
    return a + b
}

function scrollLocation() {
    if (window.scrollY < headerHegihts) {
        searchLocation.classList.remove("search-fixed");
    } else {
        searchLocation.classList.add("search-fixed");
    }
}

document.addEventListener("scroll", scrollLocation);

// 변해야 하는 조건값은 변수로 지정하지 말것.
// 높이 값은 특히 그렇다.


// delbtn X 추가

const searchForm = document.querySelector(".search__form");
const delBtn = searchForm.querySelector("span");


function delInput() {
    searchInput.value = "";
}

const view = "768";
const span = document.createElement("span");
span.innerText = "X";

function spanDel() {
    
    if (Number(view) > window.innerWidth) {
        searchForm.appendChild(span);
    } else { 
        searchForm.removeChild(span);
    }
}

window.addEventListener("resize", spanDel)

// form에 제출하면 alert 알림창 보여주기
function handleSubmit (event) {
    event.preventDefault();
    alert(searchInput.value);
    searchInput.value = "";
}

searchForm.addEventListener("submit", handleSubmit);



