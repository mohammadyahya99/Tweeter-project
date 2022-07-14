const render = function (posts) {
  const post = $(".container");
  $(".container").empty();

  var ctag = `<div class="creatComment">
    <input class="commentinput" type="text" />
    <button class="commentbutton">comment</button>
 </div>
 <button class="delete">delete post</button>`;

  for (let index of posts) {
    let postTag = `<div class="posts">
   <div class="title"> ${index.text}</div>
<div class="dbutton" id="${index.id}"></div>
${ctag}

    </div>`;
    post.append(postTag);
    for (let myloop of index.comments) {
      $(`#${index.id}`).append(
        `<div id="${myloop.id}"class="comments"><i class="material-icons">delete</i> <p>${myloop.text}</p> </div> `
      );
    }
  }
};
