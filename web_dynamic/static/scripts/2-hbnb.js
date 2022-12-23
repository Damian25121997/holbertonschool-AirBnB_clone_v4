window.onload = function () {
    const url = "http://0.0.0.0:5001/api/v1/status/"
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const element = document.querySelector('div#api_status');
            element.classList.add('available');
        })
        .catch(error => {
            const element = document.querySelector('div#api_status');
            elemen
        })
  };
  