window.onload = function () {
  const checkbox = document.querySelector('#sad');
  const listofchilds = checkbox.children;
  const title = document.querySelector('.amenities h4');
  const list_checked = [];
  for (const x of listofchilds) {
    const input = x.firstElementChild;
    input.addEventListener('change', function () {
      if (input.checked) {
        list_checked.push(input.getAttribute('data-name'));
      } else {
        const index = list_checked.indexOf(input.getAttribute('data-name'));
        list_checked.splice(index, 1);
      }
      let string = '';
      let count = 0;
      for (const i of list_checked) {
        if (count === list_checked.length - 1) {
          string += i;
        } else {
          string += i + ', ';
        }
        count += 1;
      }
      if (string.length >= 27) {
        string = string.substring(0, 27) + '...';
      }
      title.textContent = string;
    });
  }
};
