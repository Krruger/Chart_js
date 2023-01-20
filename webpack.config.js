const path = require('path');
// /**
//  * @type {import("webpack/types").Configuration}
//  */
// const config = {
//   entry: {
//     js: path.join(__dirname, 'src', 'acquisitions.js'),
//     // home_site2: path.join(__dirname, 'src/overrides/site2', 'home.js'),
//     // home_site5: path.join(__dirname, 'src/overrides/site5', 'home.js')
//   },

//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: fileData => {
//       const { chunk } = fileData;
//     //   if (!chunk.entryModule) {
//     //     return crtPath;
//     //   }

//       const { userRequest: req } = chunk.entryModule;
//       const siteNameDelimiter = 'overrides/';
//       if (req.includes(siteNameDelimiter)) {
//         fileData.chunk = null;
//         fileData.filename = req.slice(
//           req.indexOf(siteNameDelimiter) + siteNameDelimiter.length
//         );

//         return '[path][name].js';
//       }

//       return '[name].js';
//     },
//     // Emit fresh files every time.
//     clean: true,
//   },

//   mode: 'development'
// };

// module.exports = config;

// new webpack.SourceMapDevToolPlugin(options);


var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/**
 * @type {import("webpack/types").Configuration}
 */

module.exports = {
    mode: 'development',
    devtool: "source-map",
    // plugins: [
    //     new HtmlWebpackPlugin({
    //       template: './src/index.html',
    //       filename: './index.html',
    //     }),
    //   ],
    entry: {
        // script: "./src/script.js",
        acquisitions: ["./src/acquisitions.js"],
    },
    output: {
        path: path.resolve(__dirname, "dist", "js"),
        filename: "acquisitions.js",
    },
  }
// {
//     mode: 'development',
//     // devtool: "source-map",
//     plugins: [
//         new HtmlWebpackPlugin({
//           template: './src/index.html',
//           filename: './index.html',
//           path: path.resolve(__dirname, 'dist')
//         }),
//       ],

//     }]
