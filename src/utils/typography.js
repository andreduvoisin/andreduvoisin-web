import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = ({ rhythm }, options, styles) => {
  // Removes the style pushing bullets in bulleted lists past the left text alignment.
  delete styles['ul,ol'].marginLeft

  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },

    // Removes the margins at the bottom of the Disqus iframe.
    'div#disqus_thread iframe': {
      marginBottom: 0,
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
