let ignore = [];
let plugins = [];
let presets = ["module:metro-react-native-babel-preset"];

if (process.env["platform"] === "web") {
  ignore.push("node_modules/art/core/color.js");
  plugins.push(["module-resolver", {
    "alias": {
      "^react-native$": "react-native-web"
    }
  }]);
}


module.exports = function(api){
  api.cache(false);
  return {
    ignore,
    plugins,
    presets
  }
}
