// todo: nav header should be fixed when scroll down
document.addEventListener("scroll", checkScroll);
checkScroll();
function checkScroll() {
  var a = document.querySelector(".header .header-container");
  var h = a.clientHeight - 50;
  if (window.scrollY >= h) {
    if (!a.classList.contains("header-container-2"))
      a.classList.add("header-container-2");
  } else a.classList.remove("header-container-2");
}
document.addEventListener("mousewheel", function (event) {
  var a = document.querySelector(".header .header-container");
  var b = document.querySelector(
    ".header .header-container .header-container__nav .header-container__nav-inner"
  );
  var h = a.clientHeight + 200;
  if (a.classList.contains("header-container-2")) {
    if (event.wheelDelta < 0) {
      if (window.scrollY >= h) b.classList.add("scroll-down");
      else b.classList.remove("scroll-down");
    } else {
      b.classList.remove("scroll-down");
    }
  }
});

// todo: form login
if (document.querySelector(".header .header-container .avt .fa-circle-user"))
  document
    .querySelector(".header .header-container .avt .fa-circle-user")
    .addEventListener("click", function () {
      document.querySelector(".login").style.display = "block";
    });
document.querySelector(".login").addEventListener("click", function (e) {
  if (e.target.classList.contains("close-form"))
    document.querySelector(".login").style.display = "none";
});

if (document.querySelector(".header .header-container .avt-img"))
  document
    .querySelector(".header .header-container .avt-img")
    .addEventListener("click", function () {
      if (document.querySelector(".avt .info").style.display != "block")
        document.querySelector(".avt .info").style.display = "block";
      else document.querySelector(".avt .info").style.display = "none";
    });
if (document.querySelector(".header .avt .info"))
  document
    .querySelector(".header .avt .info")
    .addEventListener("mouseleave", function () {
      document.querySelector(".avt .info").style.display = "none";
    });
if (document.querySelector(".after-login-form .create-account--btn"))
  document
    .querySelector(".after-login-form .create-account--btn")
    .addEventListener("click", function (e) {
      returnForm("register");
    });
if (document.querySelector(".after-login-form .login--btn"))
  document
    .querySelector(".after-login-form .login--btn")
    .addEventListener("click", function (e) {
      returnForm("login");
    });
if (document.querySelector(".after-login-form .forgot-password--btn"))
  document
    .querySelector(".after-login-form .forgot-password--btn")
    .addEventListener("click", function (e) {
      returnForm("resetPassword");
    });
function returnForm(type) {
  console.log(this.event);
  var heading = document.querySelector(".login .login-block .heading");
  var loginForm = document.querySelector(".login .login-block .login-form");
  var registerForm = document.querySelector(
    ".login .login-block .register-form"
  );
  var resetPasswordForm = document.querySelector(
    ".login .login-block .resetPassword-form"
  );
  registerForm.style.display = "none";
  loginForm.style.display = "none";
  resetPasswordForm.style.display = "none";
  if (type == "register") {
    registerForm.style.display = "block";
    heading.innerHTML = "Create a new account";
    document.querySelector(
      ".after-login-form .create-account--btn"
    ).style.display = "none";
    document.querySelector(".after-login-form .login--btn").style.display =
      "inline";
  } else if (type == "resetPassword") {
    resetPasswordForm.style.display = "block";
    heading.innerHTML = "Reset your password";
  } else if (type == "login") {
    loginForm.style.display = "block";
    heading.innerHTML = "Login";
    document.querySelector(".after-login-form .login--btn").style.display =
      "none";
    document.querySelector(
      ".after-login-form .create-account--btn"
    ).style.display = "inline";
  }
}
//Todo: slider
//todo

if (document.querySelector(".slider")) {
  var img = document.querySelectorAll(".slider .slider-img img");
  var btn = document.querySelector(".slider .slider-button");
  var slider = document.querySelector(".slider-img");
  for (var i = 1; i < img.length; i++) {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("onclick", "clickButtonSlide(" + i + ")");
    btn.appendChild(newDiv);
  }
  var count = 1;
  var width = document.querySelector(".slider").clientWidth;
  setInterval(() => {
    var img = document.querySelectorAll(".slider .slider-img img");
    nextSlide(count);
    count++;
    if (count > img.length - 1) count = 0;
  }, 10000);
  function nextSlide(count) {
    slider.style.transform = `translateX(-${100 * count}%)`;
    var btnClass = document.querySelectorAll(".slider .slider-button div");
    for (var i = 0; i < btnClass.length; i++) {
      btnClass[i].classList.remove("active");
    }
    btnClass[count % btnClass.length].classList.add("active");
  }
  function clickButtonSlide(tmp) {
    count = tmp;
    nextSlide(count);
  }
}
//todo: tags
if (document.querySelector(".tags-container .tags-element .tags-grid")) {
  var pos = document.querySelector(".tags-container .tags-element .tags-grid");
  var element = document.querySelector(
    ".tags-container .tags-element .tags-grid div"
  );
  var next = document.querySelector(".tags-container .next");
  var prev = document.querySelector(".tags-container .prev");
  if (element.clientWidth > pos.clientWidth) {
    next.classList.add("active");
  }
  pos.addEventListener("scroll", scrollTag);

  function scrollTag() {
    let x = pos.scrollLeft;
    if (x >= 10) prev.classList.add("active");
    else prev.classList.remove("active");
    if (x >= element.clientWidth - pos.clientWidth - 10)
      next.classList.remove("active");
    else next.classList.add("active");
  }
  next.addEventListener("click", () => {
    pos.scrollLeft += pos.clientWidth;
  });
  prev.addEventListener("click", () => {
    pos.scrollLeft -= pos.clientWidth;
  });
}
// todo: error image loading
if (document.querySelector("img")) {
  var img = document.querySelectorAll("img");
  img.forEach(function (img) {
    img.addEventListener("error", () => {
      img.src = "./src/images/error.jpg";
    });
  });
}

//todo: nav-bar
if (document.querySelector(".nav--icon")) {
  document.querySelector(".nav--icon").addEventListener("click", () => {
    if (document.querySelector(".nav-bar"))
      document.querySelector(".nav-bar").classList.add("active");
  });
}
if (document.querySelector(".close--icon")) {
  document.querySelector(".close--icon").addEventListener("click", () => {
    if (document.querySelector(".nav-bar"))
      document.querySelector(".nav-bar").classList.remove("active");
  });
}

// todo: form search
if (document.querySelector(".search")) {
  var a = document.querySelectorAll(".search form");
  var b = document.querySelectorAll(".search form input[type=search]");
  a[0].firstElementChild;
  a.forEach(function (el) {
    el.addEventListener("submit", (e) => {
      var s = e.target.firstElementChild;
      var q = s.value;
      if (!q.match(/[a-zA-Z0-9]/g)) e.preventDefault();
    });
  });
}
// todo: search--btn
if (document.querySelector(".header .end .search--icon")) {
  var icon = document.querySelector(".header .end .search--icon");
  icon.addEventListener("click", () => {
    var center = document.querySelector(
      ".header .header-container__nav-inner .center"
    );
    if (center.classList.contains("search-active"))
      center.classList.remove("search-active");
    else center.classList.add("search-active");
  });
  document
    .querySelector(
      ".header .header-container__nav-inner .center__search i.close--btn"
    )
    .addEventListener("click", () => {
      document
        .querySelector(".header .header-container__nav-inner .center")
        .classList.remove("search-active");
    });
}

//full img
if (document.querySelector(".img-view__main img")) {
  document
    .querySelector(".img-view__main img")
    .addEventListener("click", (e) => {
      var win = window.open(e.target.src);
    });
}
