(function() {
    if (navigator.geolocation) {
        function getGeoData() {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    let mapButton = document.querySelector("#showLink"),
                        mapLink = `https://www.bing.com/maps?cp=${position.coords.latitude}~${position.coords.longitude}`;
                    mapButton.classList.remove("hidden");
                    mapButton.innerHTML = mapLink;
                    mapButton.href = mapLink;
                },
                (errorObj) => {
                    alert("nie mozna znalesc pozycji");
                }, {
                    enableHighAccurancy: true
                }
            );
        };
        let findPositionButton = document.querySelector("#findUserPosition");
        findPositionButton.classList.remove("hidden");
        findPositionButton.onclick = (e) => {
            e.preventDefault();
            getGeoData();
        }
    } else
        alert("Geolocacja nie jest wspierana w przegladarce");
})();
