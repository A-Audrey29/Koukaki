<?php

get_header();
?>

<main id="primary" class="site-main">
    <section class="banner">
        <video class="background-video" autoplay loop muted poster="wp-content/themes/foce-child/assets/images/Studio Koukaki-image header 1.png" src="wp-content/themes/foce-child/assets/images/Studio+Koukaki-vidéo+header+sans+son+(1).mp4" type="video/mp4">
        </video>
        <img class="banner_img" src="<?php echo get_template_directory_uri() . "'/assets/images/logo.png'"; ?> " alt="logo Fleurs d'oranger & chats errants">
    </section>
    <section id="story" class="story object-speed-up">
        <h2 class="title">L'histoire</h2>
        <article id="" class="story__article object-speed-up ">
            <p#><?php echo get_theme_mod('story'); ?></p>
        </article>
        <?php
        $args = array(
            'post_type' => 'characters',
            'posts_per_page' => -1,
            'meta_key'  => '_main_char_field',
            'orderby'   => 'meta_value_num',

        );
        $characters_query = new WP_Query($args);
        ?>

        <article id="characters">
            <div class="main-character">
                <h3 class="title">Les personnages</h3>

                <!-- ajout du slider templates-parts -->
                <?php get_template_part('template-parts/content', 'slider'); ?>

                <?php
                /*$main_character = $characters_query->posts[0];
                echo '<figure>';
                echo get_the_post_thumbnail($main_character->ID, 'full');
                echo '<figcaption>' . $main_character->post_title . '</figcaption>';
                echo '</figure>';
                $characters_query->next_post();
                ?> */
                // </div>
                // <div class="other-characters">
                //     <?php
                //     while ($characters_query->have_posts()) {
                //         $characters_query->the_post();
                //         echo '<figure>';
                //         echo get_the_post_thumbnail(get_the_ID(), 'full');
                //         echo '<figcaption>';
                //         the_title();
                //         echo '</figcaption>';
                //         echo '</figure>';
                //     }   
                ?>
            </div>
        </article>
        <article id="place" class="place_background">
            <div>
                <h3 class="title">Le Lieu</h3>
                <p class="place_"><?php echo get_theme_mod('place'); ?></p>
            </div>
            <img id="big_cloud" src="wp-content/themes/foce-child/assets/images/big_cloud.png" alt="#" />
            <img id="little_cloud" src="wp-content/themes/foce-child/assets/images/little_cloud.png" alt="#" />
        </article>
    </section>


    <section id="studio">
        <h2 class="title">Studio Koukaki</h2>
        <div>
            <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
            <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
        </div>
        <img class="studio_white_flower object-speed-up" src="wp-content/themes/foce-child/assets/images/Sunflower.png" alt="#""/>
        <img class=" studio_orchid object-speed-up" src="wp-content/themes/foce-child/assets/images/orchid.png" alt="#""/>
                    
    </section>
</main><!-- #main -->

<!-- ajout de la section nomination templates-parts -->
<?php get_template_part('template-parts/content', 'nomination'); ?>



        <?php
        get_footer();
