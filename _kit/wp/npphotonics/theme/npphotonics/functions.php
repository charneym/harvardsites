<?php
/**
 * NP Photonics theme setup.
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }

add_action( 'after_setup_theme', function () {
	add_theme_support( 'editor-styles' );
	add_editor_style( array( 'assets/site.css', 'assets/editor.css' ) );
} );

// One stylesheet and two scripts carry the whole design.
add_filter( 'should_load_separate_core_block_assets', '__return_false' );
add_action( 'wp_enqueue_scripts', function () {
	$v = wp_get_theme()->get( 'Version' );
	wp_enqueue_style( 'npphotonics', get_theme_file_uri( 'assets/site.css' ), array(), $v );
	wp_enqueue_script( 'npphotonics-libs', get_theme_file_uri( 'assets/libs.js' ), array(), $v, true );
	wp_enqueue_script( 'npphotonics-app', get_theme_file_uri( 'assets/app.js' ), array( 'npphotonics-libs' ), $v, true );
	wp_add_inline_script( 'npphotonics-app', 'window.NPP_ASSETS=' . wp_json_encode( trailingslashit( get_theme_file_uri( 'assets' ) ) ) . ';', 'before' );
	// WordPress's own front-end block styles would fight the design: the theme styles every block itself.
	wp_dequeue_style( 'wp-block-library' );
	wp_dequeue_style( 'wp-block-library-theme' );
	wp_dequeue_style( 'classic-theme-styles' );
	wp_dequeue_style( 'global-styles' );
}, 100 );
remove_action( 'wp_enqueue_scripts', 'wp_enqueue_global_styles' );
remove_action( 'wp_footer', 'wp_enqueue_global_styles', 1 );
remove_action( 'wp_enqueue_scripts', 'wp_enqueue_stored_styles' );
remove_action( 'wp_footer', 'wp_enqueue_stored_styles', 1 );
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
// The theme has its own "Skip to content" link.
remove_action( 'wp_footer', 'the_block_template_skip_link' );
remove_action( 'wp_enqueue_scripts', 'wp_enqueue_block_template_skip_link' );

add_action( 'wp_head', function () {
	echo '<meta name="theme-color" content="#0c1430">' . "\n";
	if ( is_front_page() ) {
		echo '<meta name="description" content="' . esc_attr__( 'NP Photonics, Tucson, Arizona: single-frequency fiber lasers, short-length fiber amplifiers and mid-IR transport fibers, built on proprietary phosphate, germanate and tellurite glass since 1998.', 'npphotonics' ) . '">' . "\n";
	}
	if ( ! has_site_icon() ) {
		echo '<link rel="icon" href="' . esc_url( get_theme_file_uri( 'assets/fav.png' ) ) . '">' . "\n";
	}
	// Skip the intro loader on repeat views in the same tab.
	echo '<script>' . file_get_contents( get_theme_file_path( 'assets/seen.js' ) ) . '</script>' . "\n";
}, 1 );
