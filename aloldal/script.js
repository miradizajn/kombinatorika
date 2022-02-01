$("#perm-select").on("change", function () {
  var val = $("#perm-select").val();
  console.log(val);
  switch (val) {
    case "1":
      $("#ismetleses").hide(200);
      $("#ism-nelkuli").show(200);
      console.log("show");
      break;
    case "2":
      $("#ism-nelkuli").hide(200);
      $("#ismetleses").show(200);
      console.log("hide");
      break;
  }
});

$("#ismnelkuli-form").on("submit", function (e) {
    e.preventDefault();
  calcIsmNelkuli();
});

function calcIsmNelkuli() {
  var val = $("#perm-select").val();
  var n = $("#n-count").val();
  if (val == 1) {
    $("#out").text(`${n}! = ${factorial(n)}`);
    $("#out-long").text(`${factorial(n)} féle képpen rendezhető sorba.`);
  }
}

const factorial = (num) => {
  if (num != 1) {
    return num * factorial(num - 1);
  }
  return num;
};
