<?php

function create_recipe_post_type() {
    $labels = array(
        'name'               => __('Recipes', 'text-domain'),
        'singular_name'      => __('Recipe', 'text-domain'),
        'menu_name'          => __('Recipes', 'text-domain'),
        'name_admin_bar'     => __('Recipe', 'text-domain'),
        'add_new'            => __('Add New', 'text-domain'),
        'add_new_item'       => __('Add New Recipe', 'text-domain'),
        'new_item'           => __('New Recipe', 'text-domain'),
        'edit_item'          => __('Edit Recipe', 'text-domain'),
        'view_item'          => __('View Recipe', 'text-domain'),
        'all_items'          => __('All Recipes', 'text-domain'),
        'search_items'       => __('Search Recipes', 'text-domain'),
        'not_found'          => __('No recipes found.', 'text-domain'),
        'not_found_in_trash' => __('No recipes found in Trash.', 'text-domain')
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'has_archive'        => true,
        'rewrite'            => array('slug' => 'recipes'),
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'menu_icon'          => 'dashicons-carrot', // Use a relevant icon
        'show_in_rest'       => true, // Enable Gutenberg support
    );

    register_post_type('recipe', $args);
}
add_action('init', 'create_recipe_post_type');