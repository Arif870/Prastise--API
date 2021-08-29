let loadCommentsData = () => {
  let url = `https://jsonplaceholder.typicode.com/comments`;
  fetch(url)
    .then(response => response.json())
    .then(data => loadComments(data));
};

document.getElementById("comment-button").addEventListener("click", () => {
  loadCommentsData();
});
loadCommentsData();
let loadComments = comments => {
  let commentDiv = document.getElementById("comments");
  comments.forEach(comment => {
    console.log(comment.body);
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    p.innerText = comment.body;
    h2.innerText = comment.name;
    div.appendChild(h2);
    div.appendChild(p);
    commentDiv.appendChild(div);
  });
};
