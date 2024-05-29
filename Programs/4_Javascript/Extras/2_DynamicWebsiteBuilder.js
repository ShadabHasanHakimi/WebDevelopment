function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  let viewNumber;
  if (views < 1000000 && views > 1000) {
    viewNumber = views / 1000 + "k";
  } else if (views >= 1000000) {
    viewNumber = views / 1000000 + "M";
  }
  else if(views < 1000){
    viewNumber = views;
  }
  let html = `<div class="card">
    <div class="thumbnail">
            <img src="${thumbnail}" alt="">
            <div class="duration">${duration}</div>
        </div>
    <div class="title">
        <h4>${title}</h4>
        <p>${cName} . ${viewNumber} views . ${monthsOld} months ago</p>
    </div>
</div>`;
  document.querySelector(".container").innerHTML = html;
}

createCard("shadab", "CodeWithHarry", 16000000, 6, "33:41", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
