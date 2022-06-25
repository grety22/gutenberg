<?php

/** 
 * Plugin Name: ButtonX
 * Plugin URI: https://localhost:8000
 * Description: Buttons with extended features
 * Author: Gretel M.
 * Author URI: https://localhost:8000
**/

function castle_blocks_buttonx_init(){
    register_block_type_from_metadata( __DIR__ );
}

add_action("init", "castle_blocks_buttonx_init");