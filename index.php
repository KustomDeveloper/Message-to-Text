<?php
/**
 * Plugin Name: Message To Text
 * Description: Send text message
 * Version: 1.10.3
 * Text Domain: message-to-text
 */

/** 
* Load main script
*/ 

function load_mainjs() {
  wp_enqueue_script( 'ava-test-js', plugins_url( 'build/src/index.js', __FILE__ ));
}

add_action('wp_enqueue_scripts',' load_mainjs');