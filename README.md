## Next Template

Basic template for new applications.

### Deployments

Our base branch is `development`, which deploys to dev on merge. Our production branch is `production`, which deploys to production on merge.

To deploy, simply kick off the [deploy workflow](https://github.com/Be-The-Chameleon/next-template/actions/workflows/deploy.yml).

To see what changes are currently in dev and have not been deployed, [compare development and production](https://github.com/Be-The-Chameleon/next-template/compare/production...development).

### Tech stack

* [NextJS](https://nextjs.org/)
* [Vercel](https://vercel.com/)
* [Tailwind](https://styled-system.com/getting-started/)
* [twin.macro](https://github.com/ben-rogerson/twin.macro)
* [Styled Components](https://styled-components.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [ESlint](https://eslint.org/)

### Contributing

GitHub actions are kicked off on every push to a branch to verify that tests, coverage, and lint is passing. This check must pass before a PR can be merged.

Add the `.env` file with the necessary secrets locally.

To run the site locally:

```yarn dev```

To run ci: 

```yarn ci``` 

To run lint: 

```yarn lint```

To run TS: 

```yarn ts:check```