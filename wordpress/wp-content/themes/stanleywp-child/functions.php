<?php

// Make this theme a child theme.
// Enqueue the parent theme stylesheet.
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style', get_stylesheet_uri(), array( 'parent-style' ) );
}

// Enqueue our own version of .js scripts.
// Reason: Customize zoom overlay colors.
add_action( 'wp_enqueue_scripts', 'enqueue_altered_scripts', 100 );
function enqueue_altered_scripts() {
	wp_dequeue_script( 'hover-script' );
	wp_enqueue_script( 'child-hover-script', get_stylesheet_directory_uri() . '/js/hover.zoom.js', array( 'jquery' ) );

	wp_dequeue_script( 'main-script' );
	wp_enqueue_script( 'child-main-script', get_stylesheet_directory_uri() . '/js/main.js', array( 'jquery' ) );
}
