# andreduvoisin-web

Andre Duvoisin's Blog and Portfolio.

[andreduvoisin.com](https://andreduvoisin.com)

## Development

```sh
npm install
npx gatsby develop
```

This will run the website at `http://localhost:8000`. GraphiQL is located at `http://localhost:8000/___graphql`.

This website started from boilerplate located at: https://github.com/gatsbyjs/gatsby-starter-blog

### Adding Your First Blog

- Search `TODO: BLOG` and follow the instructions.
- Remove default `content/blog/*` blogs.
- Verify Disqus settings and clear out test comments on test blogs.
  - https://andreduvoisin.disqus.com

## Production

### ZEIT Now

#### Installing ZEIT Now

https://zeit.co/docs/

#### Deploying

Deploys the current codebase to a ZEIT Now domain:

```
now
```

The domain that is outputted can be tested against.

Aliases the last ZEIT Now domain created to `andreduvoisin.com`:

```
now alias
```

Therefore, the following will create a domain and alias `andreduvoisin.com` to that domain, thus deploying to production.

```
now && now alias
```

#### Other Commands

List deployments:

```
now ls
```

Remove all non-aliased deployments (to clean up):

```
now rm <app> --safe
```

## Relevant Links

Zeit: https://zeit.co

Disqus: https://andreduvoisin.disqus.com

Google Analytics: https://analytics.google.com

## Known Issues

- ZEIT Now doesn't support a custom 404 page for statically hosted websites. However, it's on their roadmap! I've decided that it isn't worth the effort to work around this problem for now. References:
  - https://spectrum.chat/zeit/now/questions-about-using-this-with-gatsby~e0dd2595-1167-46fc-88b2-26071deabfd2
  - https://github.com/zeit/now-cli/issues/30
  - https://spectrum.chat/zeit/now/custom-404-page~1f921045-60d9-477b-b23c-1626c9fa1565
  - https://spectrum.chat/zeit/now/allow-routes-to-fall-through~2ea83669-e526-4f63-8397-c7a0e801a49b
