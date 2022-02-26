function init() {
    let value = 0;
  
    const buttonPlus = document.querySelector(".js-plus");
    const buttonMinus = document.querySelector(".js-minus");
    const valueEl = document.querySelector(".js-value");
    // const diffEl = document.querySelector(".js-diff");
  
    function plusClick() {
        if (value >= 10) {
          valueEl.innerText = 10
        } else {
          value = value + 1
          valueEl.innerText = value
        }
    }

    function minusClick() {
      if (value <= 0) {
        valueEl.innerText = 0
      } else {
      value = value - 1
      valueEl.innerText = value;
      }
    }
  
    buttonPlus.onclick = plusClick;
    buttonMinus.onclick = minusClick;
  }
  
  window.onload = init;