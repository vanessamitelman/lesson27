fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    const bodyElem = document.getElementById('body');
    const title = document.createElement('h1');
    title.textContent = data.title;
    const body = document.createElement('p');
    body.textContent = data.body;
    bodyElem.appendChild(title);
    bodyElem.appendChild(body);
  })
  .catch((e) => console.log(e));
