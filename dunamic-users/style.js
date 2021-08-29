let loadUsers = () => {
  fetch("https://randomuser.me/api/?results=10")
    .then(response => response.json())
    .then(data => allData(data.results));
};
loadUsers();

let allData = data => {
  console.log(data);
  let row = document.getElementById("row");
  for (let user of data) {
    let largePicture = user.picture.large;

    let div = document.createElement("div");
    div.innerHTML = `<div class="col-md-4">
            <img src="${largePicture}" class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${user.name.title} ${user.name.first}${user.name.last}</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>`;
    row.appendChild(div);
  }
};
