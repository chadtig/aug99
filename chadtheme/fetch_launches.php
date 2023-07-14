<?php
// Include any necessary files or define required functions

// Retrieve the data from your data source (e.g., get_spacex_launches() function)
$launches = get_spacex_launches();

// Send the data as a JSON response
header("Content-Type: application/json");
echo json_encode($launches);

?>