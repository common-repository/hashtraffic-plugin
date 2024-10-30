<?php

    /*
    Plugin Name: HashTraffic - Hashtags for WordPress
    Plugin URI: http://hashtraffic.com/plugin
    Description: Enables hashtags on pages and posts
    Version: 1.4
    Author: Brian Hendrickson
    Author URI: http://brianhendrickson.com
    License: GPL2
    */

  function load_hashtraffic_js() {
    if (!has_internet())
      wp_enqueue_script(
        'HashTraffic-Plugin',
        WP_PLUGIN_URL . '/hashtraffic-plugin/hashtraffic.js',
        array('jquery'),
        '1.0',
        'true'
      );
    else
      wp_enqueue_script(
        'HashTraffic-Plugin',
        'http://hashtraffic.com/js/hashtraffic.js',
        array('jquery'),
        '1.0',
        'true'
      );
  }
  
  function has_internet() {
    $connected = @fsockopen("hashtraffic.com",80);
    if ($connected){
        $is_conn = true;
        fclose($connected);
    }else{
        $is_conn = false;
    }
    return $is_conn;
  }

  add_action('wp_enqueue_scripts', 'load_hashtraffic_js');