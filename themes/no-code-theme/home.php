<?php
// Query to fetch 6 latest recipes
$args = array(
    'post_type'      => 'recipe', // Use the "recipe" custom post type
    'posts_per_page' => 3,        // Show 3 recipes
    'orderby'        => 'date',   // Order by date
    'order'          => 'DESC',   // Newest first
);

$query = new WP_Query($args); // Run the query

if ($query->have_posts()) : // If there are recipes
    while ($query->have_posts()) : $query->the_post(); // Loop through each recipe
        ?>
        <div class="recipe-item"> <!-- Recipe container -->
            <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2> <!-- Recipe title (linked) -->
            <?php if (has_post_thumbnail()) : ?> <!-- If recipe has an image -->
                <div class="recipe-thumbnail">
                    <?php the_post_thumbnail('medium'); ?> <!-- Show the image -->
                </div>
            <?php endif; ?>
            <div class="recipe-excerpt">
                <?php the_excerpt(); ?> <!-- Show short description -->
            </div>
        </div>
        <?php
    endwhile;
    wp_reset_postdata(); // Reset query data
else :
    echo '<p>No recipes found.</p>'; // Show message if no recipes
endif;
?>