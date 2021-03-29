# andreduvoisin-web

Andre Duvoisin's Blog and Portfolio

[andreduvoisin.com](https://andreduvoisin.com)

Written with GatsbyJS and deployed to Vercel.

## Local Development

```sh
npm install
npm run develop
```

This will run the website at `http://localhost:8000`. GraphiQL is located at `http://localhost:8000/___graphql`.

This website started from boilerplate located at: https://github.com/gatsbyjs/gatsby-starter-blog

### Adding Your First Blog

- Search `TODO: BLOG` and follow the instructions.
- Remove default `content/blog/*` blogs.
- Verify Disqus settings and clear out test comments on test blogs.
  - https://andreduvoisin.disqus.com

## Vercel

### Installing Vercel

https://vercel.com/docs

### Deploying

To make a preview deployment against the current codebase:

```
vercel
```

The domain that is outputted can be tested against.

To make a production deployment against the current codebase:

```
vercel --prod
```

https://vercel.com/docs/platform/deployments#vercel-cli

### Other Commands

List deployments:

```
vercel ls
```

List deployments for this project:

```
vercel ls andreduvoisin-web
```

Safely remove unused deployments (to clean up):

```
vercel rm andreduvoisin-web --safe
```

Vercel will automatically keep deployments for various reasons:

> NOTE: Deployments that are not actively receiving any traffic do not generate any costs nor count towards any limits.
>
> Deleting this deployment will prevent you from instantly reverting and might break links used in integrations, such as the ones in the pull requests of your Git provider.

List DNS Records (e.g. for Email Forwarding):

```
vercel dns ls andreduvoisin.com
```

## Relevant Links

Vercel: https://vercel.com

Disqus: https://andreduvoisin.disqus.com

Google Analytics: https://analytics.google.com

Email Forwarding: https://forwardemail.net

## Known Issues

- ZEIT Now supports a custom 404 page for statically hosted websites in a bit of a roundabout manner, with a bug or two currently live in ZEIT's proxy. The website currently serves the 404 page properly, but with a 200 response code, as `"status": 404` in `now.json` is bugged. References:
  - https://spectrum.chat/zeit/now/custom-404-page~1f921045-60d9-477b-b23c-1626c9fa1565
    - https://twitter.com/andreduvoisin/status/1132725523795390464
  - https://spectrum.chat/zeit/now/questions-about-using-this-with-gatsby~e0dd2595-1167-46fc-88b2-26071deabfd2
  - https://github.com/zeit/now-cli/issues/30
  - https://spectrum.chat/zeit/now/allow-routes-to-fall-through~2ea83669-e526-4f63-8397-c7a0e801a49b
