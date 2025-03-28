<?php

function create_recipe_post_type() {
    // Define labels for the custom post type
    $labels = array(
        'name'          => __('Recipes'), // Name in admin menu
        'singular_name' => __('Recipe'),  // Singular name
        'add_new'       => __('Add New'), // Add new label
        'edit_item'     => __('Edit Recipe'), // Edit recipe label
        'view_item'     => __('View Recipe'), // View recipe label
    );

    // Define settings for the custom post type
    $args = array(
        'labels'      => $labels, // Use the labels above
        'public'      => true,    // Make it public
        'has_archive' => true,    // Enable archive page
        'rewrite'     => array('slug' => 'recipes'), // URL slug
        'supports'    => array('title', 'editor', 'thumbnail'), // Features supported
        'menu_icon'   => 'dashicons-carrot', // Admin menu icon
        'show_in_rest'=> true,    // Enable Gutenberg support
    );

    // Register the "recipe" post type
    register_post_type('recipe', $args);
}
add_action('init', 'create_recipe_post_type'); // Run function on WordPress init