window.addEventListener("load", function () {
  let menu = document.querySelectorAll(".nav");
  let foto = document.querySelector(".foto");
  let main = document.querySelector(".main");
  let navClick;
  const fotolib = {
    home: "images/main.jpg",
    about: "/images/about-g.jpg",
    portfolio: "images/portfolio.jpg",
    contacts: "images/contacts.jpg",
  };
  const textlib = {
    home: "txt/home.html",
    about: "txt/about.html",
    portfolio: "txt/portfolio.html",
    contacts: "txt/contacts.html",
  };

  menu.forEach((item) => {
    item.addEventListener("click", (e) => {
      navClick = e.target.textContent;
      navClass = e.target.classList[1];

      if (navClass == "home") {
        doContent(navClass);
      } else if (navClass == "about") {
        doContent(navClass);
      } else if (navClass == "portfolio") {
        doContent(navClass);
      } else if (navClass == "contacts") {
        doContent(navClass);
      } else {
        // console.log("inner error - menu.forEach");
      }
    });
    function doContent(item) {
        // console.log(eval(`fotolib.${item}`));
      item = item.toLowerCase();
      foto.innerHTML = `<img src="${eval(`fotolib.${item}`)}">`;


      fetch(eval(`textlib.${item}`)) //чтение файла
        .then((response) => response.text())
        .then((text) => (main.innerHTML = text));
    }
  });
});
