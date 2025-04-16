function goUp() {
  const buttn = document.getElementById("toTop");
  if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
    buttn.style.display = "block";
  } else {
    buttn.style.display = "none";
  }
}
;

document.getElementById("toTop").onclick = function goUp() {
  window.scrollTo({top: 0, behavior: 'smooth'});
};

document.getElementById("toggleColor").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 12,
  center: center,
  mapTypeID: "roadmap",
});

const landmarks = [
  {
    position: {},
    title: "",
    info: ""
  },
  {
    position: {},
    title: "",
    info: ""
  },
  {
    position: {},
    title: "",
    info: ""
  },
  {
    position: {},
    title: "",
    info: ""
  },
];