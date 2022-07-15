
fetch('https://my-json-server.typicode.com/dupontdenis/myJsonServer/posts')
  .then(response => response.json())
  .then(json => {
    let myList = document.querySelector('ul');
    myList.innerHTML = `${json.map(p => `<li> ${p.title} </li>`).join('')}`;
  })