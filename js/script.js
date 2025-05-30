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

function initMap() {
  const center = {lat: 41.8781, lng: -87.6298};
 
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: center,
    mapTypeId: "roadmap",
  });

  const landmarks = [
    {
      position: {lat: 41.8827, lng: -87.6233},
      title: "The Bean",
      info: "One of Chicago's most iconic sculptures, touristy area."
    },
    {
      position: {lat: 41.8789, lng: -87.6359},
      title: "Willis Tower",
      info: "Was known as 'The Sears Tower', and also was once the tallest building in the world."
    },
    {
      position: {lat: 41.8917, lng: -87.6078 },
      title: "Navy Pier",
      info: "A popular area with a ferris wheel, food, and many things to entertain oneself."
    },
    {
      position: {lat: 41.8349, lng: -87.627},
      title: "Illinois Tech",
      info: "The University I attend!"
    },
  ];

  landmarks.forEach (({position, title, info }) => {
    const marker = new google.maps.Marker({
      position, 
      map, 
      title 
    });
  
    const infoWindow = new google.maps.InfoWindow({
      content: `<h3>${title}</h3><p>${info}</p>`
    });

    marker.addListener("click", () => {
    infoWindow.open(map, marker);
    });
  });
}
