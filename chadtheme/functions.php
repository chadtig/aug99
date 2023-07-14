<?php  
/** Enqueue Scripts & Stylesheets
 * ===================================== */
// remove default WordPress jQuery
    wp_deregister_script('jquery');
// register new theme jQuery
    wp_register_script('jquery', get_stylesheet_directory_uri().'/public/js/plugins/jquery-3.6.0.min.js', array(), '3.6.0', false);
// enqueue new theme jQuery
    
//script
    wp_enqueue_script('main-js', get_stylesheet_directory_uri() . '/public/js/main.js', array('jquery'), '1.0', true);
    wp_register_script('slick-js', get_stylesheet_directory_uri().'/public/js/plugins/slick.js', array(), '', true);
    wp_register_script('bootstrap-js', get_stylesheet_directory_uri().'/public/js/plugins/bootstrap.bundle.min.js', array(), '', true);
    wp_enqueue_script('jquery');
    wp_enqueue_script('slick-js');
    wp_enqueue_script('bootstrap-js');

    wp_register_script('launch-js', get_stylesheet_directory_uri() . '/public/js/launch.js', array('jquery'), '1.0', true);
    // wp_localize_script('launch-js', 'launch_ajax', array(
    //     // 'ajaxurl' => admin_url('admin-ajax.php')
    //     'ajaxurl' => get_stylesheet_directory_uri().'/fetch_launch.php'
    // ));

    // Localize the launches data
      // Retrieve the launches data
    $launches = get_spacex_launches();

    // Pass the launches data as an array
    wp_add_inline_script('main-js', 'var launchesData = ' . json_encode($launches) . ';', 'before');
//styles
    wp_register_style('slick', get_template_directory_uri() . '/public/css/plugins/slick.css');
    wp_register_style('slick-theme', get_template_directory_uri() . '/public/css/plugins/slick-theme.css');
    wp_register_style('bootstrap-css', get_template_directory_uri() . '/public/css/plugins/bootstrap.min.css');

    wp_enqueue_style('slick');
    wp_enqueue_style('slick-theme');

    //main css
	wp_register_style('main-css', get_template_directory_uri() . '/css/main.css');
	wp_enqueue_style('main-css');
    wp_enqueue_style('bootstrap-css');


register_post_type( 'Launches', array(
    'labels' => array(
        'name'          => __( 'Launches' ),
        'singular_name' => __( 'Launches' )
    ),
    'has_front'    => true,
    'public'       => true,
    'menu_icon'    => 'dashicons-archive',
    'show_in_rest'          => true,
    'show_in_menu' => true,
    'taxonomies'         => array( 'category', 'post_tag' ),
    'supports'     => array('editor', 'title', 'thumbnail', 'excerpt'),
));
//add featured image in post types
add_theme_support( 'post-thumbnails' );
// $args = array(
//     'label'        => __( 'Services Categories' ),
//     'public'       => true,
//     'rewrite'      => true,
//     'hierarchical' => true,
//     'show_in_rest' => true,
//     'show_admin_column' => true,
//     'query_var' => true,
// );
// register_taxonomy( 'services-categories', 'services', $args );
// function add_category_to_services() {
//     register_taxonomy_for_object_type( 'services-categories', 'services' );
// }
// add_action( 'init', 'add_category_to_services' );

function get_spacex_launches() {
    // Make a GET request to the SpaceX API endpoint
    $response = wp_remote_get('https://api.spacexdata.com/v4/launches/');

    // Check if the request was successful
    if (is_array($response) && !is_wp_error($response)) {
        // Retrieve the response body
        $data = json_decode($response['body']);

        // Process and use the data as needed
        return $data;
    } else {
        // Handle the error if the request was not successful
        return 'An error occurred: ' . $response->get_error_message();
    }
}

?>