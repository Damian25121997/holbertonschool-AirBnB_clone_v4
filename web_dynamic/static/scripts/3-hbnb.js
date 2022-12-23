window.onload = function () {
    const url = 'http://localhost:5001/api/v1/status/';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const element = document.querySelector('#api_status');
        if (data.status === 'OK') {
          element.classList.add('available');
        } else {
          element.classList.remove('available');
        }
      })
      .catch(error => {
        const element = document.querySelector('#api_status');
        element.classList.remove('available');
      });
    const url1 = 'http://0.0.0.0:5001/api/v1/places_search/'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    };
    fetch(url1, options)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
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
  