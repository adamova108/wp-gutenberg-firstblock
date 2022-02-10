<?php

/**
 * Plugin Name: First Block
 * Plugin URI: http://localhost/wp_guten/
 * Description: Gutenberg sandbox plugin.
 * Author: KWD
 */

function blocks_course_firstblock_init()
{
    register_block_type_from_metadata(__DIR__);
}
add_action('init', 'blocks_course_firstblock_init');
