document.getElementById('highlight-button').addEventListener('click', function() {
    var dateInput = document.getElementById('input-date').value;
    var colorInput = document.getElementById('input-color').value;
    // var selectedDate = dateInput.value;
    // var color = colorInput.value;

    console.log(dateInput);
    console.log(colorInput);
  
    var dateElements = document.getElementsByClassName('calendar-day');
    console.log(dateElements);
    for (var i = 0; i < dateElements.length; i++) {
      var dateElement = dateElements[i];
      if (dateElement.textContent === dateInput) {
        dateElement.style.backgroundColor = colorInput;
      }
    }

   
    // console.log(color);
  
    // dateInput.value = '';
    // colorInput.value = '';
});
  
document.getElementById('clear-button').addEventListener('click', function() {
    var dateElements = document.getElementsByClassName('calendar-day');
    for (var i = 0; i < dateElements.length; i++) {
      var dateElement = dateElements[i];
      dateElement.style.backgroundColor = '';
    }
    // console.log(dateElements);
});