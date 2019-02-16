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
