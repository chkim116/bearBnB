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

let prevValue = 0;
let nextValue = 0;

function prevDate(text, inst) {
  const prevDay = parseInt(inst.selectedDay);
  const prevMonth = inst.selectedMonth + 1;
  const prevYear = inst.selectedYear;
  return (prevValue = prevDay + prevMonth + prevYear);
}

function nextDate(text, inst) {
  const nextDay = parseInt(inst.selectedDay);
  const nextMonth = inst.selectedMonth + 1;
  const nextYear = inst.selectedYear;
  return (nextValue = nextDay + nextMonth + nextYear);
}

function searchCheck() {
  if (searchInput.value.length === 0) {
    alert("위치는요?");
  } else if (prevValue - nextValue > 0) {
    alert("체크아웃 날짜를 확인하세요");
  } else if (prevValue - nextValue === 0) {
    alert("날짜와 인원을 체크해 주세요");
  } else if (num === 0) {
    alert("인원 수 체크해 주세요");
  } else {
    location.href = "search.html";
    hello.innerText = `${searchInput.value}`;
  }
}

const button = document.querySelector(".search__btn");
const hello = document.querySelector(".hello");
button.addEventListener("click", searchCheck);
