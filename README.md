<h1 align="center"><a href="https://www.nodetlv.com/events/server-side-auth-with-remix-prisma-and-the-web-platform">🔐 Server-side Auth with Remix, Prisma, and the Web Platform</a></h1>

In this talk, we'll get a live coded demo of building custom hand-rolled
authentication. When you have the right tools (and we do), authentication can be
quite simple and secure. This is more (and better) than just: "Install this
library and you're good to go." When we're done we'll have our own auth code
that can evolve with our ever-changing requirements without a need to learn some
library-specific APIs. We'll be leveraging the Web Platform the way it was meant
to be done to give us simple and secure server-side authentication for the web.

<hr />

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![GPL 3.0 License][license-badge]][license]
[![Code of Conduct][coc-badge]][coc]
<!-- prettier-ignore-end -->

## Prerequisites

- Some
  [experience with JavaScript](https://kentcdodds.com/blog/javascript-to-know-for-react)
- Some [experience with React](https://kcd.im/beginner-react)
- Some [experience with Node.js](https://nodejs.dev/learn)
- Some [experience with Remix](https://remix.run/docs/en/v1/tutorials/blog)

## System Requirements

- [git][git] v2.13 or greater
- [NodeJS][node] `14 || 16 || 18`
- [npm][npm] v8 or greater

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```shell
git --version
node --version
npm --version
```

If you have trouble with any of these, learn more about the PATH environment
variable and how to fix it here for [windows][win-path] or
[mac/linux][mac-path].

## Setup

Follow these steps to get this set up:

```sh
git clone https://github.com/kentcdodds/auth-with-remix-talk.git
cd auth-with-remix-talk
npm run setup
```

This will take some time. This repository has many projects in it that each need
to have their own database setup. We also run type checking and the build to
make sure things are ready to rock and roll 🤘

If you experience errors here, please open [an issue][issue] with as many
details as you can offer.

### Running each app

Each directory in the `apps` directory is a Remix app. The easiest way to run
these without having to `cd` into each directory is to use the `dev.js` script
in the root of this repository:

```sh
# to run the first app:
node dev 1
```

Each will run on a unique port so you can run multiple apps at once.

Alternatively, rather than opening this whole repo in an editor window, you open
each exercise folder in an individual editor window (this will make things like
⌘+P more useful).

### Playground

The playground allows you to quickly change between the different apps via the
`advance` script:

```sh
# To set the playground to the 4th app:
node advance 4
```

Then to run the app, run:

```sh
# starts the playground in dev mode
node play
```

### Instructions

For each exercise, follow the instructions in the `README.md` file of the
exercise directory to learn what the objectives are.

You can us the `diff.js` script to be shown the differences between what's in
any of the apps. For example:

```sh
# to be shown the differences between the fifth app and the sixth:
node diff 5 6
```

This can be handy for you to run when you think you're done but things aren't
quite working as you expect.

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[build-badge]: https://img.shields.io/github/workflow/status/kentcdodds/auth-with-remix-talk/%E2%9C%85%20Validate/main?logo=github&style=flat-square
[build]: https://github.com/kentcdodds/auth-with-remix-talk/actions?query=workflow%3Avalidate
[license-badge]: https://img.shields.io/badge/license-GPL%203.0%20License-blue.svg?style=flat-square
[license]: https://github.com/kentcdodds/auth-with-remix-talk/blob/main/LICENSE
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://kentcdodds.com/conduct
[win-path]: https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/
[mac-path]: http://stackoverflow.com/a/24322978/971592
[issue]: https://github.com/kentcdodds/auth-with-remix-talk/issues/new
<!-- prettier-ignore-end -->
