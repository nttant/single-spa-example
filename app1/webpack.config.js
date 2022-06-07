const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "btplc",
    projectName: "app1",
    webpackConfigEnv,
    argv,
  });

  const externals = ['@btplc/utils']
  
  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    externals,
  });
};

// we could add this externals: ["something", "something-else", /^@btplc\/.+/]
