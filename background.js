function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const callback = function (details) {
  const query = getParameterByName("q", details.url);
  if (query) return { redirectUrl: `https://duckduckgo.com/?q=${query}` };
  else return { redirectUrl: `https://start.duckduckgo.com/` };
};
const filter = { urls: ["*://bing.com/*", "*://www.bing.com/*"] };
const opt_extraInfoSpec = ["blocking"];

chrome.webRequest.onBeforeRequest.addListener(
  callback,
  filter,
  opt_extraInfoSpec
);
