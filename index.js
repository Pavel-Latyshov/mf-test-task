// focus safari/firefox fix
(function () {
  var buttons = document.querySelectorAll("button");
  for (var i = 0; i <= buttons.length - 1; i++) {
    (function (index) {
      var button = buttons[index];
      button.addEventListener("click", function () {
        button.focus();
      });
    })(i);
  }
})();

//  SHOW/HIDE TEXT
const showButton = document.querySelector(".toggle_show");
const showText = document.querySelector(".toggle_show_text");
const showContent = document.querySelector(".toggle_content");
const arrow = document.querySelector(".down_arrow");

let showTextFlag = true;

const showFunc = () => {
  if (showTextFlag) {
    showText.innerHTML = "Скрыть";
    arrow.classList.add("rotate_arrow");
    showContent.innerHTML =
      "Облигации федерального, субфедерального займа, еврооблигации и облигации самых известных компаний России. Изучайте стоимость облигаций и ее изменение, доходность, купонные выплаты и многие другие показатели. Чтобы узнать больше про облигации и инвестирование в ценные бумаги, посетите наш <a href='#' >образовательный раздел</a> с множеством полезной информации.";
    return (showTextFlag = !showTextFlag);
  }
  showText.innerHTML = "Показать весь";
  arrow.classList.remove("rotate_arrow");
  showContent.innerHTML =
    "Облигации федерального, субфедерального займа, еврооблигации и облигации самых известных компаний...";
  showTextFlag = !showTextFlag;
};

showButton.addEventListener("click", showFunc);

// INPUT
const searchInput = document.querySelector(".search_wrapper");
const inputField = document.querySelector(".header_wrapper__input");
const inputCross = document.querySelector(".search_cross");

searchInput.addEventListener("focusin", (e) => {
  const enteringParent = !searchInput.contains(e.relatedTarget);

  if (enteringParent) {
    inputCross.classList.remove("hide");
  }
});

searchInput.addEventListener("focusout", (e) => {
  const leavingParent = !searchInput.contains(e.relatedTarget);

  if (leavingParent) {
    inputCross.classList.add("hide");
  }
});

const inputCrossHandler = () => {
  inputCross.classList.add("hide");
  inputField.value = "";
};

const searchInputHandler = () => {
  inputCross.classList.remove("hide");
};

inputCross.addEventListener("click", inputCrossHandler);
inputField.addEventListener("click", searchInputHandler);

$("select").selectric({});

// BUTTONS

const leadButton = document.getElementById("lead");
const tabButton = document.getElementById("tab");

const leadButtonHandler = () => {
  tabButton.classList.contains("active") &&
    tabButton.classList.remove("active");
  return leadButton.classList.add("active");
};
const tabButtonHandler = () => {
  leadButton.classList.contains("active") &&
    leadButton.classList.remove("active");

  return tabButton.classList.add("active");
};

leadButton.addEventListener("click", leadButtonHandler);
tabButton.addEventListener("click", tabButtonHandler);
