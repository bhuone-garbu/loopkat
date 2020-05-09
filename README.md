This is a [Nextjs](https://nextjs.org/) template project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app) with the additions of some of linters packages that I use.

## Getting started

Recommended Editor: [VSCode](https://code.visualstudio.com/)

Currently some of the config packages are held in Github private package registry for the scoped packages `@bhuone-garbu`

Request a github access token to [bhuone-garbu](https://github.com/bhuone-garbu)

Create your own `~/.npmrc` and populate it with the following.
```
//npm.pkg.github.com/:_authToken="github_access_token_value"
@bhuone-garbu:registry=https://npm.pkg.github.com
```

For semantic reason, this template makes use of `.jsx` or `.tsx` as file extension for React.

## Running

Start installing packages and run the development server:

```sh
npm install
npm run start
```

Open [http://localhost:3100](http://localhost:3100) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.jsx`. The page auto-updates as you edit the file.


## Deploying

Currently, this project is set to deploy at [Vercel](https://vercel.com/) and the `now.json` is looking for a secret `@gb_token` that needs to be set on the Vercel build env. (Vercel used to be called ZEIT)

If not set, use the following command to set the secret:
```
now secrets add gb_token "gh_access_token"
```

This way, zeit can install packages from the privately held github npm registry.

For more info on `now` cli, head over to [https://vercel.com/docs/now-cli](https://vercel.com/docs/now-cli#introduction/vercel-cli-reference)

Happy coding ✌️
