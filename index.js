const quoteText = document.querySelector(".quote");
const authorName = document.querySelector(".name");
const quoteBtn = document.querySelector("button");
const apiUrl = "https://quotes15.p.rapidapi.com/quotes/random/";

const loadJokes = () => {
  quoteBtn.innerText = "Loading ...";
  quoteBtn.classList = "loading";

  fetch(`${apiUrl}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "quotes15.p.rapidapi.com",
      "x-rapidapi-key": "a6dcb74a12mshb549ffdca436b7dp1bb188jsn2d45b58aeb52",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //   console.log(data.originator.name);
      quoteText.innerText = data.content;
      authorName.innerText = data.originator.name;
      quoteBtn.innerText = "New Quote";
      quoteBtn.classList.remove("loading");
    })
    .catch((err) => console.error(err));
};
