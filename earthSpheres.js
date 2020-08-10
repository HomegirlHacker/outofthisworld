
// REVEALS INFORMATION ABOUT HYDROSPHERE
var hydroInfo = $(".hydroBtn");
var patchImage = $(".patchImg");
var patchImageSource = $(".patchImageSrc");
var patchPic = $(".patchPicture");
var bioInfo = $(".bioBtn");
var bioImage = $(".bioImg");


var geoInfo = $(".geoBtn");
var geoImage = $(".geoImg");

var atmosInfo = $(".atmosBtn");
var atmosImage = $(".atmosImg");

var returnButton = $(".returnBtn");


function showHydro(){
  hydroInfo.html("The Great Pacific Garbage Patch: 'The Great Pacific Garbage Patch is a collection of marine debris in the North Pacific Ocean. Marine debris is litter that ends up in the ocean, seas, and other large bodies of water' (National Geographic).  'Debris found in any region of the ocean can easily be ingested by marine species causing choking, starvation, and other impairments' (US Department of Commerce, ).");
  patchImage.css("visibility", "visible");
  patchImageSource.css("visibility", "visible");

  bioInfo.css("visibility", "visible");
  geoInfo.html("Learn More About How Humans Impact the Geosphere");
  geoInfo.css("visibility", "hidden");

  geoImage.css("visibility", "hidden");
  
  bioImage.css("visibility", "hidden");
  

 

}

hydroInfo.on("click", showHydro);

// REVEALS INFORMATION ABOUT BIOSPHERE


function showBio(){
  bioInfo.html("'Although we are only beginning to understand it, the human impact on the biosphere is alarming. The authors insist that we limit it immediately because our ability to harvest the environment will only keep improving. They suggest two main strategies: decrease rates of consumption and use resources more efficiently. Reducing excess food supply (and decreasing food waste) is especially important' (Bang).");

  bioImage.css("visibility", "visible");
  

  
  // FIGURE OUT HOW TO MAKE BUTTONS STATIC
  patchImage.css("visibility", "hidden");
  patchImageSource.css("visibility", "hidden");
  hydroInfo.css("display", "none");

  atmosInfo.css("visibility", "visible");
   

}

bioInfo.on("click", showBio);
bioInfo.click(function(){
  $(".hydroInfo").remove();
});


// REVEALS INFORMATION ABOUT ATMOSPHERE


function showAtmos(){
  atmosInfo.html("'Air pollution is a mixture of solid particles and gases in the air. Car emissions, chemicals from factories, dust, pollen and mold spores may be suspended as particles. Ozone, a gas, is a major part of air pollution in cities. When ozone forms air pollution, it's also called smog. Some air pollutants are poisonous' (Air Pollution).");
  atmosImage.css("visibility", "visible");
  

  geoInfo.css("visibility", "visible");
  bioInfo.css("visibility", "hidden");

}

atmosInfo.on("click", showAtmos);


// REVEALS INFORMATION ABOUT GEOSPHERE


function showGeo(){
  geoInfo.html("'Brush and landscape clearance, excavation and other site disturbances can create adverse conditions that need to be evaluated during the planning phase of a project. These issues include soil erosion, silty stormwater runoff, site flooding and polluted soils' (Soil Management and Excavation).");
  geoImage.css("visibility", "visible");

  
  
  atmosImage.css("visibility", "hidden");
  atmosInfo.css("visibility", "hidden");
  hydroInfo.css("display", "block");
  hydroInfo.html("Learn More About How Humans Impact the Hydrosphere");
  bioInfo.html("Learn More About How Humans Impact the Biosphere");
  atmosInfo.html("Learn More About How Humans Impact the Atmosphere");
   
}


geoInfo.on("click", showGeo);

// RETURN BUTTON

function returnHome(){

}