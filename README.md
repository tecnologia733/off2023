# SheetySite

This is a Gatsby template for creating a website based on Google sheets.

## Getting Started 🚀

### Pre-setup Requirements

1. Install [NodeJs](https://nodejs.org/en/download/)
2. Install [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)
3. Obtain [Google Sheets API key](https://developers.google.com/sheets/api/guides/authorizing#APIKey)


### Preparing the Project
3. Download this project
4. Run `yarn install` to download dependencies
5. Make a copy of the [google sheets template](https://docs.google.com/spreadsheets/d/1S-S1dzVsPlbYtYTq_jiXCcVYKf75wFlGxB2fKkdVc7w/edit#gid=1818216905)
6. Fill in the google sheets with the site's data and item listings details
7. Get the [Google Sheets Id](https://developers.google.com/sheets/api/guides/concepts#spreadsheet_id)

### Running on Dev Environment

1. Create `.env.development` on the project root
   - Include `GATSBY_GOOGLE_CREDENTIALS`=<Google Sheets Api Key Here>
   - Include `GATSBY_SHEET_ID`=<Google Sheets Id Here>

2. run `yarn start`
   - Your site will run at `http://localhost:8000`
   - You graphiql will run at`http://localhost:8000/___graphql`

### Running on Prod Environment
1. Create `.env.production` on the project root
   - Include `GATSBY_GOOGLE_CREDENTIALS`=<Google Sheets Api Key Here>
   - Include `GATSBY_SHEET_ID`=<Google Sheets Id Here>
2. run `yarn build`
3. then `yarn serve`
   - Your site will run at `http://localhost:9000`


## Underlying Tech

- Typescript
- TailwindCSS
- Sheets API

The following setup have been configured in this project:

- SEO
- PWA and offline capabilities
- Site metadata
- eslint & prettier
- husky

## TODO
- [ ] Build custom google sheets plugin that is more flexible
- [ ] Create layout options
- [ ] Add option for Google Analytics in sheetysite-data sheet
- [ ] Add option for site's SEO in sheetysite-data sheet


## What's inside? 🧐

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── static
    ├── .gitignore
    ├── .eslintrc.js
    ├── .prettierrc.js
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── LICENSE
    ├── yarn-lock.json
    ├── package.json
    ├── tailwind.config.js
    ├── postcss.config.js
    └── README.md
