function Control(title = "Apple", size = "12 * 24 cm", count = "14 items") {
  return `<div style="border-color: black;border-style: solid; padding: 20px;border-radius: 10px; text-align:center;box-shadow: 2px -1px 35px -9px rgba(0,0,0,0.74);">
    <img src="https://cdn-icons-png.flaticon.com/128/15764/15764146.png" alt="Icon"/>
    <h1>${title}</h1>
    <h2>Size:</h2><label>${size}</label>
    <h2>Count:</h2><label>${count}</label>
</div>`;
}

function Control2(title = "Apple") {
  return `<h1>${title}</h1>`;
}

function example() {
  const data = [
    {
      title: "Apple",
      size: "11 * 24 cm",
      count: "19 items",
    },
    {
      title: "Lemon",
      size: "13 * 24 cm",
      count: "15 items",
    },
    {
      title: "Orange",
      size: "18 * 24 cm",
      count: "19 items",
    },
  ];
  let items = "";

  data.forEach((element) => {
    items += `${Control(element.title, element.size, element.count)}</br>`;
  });

  document.getElementById("root").innerHTML = items;
}

window.addEventListener("load", example);
