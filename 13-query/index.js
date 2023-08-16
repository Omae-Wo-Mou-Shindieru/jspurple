const object = {
  search: "Вася",
  take: 10,
};

function buildQueryString(obj) {
  const params = [];
  for (const key of Object.keys(obj)) {
    params.push(`${key}=${obj[key]}`);
  }
  return params.join("&");
}

console.log(buildQueryString(object));
