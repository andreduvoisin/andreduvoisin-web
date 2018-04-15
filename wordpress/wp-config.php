<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'andrygzc_wp117');

/** MySQL database username */
define('DB_USER', 'andrygzc_wp117');

/** MySQL database password */
define('DB_PASSWORD', ']ZkAS24P2!');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'yukdhz77xzyaqcxsbzxgdvlkwbj2mxjzlkzzih8ou3zpgwgie9lx0bhrzfallgls');
define('SECURE_AUTH_KEY',  'qap09ozqazpgbvqvvdzcbks6qobllgw11pf5ckhnpgvk118rmjwbunu8iv1dgyui');
define('LOGGED_IN_KEY',    'gqapjz5rfo9z1uxbzveegg7ypb8jydepke44jfzwkf8x6w7tuch1mqeqdnmtmmgq');
define('NONCE_KEY',        'qtweknmcopmn7jonugxc4nr5w4ib2slbdv9fegptwcppscfuebxtqrq5miltkakr');
define('AUTH_SALT',        'uskr3kfm738t0rxvwx2dhcawa4vcbaouozolq6nrzy4oqwk5dbwe9krjougi2obl');
define('SECURE_AUTH_SALT', 'gm1wgz8kvjtdvff2ju22epoavzwtlmlbjwxyzzctpbccvbjohxtydm50icd11v1r');
define('LOGGED_IN_SALT',   'b0pp9wb7dhzttzpdw8fcqywgzwkzxnlbaiiivwnekabopi7bearkwzd5qp1utrwv');
define('NONCE_SALT',       'zs8ydykqrza7jzpik7hittzdqjtqpgmcumzk5t1n1dvujpw4ohnidzs2epg6mjrv');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
