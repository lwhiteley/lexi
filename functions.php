<?php
/**
 * Enqueue scripts and styles.
 */
function javascript_theme_3_scripts() {
	wp_enqueue_style( 'javascript-theme-3-style', get_stylesheet_uri() );
	wp_enqueue_style( 'javascript-theme-3-style-custom', get_template_directory_uri() . '/dist/assets/styles.bundle.css');
	wp_register_script( 'javascript-theme-3-script', get_template_directory_uri() . '/dist/assets/bundle.js', array(), '', true);
	wp_enqueue_script('javascript-theme-3-script');

}
add_action( 'wp_enqueue_scripts', 'javascript_theme_3_scripts' );
?>
