$(document).ready(function() {
 	$.ajax({
		  url: 'wp-content/themes/chadtheme/fetch_launches.php',
		  method: 'GET',
		  dataType: 'json',
		  success: function(response) {
		    // Handle the retrieved data
		    console.log(response); // Log the response data to the console

			  var innerSpaceWrap = document.querySelector('.inner-space-wrap');

			  // Example: Iterate through the launches and create HTML elements
			  for (var i = 0; i < response.length; i++) {
			    var launch = response[i];
			    var launchName = launch.name;
			    var launchDetails = launch.details;

			    // Create HTML elements to display the launch data
			    var launchDiv = document.createElement('div');
			    launchDiv.className = 'launch';

			    var launchNameElement = document.createElement('h2');
			    launchNameElement.textContent = launchName;

			    var launchDetailsElement = document.createElement('p');
			    launchDetailsElement.textContent = launchDetails;

			    // Append elements to the launch container
			    launchDiv.appendChild(launchNameElement);
			    launchDiv.appendChild(launchDetailsElement);

			    // Append the launch container to the inner space wrap container
			    innerSpaceWrap.appendChild(launchDiv);
			  }

		    // Example: Iterate through the launches and display them
		    for (var i = 0; i < response.length; i++) {
		      var launch = response[i];
		      // Extract the necessary data and create HTML elements as needed
		      // ...
		    }
		  },
		  error: function(xhr, status, error) {
		    console.log('Error occurred while fetching the data:', error);
		  }
	});
});
 