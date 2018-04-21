-- TODO: Something's screwed up with editing parabola_settings. All settings reset if you edit the value at all.
UPDATE wp_options SET option_value = replace(option_value, 'andreduvoisin.com', 'localhost:8080') WHERE option_name != 'parabola_settings';
UPDATE wp_posts SET guid = replace(guid, 'andreduvoisin.com','localhost:8080');
UPDATE wp_posts SET post_content = replace(post_content, 'andreduvoisin.com', 'localhost:8080');
UPDATE wp_postmeta SET meta_value = replace(meta_value,'andreduvoisin.com','localhost:8080');
