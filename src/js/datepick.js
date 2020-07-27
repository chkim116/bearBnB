$(function () {
  $(".date__pick").datepicker({
    onSelect: function (dateText, inst) {
      prevDate(dateText, inst);
    },
    changeMonth: true,
    changeYear: true,
    showMonthAfterYear: true,
    currentText: "오늘 날짜",
    changeMonth: true,
    dayNames: [
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
      "일요일",
    ],
    dayNamesMin: ["월", "화", "수", "목", "금", "토", "일"],
    monthNamesShort: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
    ],
    monthNames: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    dateFormat: "yy-mm-dd",
    minDate: "0D", //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
  });
});
$.datepicker.setDefaults({
  showOtherMonths: true, //빈 공간에 현재월의 앞뒤월의 날짜를 표시
});

$(function () {
  $(".date__pick_late").datepicker({
    onSelect: (dateText, inst) => {
      nextDate(dateText, inst);
    },
    changeMonth: true,
    changeYear: true,
    showMonthAfterYear: true,
    currentText: "오늘 날짜",
    changeMonth: true,
    dayNames: [
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
      "일요일",
    ],
    dayNamesMin: ["월", "화", "수", "목", "금", "토", "일"],
    monthNamesShort: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
    ],
    monthNames: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    dateFormat: "yy-mm-dd",
    minDate: "0D", //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
  });
});

// 서치바에 값이 다 들어와야 검색이 가능하게 만듦

let prevDay = 0;
let prevMonth = 0;
let prevYear = 0;
let nextDay = 0;
let nextMonth = 0;
let nextYear = 0;

function prevDate(text, inst) {
  return (
    (prevDay = parseInt(inst.selectedDay)),
    (prevMonth = inst.selectedMonth),
    (prevYear = inst.selectedYear)
  );
}
function nextDate(text, inst) {
  return (
    (nextDay = parseInt(inst.selectedDay)),
    (nextMonth = inst.selectedMonth),
    (nextYear = inst.selectedYear)
  );
}
// 변수값에 할당해 날짜 차이를 비교

function searchCheck() {
  if (searchInput.value.length === 0) {
    alert("위치는요?");
  } else if (prevYear > nextYear || prevMonth > nextDay || prevDay > nextDay) {
    alert("체크아웃 날짜를 확인하세요");
  } else if (num === 0) {
    alert("인원 수 체크해 주세요");
  } else {
    location.href = "/pages/search.html";
  }
}

const button = document.querySelector(".search__btn");
button.addEventListener("click", searchCheck);
