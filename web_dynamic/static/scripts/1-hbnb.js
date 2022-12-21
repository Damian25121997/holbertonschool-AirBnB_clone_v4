window.onload = function () {
  const checkbox = document.querySelector('#checkbox');
  checkbox.addEventListener('change', function () {
    let list_checked = [];
    if (checkbox.checked) {
      list_checked.appendChild(amenities.id);
    } else if (!checkbox.checked) {
      list_checked.removeChild(amenities.id);
    }
  });
  }
  console.log(checkbox);