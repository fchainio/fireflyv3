let ignore = [];
let plugins = ['@babel/plugin-proposal-class-properties'];
let presets = ["module:metro-react-native-babel-preset"];

if (process.env["platform"] === "web") {
  ignore.push("node_modules/art/core/color.js");
  plugins.push(["module-resolver", {
    "alias": {
      "^react-native$": "react-native-web"
    }
  }]);
}

if (process.env["platform"] === "desktop") {
  ignore.push("node_modules/art/core/color.js");
  plugins.push(["module-resolver", {
    "alias": {
      "^react-native$": "react-native-electron"
    }
  }]);
}



module.exports = function(api){
  api.cache(true);
  return {
    ignore,
    plugins,
    presets
  }
}
