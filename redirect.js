const params = new URLSearchParams(window.location.search);
if (params.has("q"))
  window.location.href = `https://duckduckgo.com/${params.get("q")}`;
