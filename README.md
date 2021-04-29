# Frontend Template

## What is this?

This is a template for frontend projects written in Typescript and based on NextJS. It contains everything I think a modern frontend application should have, including:

- Linter
- Code formatter
- Commit linter
- Test suite
- Storybook
- i18n
- Visual regression tests

## Who is this meant for?

Primarily myself. I wrote this because I was sick and tired of setting up the environment from scratch every time I started a new project.
You're free to use it for your own needs though. Contributions are welcome.

## Tech stack

- Jest
- React Testing Library
- ESLint
- Prettier
- Commitlint
- Husky
- react-i18-next
- Storybook
- Puppeteer
- Typescript

## Scripts

`yarn dev`

Start the dev server.

`yarn build`

Generates a production build.

`yarn start`

Start the production build.

`yarn next export`

Exports the production build to `out` as a set of client-side only files suitable for serving over plain HTTP servers.

`yarn tests`

Runs regular tests.

`yarn storybook`

Start a live Storybook instance.

`yarn build-storybook`

Generates a build of your storybook to `storybook-static`, suitable for serving over plain HTTP servers.

`yarn publish-storybook`

Publishes storybook to Github pages. `storybook-static` must not be in `.gitignore` for this to work.

`yarn test:ui`

Run the visual regression test for stories in components. Storybook must be running on port 6006.

`yarn test:pages`

Run the visual regression test for stories in tests. Storybook must be running on port 6006.

## IDE integration

There are default settings for VisualStudio Code in `.vscode`. I suggest you also install the following extensions:

- Conventional Commits
- ESLint
- Prettier

## Stories and Tests

Tests and stories should be placed next to the components they refer to. One exception is pages - due to the way NextJS handles routing, tests and stories cannot be put next to pages.
Instead, they should go in `tests`.
Currently, only stories in `components` and `tests` are being picked up - if you want to use additional directories, you'll need to add them to `.storybook/main`.
Do not commit visual regression tests to version control - they bloat the repo size too much to be worth it.
`storybook-static` _should_ be added to version control in order to publish it to Github Pages. If you are not publishing it, or if you're publishing it somewhere else, feel free to add that directory to `.gitignore`.

## Caveats

At the time of writing, there is no support for lazy loading of i18n files. While there are solutions for NextJS that add that functionality,
getting them to play nicely with Jest and (particularly) Storybook has been a pain.

## Examples

I've left examples of various stuff (tests, stories, i18n locales) thoughout the app - feel free to use them as a basis for your own implementations.

## License

MIT
