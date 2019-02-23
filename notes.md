/Steps to create React components, with webpack, Babel/ => instead of npx create-react-app my-app
 npm => installation; webpack => bundle up diff files syntax and transform them into browser friendly; package.json => for dependencies and packages
mkdir *dir name*
npm init -y => make a node file with a package.json file
npm install react react-dom => install the two packages, also packages they need. e.g. prop-types
// create a file called gitignore => ignore by Github; no need to upload stuff that can be downloaded elsewhere
  node_modules .DS_Store dist
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader html-webpack-plugin
  => install these packages
create "webpack.config.js" => refer to the file *style-loader enables the require('.css') file to work in js
create a folder with index.js/html/css
add babel to package.json:
  "babel": {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
  }
add create: webpack to "scripts" in package.json:
  "scripts": {
    "create": "webpack"
  },
run "npm run create" in the main folder in CL => create automatically dist folder
for automatic reloading using localhost(would not use dist folder): 
     "scripts": {
    "start": "webpack-dev-server --open"
  },
