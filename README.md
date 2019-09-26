# Hello!

As a 2019-2020 Watson Fellow, I am traveling the world to study the politics of digital technology. This website is where I post about journey, write reviews of the works I am studying, and update to my podcast documenting the year.

[![Netlify Status](https://api.netlify.com/api/v1/badges/350d5dbd-f00e-404a-b13d-3c46627ed351/deploy-status)](https://app.netlify.com/sites/elibenton/deploys)

# ⁉️ Issues

- [ ] **Learning to use state properly with mailchimp add subscriber**

When using a react popup to ask for email subscribers, use react state to handle all the events

- [ ] **Gatsby images do not propogate to Mailchimp RSS email campaigns**

When porting my site to a Mailchip email campaign through RSS, it uses the "blurred out" Gatsby pre-loading image rather than the appropiate, fully-loaded image

- [ ] **Syncining "collections" in NetlifyCMS, "Templates" in Gatsby, and "Feeds" in RSS**

I have three types of posts, "Writing," "Audio," and "Newsletter," each with its own styling of webpage, use of static assets, and place within one of the three RSS feeds of the corresponding name.

- [ ] **Filtering Home Page based on tags and templates**

Creating a "Tags" homepage filter and a "Templates" homepage filter, so that the index shows ALL pages intially, but then can show a subset based on a specifc criterium as well.

# Website Structure

    .
    ├── /src
    │   ├── /components
    │   ├── /utils
    │   ├── /pages
    │   └── /templates
    ├── /content
    │   ├── /images
    │   ├── /writing
    |   └── /mdx
    ├── /static
    |    ├── _redirects
    |    ├── robots.txt
    |    ├── favicon.ico
    |    └── /admin
    ├── gatsby-config.json
    ├── gatsby-node.js
    ├── package.json
    ├── netlify.toml
    └── ...
    
# 🌲Branches

### version-2

`version-2` is the default branch for this repository. As such, Netlify automatically publishes a production build everytime this branch is updated. For all intents and purposes, this branch acts like "master."

### version-1

`version-1` is the branch which include my old site's codebase. It is published to https://version-1.elibenton.co/ subdomain. Keep in mind that this site is build with Hugo rather than Gatsby, and as such, it has a different build commmand set in "netlify.toml." It is no longer actively maintained.

### dev

`dev` is my development branch. It can be found at https://dev.elibenton.co/. I always push commits to `dev` first, so I can ensure they work once hosted publically on netlify. Once I am confident I like the changes, I open a pull request and then merge `dev` with `version-2`. Soon, I would prefer to close this branch and use [Nelify Dev](https://www.netlify.com/products/dev/) instead.

# 🎁 Wish List

- [ ] **RSS**

  - [ ] Podcast Feed
  - [ ] Publish-to-Medium
  - [ ] Publish-to-Mailchimp

- [ ] **Portfolio Page (Online Resume)**

  - [ ] Failure Resume
  - [ ] Download Resume PDF
  - [ ] Toggle Hover Headers

- [ ] **Interactive Reference Component**
- [ ] **Mapbox Integration**
- [ ] **Observable NPM packages**
- [ ] **Comments through Netlify Lambda Functions**

# 📚 The Stack

[React](https://reactjs.org/): front-end and UI

[Gatsby](https://www.gatsbyjs.com/): react development framework, pull any data, deploy statically

[GraphQL](https://graphql.org/): query language to programmatically call data

[MDX](https://mdxjs.com/): use react components in Markdwon

[Styled Components](https://www.styled-components.com/): visual primitives for react components

[Prettier](https://prettier.io/): automatic formatting

[Netlify](https://www.netlify.com/): CDN and continuous deployment

[VSCode](https://code.visualstudio.com/): editor with terminal, git, & typescript integration

[NetlifyCMS](https://www.netlifycms.org/): Open source content management for Git workflow

# 🛠 Coding Guidelines

    Don't have any yet...

# 🌏 Principles & Ideas

[JAMstack](https://jamstack.org/)

[PWA's](https://alistapart.com/article/yes-that-web-project-should-be-a-pwa#section1)

[DRY](https://blog.usejournal.com/the-pragmatic-programmer-is-essential-reading-for-software-developers-443940b8ef9f)

# 🙏 Thank You's

Jimmy Chion

Brian Barbour

Simon Posada
