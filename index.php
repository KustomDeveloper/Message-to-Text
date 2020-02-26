<?php
/**
 * Plugin Name: Message To Text
 * Description: Send text message
 * Version: 1.0
 * Text Domain: message-to-text
 */

/** 
* Load main stylesheet
*/ 
function load_styles() {
  wp_enqueue_style('chat_app_styles', plugins_url('/app/app/build/static/css/main.c9d2125b.chunk.css', __FILE__), array(), false);
}
add_action('wp_enqueue_scripts', 'load_styles');

/** 
* Load main scripts
*/ 
function load_scripts() {

  wp_enqueue_script('load_chatapp_script_one', plugins_url( '/js/main.js', __FILE__), array(), false, true);

  wp_enqueue_script('load_chatapp_script_two', plugins_url( '/app/app/build/static/js/2.2d359680.chunk.js', __FILE__), array(), false, true);

  wp_enqueue_script('load_chatapp_script_three', plugins_url( '/app/app/build/static/js/main.6528b532.chunk.js', __FILE__), array(), false, true);
}

add_action('wp_enqueue_scripts', 'load_scripts');
