## Folder Structure
- dist — distribution of our code
- src — here we’ll write the code for our library
- test — test folder for our code
- .npmignore — same as .gitignore, but for npm; what files to be ignored when we publish our package
- index.html — if you want to manually test your code on the browser
- postcss.config.js — automate routine CSS operations; default, it’s configured to use autoprefixer for CSS
- jest.config.js and setupJest.ts — config rules for Jest, which is used for testing
- tsconfig.json — config rules for TypeScript
- webpack.config.js — config rules for our code bundler

The other ones:

- .eslintrc.js, .prettierrc — rules for linting and code formatting
