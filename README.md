[![Netlify Status](https://api.netlify.com/api/v1/badges/350d5dbd-f00e-404a-b13d-3c46627ed351/deploy-status)](https://app.netlify.com/sites/elibenton/deploys)

### _As a 2019-2020 Watson Fellow, I am traveling the world to study the politics of digital technology. This website is where I write about the journey, reviews the works I am studying, and update a podcast documenting the year._

## Website Structure

    .
    ├── /src
    │   ├── /components
    │   ├── /utils
    │   ├── /pages
    |   |   ├── 404.js
    |   |   ├── about.js
    │   |   └── tags.js
    │   └── /templates
    |       ├── list.js
    │       └── post.js
    |
    ├── /content
    │   ├── /images
    │   └── tag-descriptions.yaml
    |
    ├── /static
    |    ├── _redirects
    |    ├── robots.txt
    |    ├── favicon.ico
    |    ├── thesis.pdf
    |    └── resume.pdf
    |
    ├── gatsby-config.json
    ├── gatsby-node.js
    ├── package.json
    ├── netlify.toml
    └── ...

## 🔧 Issues

- [ ] Formatting responsive images in Ghost posts
- [ ] Using YAML data for tag descriptions
- [ ] Interactive citations in `mobiledoc` editor
- [ ] Spacing and margins are not the same in development and server environment
- [x] ~~Use state for mailchimp subscriber form~~
- [x] ~~Gatsby image deforms images in Mailchimp RSS email campaign~~
- [x] ~~Filtering Home Page based on tags and templates~~

## 🎁 Wish List

- [ ] Dark Mode
- [ ] Interactive Reference Component
- [ ] Mapbox Integration
- [ ] Observable NPM packages
- [ ] Comments through Netlify Lambda Functions

#### Portfolio / Resume

- [x] ~~Toggle Hover Headers~~
- [ ] Failure Resume Toggle
- [ ] Download Resume PDF

#### RSS

- [x] ~~Podcast Feed~~
- [x] ~~Publish-to-Medium~~
- [x] ~~Publish-to-Mailchimp~~

## 📜 Pages

#### post.js

`post.js` is my template for all single page posts on the website. Whether its a podcast page or blog entry or reference to published or academic writing, the template is the same. The elements of the `GraphQL` are explained below. **Bold** is required for the page to render. *Italic* means the tag is optional.

```javascript
export const postQuery = graphql`
	query($slug: String!) {
		site {
			siteMetadata {
				title
			}
		}
		ghostPost(slug: { eq: $slug }) {
			excerpt
			title
			html
			id
			updated_at(formatString: "MMMM DD, YYYY")
			published_at(formatString: "MMMM DD, YYYY")
			tags {
				name
			}
		}
	}
`
```

`title`: **Title**

`published_at`: **Date First Read**

`updated_at`: *Date Updated*

`tags[0]`: **Template (Writing, Audio, Academic, Photo)**

`tags[1]`: **Location**

`tags[2]`: **Region**

`tags[3]`: **Country**

`tags[3:]`: *Tags (Multiple)*

#### book.js

`title`: **Title**

`published_at`: **Date First Read**

`updated_at`: *Date Updated*

`tags[0]`: **Title**

`tags[1]`: **Primary Author**

`tags[2]`: **Publication Year**

`tags[3]`: **Country**

`tags[3:]`: *Additional Author (Multiple)*

## 🌲 Branches

#### version-3

`version-3` is the default branch for this repository. As such, Netlify automatically publishes a production build every time this branch is updated. For all intents and purposes, this branch acts like "master."

#### version-2

`version-2` was the second version of my website. It is published to https://version-2.elibenton.co/ subdomain. It was my first attempt to build a site with Gatsby. It is no longer actively maintained.

#### version-1

`version-1` is the branch of my first site's codebase. It is published to https://version-1.elibenton.co/ subdomain. Keep in mind that this site is build with Hugo rather than Gatsby, and as such, it has a different build command set in "netlify.toml." It is no longer actively maintained.

#### dev

`dev` is my development branch. It can be found at https://dev.elibenton.co/. I always push commits to `dev` first, so I can ensure they work once hosted publicly on netlify. Once I am confident I like the changes, I open a pull request and then merge `dev` with `version-3`. Soon, I would prefer to close this branch and use [Netlify Dev](https://www.netlify.com/products/dev/) or [Gatsby Cloud](https://www.gatsbyjs.com/cloud/) instead.

## 📚 The Stack

[React](https://reactjs.org/): front-end and UI

[Gatsby](https://www.gatsbyjs.com/): react development framework, pull any data,
deploy statically

[GraphQL](https://graphql.org/): query language to programmatically call data

[Styled Components](https://www.styled-components.com/): visual primitives for react components

[Prettier](https://prettier.io/): automatic formatting

[Netlify](https://www.netlify.com/): CDN and continuous deployment

[VSCode](https://code.visualstudio.com/): editor with terminal, git, &
typescript integration

[Ghost CMS](https://ghost.org/): Headless CMS that manages both content and
users

[Gatsby Cloud](https://www.gatsbyjs.com/cloud/): Realtime preview and build chain management for rapid development

[Backtracks](https://backtracks.fm/): Podcast hosting, embedding, and analytics

## 🌏 Principles & Ideas

#### [JAMStack](https://jamstack.org/)

#### [PWA's](https://alistapart.com/article/yes-that-web-project-should-be-a-pwa#section1)

#### [DRY](https://blog.usejournal.com/the-pragmatic-programmer-is-essential-reading-for-software-developers-443940b8ef9f)

## 🙏 Thank You

[Jimmy Chion](https://github.com/cjimmy)

[Tom MacWainright](https://github.com/tmcw)

[Brian Barbour](https://github.com/steelvoltage)

[Simon Posada](https://github.com/simonpfish)
