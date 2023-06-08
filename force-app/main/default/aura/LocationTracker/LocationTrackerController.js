({
    test : function(component, event, helper){
        console.log("testing successful")
    },
	myAction : function(component, event, helper) {
		const x = document.getElementById("location");
        if (navigator.geolocation) {
            console.log("Location is Working");
            console.log(navigator.geolocation.getCurrentPosition());
            navigator.geolocation.getCurrentPosition();
            
  } else {
      console.log("Geolocation is not supported by this browser.");
    x.innerHTML = "Geolocation is not supported by this browser.";
  }

	},
    showPosition : function(position) {
        console.log(position.coords.latitude+" "+position.coords.longitude)
        x.innerHTML = "Latitude: " + position.coords.latitude +"<br>Longitude: " + position.coords.longitude;
}
})