$(document).ready(function() {
    var launches = launchesData;
    var batchSize = 4;
    var visibleBatch = 1;
    console.log(launches);
    function showBatch(startIndex, endIndex) {
        for (var i = startIndex; i < endIndex; i++) {
            var launch = launches[i];
	        var launchImage = launch.links.patch.large;
	        var launchFlightNumber = launch.flight_number;
	        var launhFlightDate = launch.date_utc;
	        var launchName = launch.name;
	        var launchDetails = launch.details;

	        // Create the launch element
	        var launchDiv = document.createElement("div");
	        launchDiv.className = "launch";

	        // Create the image wrap element
	        var imgWrapDiv = document.createElement("div");
	        imgWrapDiv.className = "img-wrap";

	        // Create the image element
	        var img = document.createElement("img");
			img.src = "/chadtheme/wp-content/themes/chadtheme/public/image/ph-image.png' ?>";
			img.alt = "Launch Image";
	      

	        // Append the image element to the image wrap element
	        imgWrapDiv.appendChild(img);

	        // Create the info wrap element
	        var infoWrapDiv = document.createElement("div");
	        infoWrapDiv.className = "info-wrap";

	        // Create the title paragraph element
	        var titleP = document.createElement("p");
	        titleP.className = "title";

	        // Create the flight number span element
	        var flightNumberSpan = document.createElement("span");
	        flightNumberSpan.textContent = "Flight number: " + launchFlightNumber;

	        // Create the name span element
	        var nameSpan = document.createElement("span");
	        nameSpan.textContent = launchName + " (" + launhFlightDate + ")";

	        // Append the flight number span and name span to the title paragraph
	        titleP.appendChild(flightNumberSpan);
	        titleP.appendChild(nameSpan);

	        // Create the details paragraph element
	        var detailsP = document.createElement("p");
	        detailsP.textContent = launchDetails;

	        // Append the title paragraph and details paragraph to the info wrap element
	        infoWrapDiv.appendChild(titleP);
	        infoWrapDiv.appendChild(detailsP);

	        // Append the image wrap element and info wrap element to the launch element
	        launchDiv.appendChild(imgWrapDiv);
	        launchDiv.appendChild(infoWrapDiv);

	        // Append the launch element to the inner-space-wrap container
	        document.querySelector(".inner-space-wrap").appendChild(launchDiv);
        }
    }

    function loadMoreData() {
        var startIndex = visibleBatch * batchSize;
        var endIndex = (visibleBatch + 1) * batchSize;

        if (endIndex <= launches.length) {
            // Show the loading animation
            $('.loading-animation').show();

            // Simulate a delay to simulate loading
            setTimeout(function() {
                showBatch(startIndex, endIndex);
                visibleBatch++;

                // Hide the loading animation
                $('.loading-animation').hide();
            }, 1500); // Adjust the delay time as needed
        }
    }

    $(".space-wrapper").on("scroll", function() {
        var scrollTop = $(this).scrollTop();
        var scrollHeight = $(this).prop("scrollHeight");
        var clientHeight = $(this).prop("clientHeight");

        if (scrollTop + clientHeight >= scrollHeight) {
            loadMoreData();
        }
    });

    // Initially show the first batch of data
    showBatch(0, batchSize);
});