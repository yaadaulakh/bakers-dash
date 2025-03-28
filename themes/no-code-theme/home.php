<?php
// Query to fetch 6 latest recipes
$args = array(
    'post_type'      => 'recipe', // Use the "recipe" custom post type
    'posts_per_page' => 3,        // Show 3 recipes
    'orderby'        => 'date',   
    'order'          => 'DESC',   
);

$query = new WP_Query($args); 

if ($query->have_posts()) : 
    while ($query->have_posts()) : $query->the_post(); 
        ?>
        <div class="recipe-item"> <!-- Recipe container -->
            <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2> 
            <?php if (has_post_thumbnail()) : ?>
                <div class="recipe-thumbnail">
                    <?php the_post_thumbnail('medium'); ?> 
                </div>
            <?php endif; ?>
            <div class="recipe-excerpt">
                <?php the_excerpt(); ?> 
            </div>
        </div>
        <?php
    endwhile;
    wp_reset_postdata(); 
else :
    echo '<p>No recipes found.</p>'; 
endif;
?>