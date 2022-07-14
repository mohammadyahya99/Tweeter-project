const render = function (posts) {
  const post = $(".container");
  $(".container").empty();

  var ctag = `<div class="creatComment">
    <input type="text" />
    <button>comment</button>
 </div>
 <button class="delete">delete post</button>`;

  for (let index of posts) {
    let postTag = `<div class="posts">
<div id="${index.id}">${index.text}</div>
${ctag}

    </div>`;
    post.append(postTag);
    for (let myloop of index.comments) {
      $(`#${index.id}`).append(
        `<div class="comments"> <p>${myloop.text}</p> </div> `
      );
    }
  }
};
