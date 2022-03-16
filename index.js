const apiUrl = " https://dad-jokes.p.rapidapi.com/random";

fetch(`${apiUrl}"/joke"`, {
  method: "GET",
  headers: {
    "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
    "x-rapidapi-key": "a6dcb74a12mshb549ffdca436b7dp1bb188jsn2d45b58aeb52",
  },
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const myJoke = data.body[0].setup;
    console.log(myJoke);
  })
  .catch((err) => console.error(err));

const loadJokes = () => {
  console.log("Hello");
  document.querySelector(".jokes").innerHTML = "How are you";
};
