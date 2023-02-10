const googleDatabase = [
  "cats.com",
  "soup_recipes.com",
  "flowers.com",
  "animals.com",
  "cat_pictures.com",
  "my_favorite_cats.com",
  "my_favorite_cats2.com",
];

const googleSearch = (searchInput) => {
  const matches = googleDatabase.filter((website) => {
    return website.includes(searchInput);
  });

  // 如果大於三筆只取前三筆
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

console.log(googleSearch("soup"));
console.log(googleSearch("cat"));
