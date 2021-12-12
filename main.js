document.getElementById("submit-btn").addEventListener("click", (e) => {
  const inp = document.getElementById("email");
  var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (!inp.value.match(pattern)) {
    document.getElementById("error").style.display = "block";
    inp.style.borderColor = "hsl(354, 100%, 66%)";
  } else {
    document.getElementById("error").style.display = "none";
    inp.style.borderColor = "hsl(223, 100%, 88%)";
    inp.value = "";
  }
});
