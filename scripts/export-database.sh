#!/bin/bash

# Operations performed here are the reverse of the operations performed in mysql/localhost-migrate.sql.
docker exec andreduvoisin-web_mysql /bin/bash -c "
    mysql -u root -ppassword
        <<< \"
            use andrygzc_wp117;
            UPDATE wp_options SET option_value = replace(option_value, 'http://localhost:8080', 'https://andreduvoisin.com') WHERE option_name != 'parabola_settings';
            UPDATE wp_posts SET guid = replace(guid, 'http://localhost:8080','https://andreduvoisin.com');
            UPDATE wp_posts SET post_content = replace(post_content, 'http://localhost:8080', 'https://andreduvoisin.com');
            UPDATE wp_postmeta SET meta_value = replace(meta_value,'http://localhost:8080','https://andreduvoisin.com');
            quit;
        \"
    
    mysqldump -u root -ppassword --databases andrygzc_wp117 > /docker-entrypoint-initdb.d/andrygzc_wp117.sql
"
