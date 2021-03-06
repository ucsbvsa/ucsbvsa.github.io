<?php
/**
 * The template for displaying posts in the Gallery Post Format on index and archive pages
 *
 * @package Bouquet
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<h1 class="entry-title"><a href="<?php the_permalink(); ?>" rel="bookmark"><?php the_title(); ?></a></h1>

		<?php bouquet_posted_on(); ?>

	</header><!-- .entry-header -->

	<?php if ( is_search() ) : // Only display Excerpts for search pages ?>
	<div class="entry-summary">
		<?php the_excerpt(); ?>
	</div><!-- .entry-summary -->
	<?php else : ?>
	<div class="entry-content">
		<?php if ( post_password_required() ) : ?>
			<?php the_content( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'bouquet' ) ); ?>

			<?php else : ?>
				<?php
					$pattern = get_shortcode_regex();
					preg_match( "/$pattern/s", get_the_content(), $match );
					$atts = shortcode_parse_atts( $match[3] );
					$images = isset( $atts['ids'] ) ? explode( ',', $atts['ids'] ) : false;

					if ( ! $images ) :
						$images = get_posts( array(
							'post_parent'      => get_the_ID(),
							'fields'           => 'ids',
							'post_type'        => 'attachment',
							'post_mime_type'   => 'image',
							'orderby'          => 'menu_order',
							'order'            => 'ASC',
							'numberposts'      => 999,
							'suppress_filters' => false
						) );
					endif;

					if ( $images ) :
						$total_images  = count( $images );
						$image         = array_shift( $images );
						$image_img_tag = wp_get_attachment_image( $image, 'large' );
				?>
						<div class="img-gallery">
							<div class="gallery-large">
								<a href="<?php the_permalink(); ?>"><?php echo $image_img_tag; ?></a>
							</div><!-- .gallery-large -->
						</div><!-- .img-gallery -->

						<p class="gallery-info"><em><?php printf( _n( 'This gallery contains <a %1$s>%2$s photo</a>.', 'This gallery contains <a %1$s>%2$s photos</a>.', $total_images, 'bouquet' ),
								'href="' . esc_url( get_permalink() ) . '" title="' . esc_attr( sprintf( __( 'Permalink to %s', 'bouquet' ), the_title_attribute( 'echo=0' ) ) ) . '" rel="bookmark"',
								number_format_i18n( $total_images ) );
						?></em></p>

					<?php endif; ?>
				<?php endif; ?>
		<?php wp_link_pages( array( 'before' => '<div class="page-link">' . __( 'Pages:', 'bouquet' ), 'after' => '</div>' ) ); ?>
	</div><!-- .entry-content -->
	<?php endif; ?>

	<footer class="entry-meta">
		<?php bouquet_post_meta(); ?>
		<?php if ( comments_open() || ( '0' != get_comments_number() && ! comments_open() ) ) : ?>
			<span class="comments-link"><?php comments_popup_link( __( 'Leave a comment', 'bouquet' ), __( '1 Comment', 'bouquet' ), __( '% Comments', 'bouquet' ) ); ?></span>
		<?php endif; ?>
		<?php edit_post_link( __( '(Edit)', 'bouquet' ), '<span class="edit-link">', '</span>' ); ?>
	</footer><!-- #entry-meta -->
</article><!-- #post-## -->
