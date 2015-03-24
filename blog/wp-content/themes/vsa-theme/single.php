<!-- begin single.php -->
<?php get_header(); ?>
		<div id="mid_page">
			<div class="ad_left">
				<p>UCSB VSA app for mobile!</p>
				<img src="pictures/qrcode.23183426.png" alt="VSA" width="100" height="100">
				<p>ADVERTISEMENTS HERE<br>(SEE DEMO IN TEAM)</p>
			</div>
		

			<div id="content_wrapper" ><?php while ( have_posts() ) : the_post(); ?>
<?php get_template_part( 'content', get_post_format() ); ?>
 
<nav class="nav-single">
  <h3 class="assistive-text">
    <?php _e( 'Post navigation', 'twentytwelve' ); ?>
  </h3>
  <span class="nav-previous">
  <?php previous_post_link( '%link', '<span class="meta-nav">' . _x( '&larr;', 'Previous post link', 'twentytwelve' ) . '</span> %title' ); ?>
  </span> <span class="nav-next">
  <?php next_post_link( '%link', '%title <span class="meta-nav">' . _x( '&rarr;', 'Next post link', 'twentytwelve' ) . '</span>' ); ?>
  </span> </nav>
<!-- .nav-single -->
 
<?php comments_template( '', true ); ?>
<?php endwhile; // end of the loop. ?>

				<?php if ( have_posts() ) : ?>
<?php /* Start the Loop */ ?>
<?php while ( have_posts() ) : the_post(); ?>
<?php get_template_part( 'content', get_post_format() ); ?>
<?php endwhile; ?>
<?php twentytwelve_content_nav( 'nav-below' ); ?>
<?php else : ?>
 
<article id="post-0" class="post no-results not-found">
  <?php if ( current_user_can( 'edit_posts' ) ) :
// Show a different message to a logged-in user who can add posts.
      ?>
  <header class="entry-header">
    <h1 class="entry-title">
      <?php _e( 'No posts to display', 'twentytwelve' ); ?>
    </h1>
  </header>
  <div class="entry-content">
    <p><?php printf( __( 'Ready to publish your first post? <a href="%s">Get started here</a>.', 'twentytwelve' ), admin_url( 'post-new.php' ) ); ?></p>
  </div>
  <!-- .entry-content -->
 
  <?php else :
// Show the default message to everyone else.
      ?>
  <header class="entry-header">
    <h1 class="entry-title">
      <?php _e( 'Nothing Found', 'twentytwelve' ); ?>
    </h1>
  </header>
  <div class="entry-content">
    <p>
      <?php _e( 'Apologies, but no results were found. Perhaps searching will help find a related post.', 'twentytwelve' ); ?>
    </p>
    <?php get_search_form(); ?>
  </div>
  <!-- .entry-content -->
  <?php endif; // end current_user_can() check ?>
</article>
<!-- #post-0 -->
 
<?php endif; // end have_posts() check ?>

				<div class="socialMedia "><table cellpadding="5" width="100" cellspacing="0">
				<tr>
				<td><a href="https://www.facebook.com/sb.vsa?fref=ts" target="_blank"><img src="http://api.ning.com/files/yK4NcMrBlofWleqeABbNHR-JwhBMxMRlC7NRM0KCYhLk4i-pqoO0AYXzAp3bKHf0IYIP3Qjn0GVzm5V1Gv56dUqaq68hdmSW/facebooks1_60.png" alt="Join Our Facebook Fan Page" width="36" height="36" border="0"></a></td>

				<td><a href="https://www.flickr.com/photos/66828351@N05/sets" target="_blank"><img src="https://cdn2.iconfinder.com/data/icons/web2badges/png/flickr.png" alt="Check Us Out On MySpace" width="40" height="40" border="0"></a></td>

				<td><a href="https://twitter.com/UCSB_VSA" target="_blank"><img src="http://api.ning.com/files/vwYvIcXARnCDb7rmTyv-ajyO2kvmHyKJ813N8CvFCImegtIaEvi9NeRhZ1RWCqojSEvAqmOzVNsoWX4HPus6Zwt-nMYOBXWU/twitters1_60.png" alt="Follow Us On Twitter" width="36" height="36" border="0"></a></td>
				</tr>
				</table>
				</div> <!--end of social media panel-->


				<h1 align="center">wordpress support in the future update<br>(included with host service)</h1>
	
			</div> <!--end of content panel-->
			
			<div class="ad_right">
				<div class="sidebar">
					<?php get_sidebar(); ?>
				</div>
				<!-- sidebar -->
			</div>	
		
		</div>
	<?php get_footer(); ?>
<!-- end single.php -->