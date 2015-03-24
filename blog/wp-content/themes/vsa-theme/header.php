<!-- begin the header file -->
 <!DOCTYPE html>
	<!--[if IE 7]>
	<html class="ie ie7" <?php language_attributes(); ?>>
	<![endif]-->
	<!--[if IE 8]>
	<html class="ie ie8" <?php language_attributes(); ?>>
	<![endif]-->
	<!--[if !(IE 7) | !(IE 8)  ]><!-->
<html <?php language_attributes(); ?>>
	<!--<![endif]-->
	<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width" />
	<title><?php wp_title( '|', true, 'right' ); ?></title>
	<link rel="profile" href="http://gmpg.org/xfn/11" />
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
	<?php // Loads HTML5 JavaScript file to add support for HTML5 elements in older IE versions. ?>
	<!--[if lt IE 9]>
	<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js" type="text/javascript"></script>
	<![endif]-->
	<?php wp_head(); ?>
	<title>UCSBVSA</title>
	<meta charset="utf-8"/>
	<link type= "text/css"; rel="stylesheet"; href="stylesheet.css"/>
	<link rel="icon" type="image" href="pictures/ucseal3.gif">
	<script src="js/jquery-2.1.1.js"></script>
	<script src="js/slider.js"></script>
	</head>

	<body>
		<div id="page_wrapper">
		<!--navigation panel-->
		<div id="header_wrapper"><div class="nav font_style">
		<?php get_template_part( 'site_files/site_header'); ?>
			
		</div></div> <!--end of navigation panel-->
<!-- end the header file -->