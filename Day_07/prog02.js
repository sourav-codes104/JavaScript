function mausam(weather) {
  switch (weather) {
    case "sunny":
      return "oh its a sunny day";

    case "rain":
      return "its raining badly";

    case "do_nothing":
      return "so cold better to stay in home";

    case "playful":
      return "ohh lets play the weather is so clear";

    default:
      return "go back to study";
  }
}

console.log(mausam("playful"));
