document
  .querySelector(".upload-img .link")
  .addEventListener("input", function () {
    document.querySelector(".img-demo img").src =
      document.querySelector(".upload-img .link").value;
  });
document
  .querySelector(".upload-img .file")
  .addEventListener("change", function (e) {
    var output = document.querySelector(".upload-img .img-demo img");
    output.src = URL.createObjectURL(e.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };
  });
document.querySelector(".all-tag .link").addEventListener("input", function () {
  document.querySelector(".all-tag .img-demo img").src =
    document.querySelector(".all-tag .link").value;
});
document
  .querySelector(".all-tag .file")
  .addEventListener("change", function (e) {
    var output = document.querySelector(".all-tag .img-demo img");
    output.src = URL.createObjectURL(e.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };
  });

// "https://api.openweathermap.org/data/2.5/weather?lat=22&lon=103&appid=3d4536c55fefa30aa5c6b8e247de03b3",

document.querySelector(".upload-img").addEventListener("submit", function (e) {
  var img = document.querySelector(".upload-img .img-demo img");
  img.onerror = function () {
    img.src = "error.png";
  };
  console.log("🚀 ~ file: admin.js ~ line 36 ~ img.src", img.src);
  var path = img.src;
  if (path.match("error.png")) {
    e.preventDefault();
    alert("Hình ảnh lỗi không thể upload");
  }
});
document.querySelector(".all-tag").addEventListener("submit", function (e) {
  var img = document.querySelector(".all-tag .img-demo img");
  img.onerror = function () {
    img.src = "error.png";
  };
  console.log("🚀 ~ file: admin.js ~ line 36 ~ img.src", img.src);
  var path = img.src;
  if (path.match("error.png")) {
    e.preventDefault();
    alert("Hình ảnh lỗi không thể thêm thẻ");
  }
  var name = document.querySelector(".all-tag .full-name").value;
  var description = document.querySelector(".all-tag .description").value;
  // if (name.length <= 0 && description.length <= 0) {
  //   e.preventDefault();
  //   alert("Hình ảnh lỗi không thể thêm thẻ");
  // }
});
