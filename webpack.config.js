const path = require("path");

module.exports = {
  entry: "./src/index.js", // Your entry point
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Handling .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/, // Handling .css files
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Handling image files (.png, .jpg, .jpeg, .gif, .svg)
        type: "asset/resource", // Use Webpack's built-in asset module for resources
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  mode: "development", // Set to 'production' for optimized output
};
