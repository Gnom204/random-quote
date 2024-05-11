const QuoteUrl: string = "http://localhost:3000/quote";

export function getRandomQuery() {
  return fetch(QuoteUrl, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => res.quote.quote);
}

export function createQuery(query: string) {
  return fetch(QuoteUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ quote: query }),
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));
}
export function create() {
  return fetch(QuoteUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: "абоба" }),
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));
}
