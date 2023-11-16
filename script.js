function changeFlag() {
  var select = document.getElementById("country");
  var selectedFlag = document.getElementById("selected-flag");
  var selectedOption = select.options[select.selectedIndex];
  var flag = selectedOption.getAttribute("data-flag");
  selectedFlag.textContent = flag;
}
