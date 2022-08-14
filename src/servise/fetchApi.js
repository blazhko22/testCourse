const BASE_URL = 'https://api.apilayer.com/fixer';
// const API_KEY = 'iZZZ0A9Wli4oX8fc1hxHzzZIuQCUAiJM8B6MsK4b';
const myHeaders = new Headers();
myHeaders.append("apikey", "{HfLUXlTQb06iHBVUlFrCYPtznjSyE7pW}");

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
// export async function fetchConvertor() {
// fetch(`${BASE_URL}/convert?to={to}&from={from}&amount={amount}`, requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
// }

export async function fetchConvert() {
  return fetch(`${BASE_URL}/convert?to={to}&from={from}&amount={amount}`, requestOptions)
  .then(
    response => response.text()
    .then(result => console.log(result))
    .catch(error => console.log('error', error))
  );
}
// 'https://api.apilayer.com/currency_data/convert?base=USD&symbols=EUR,GBP,JPY&amount=5&date=2018-01-01'


// export async function fetchByName(query) {
//   return fetch(
//     `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=true`,
//   ).then(response => response.json());
// }

// export async function fetchById(id) {
//   return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`).then(
//     response => response.json(),
//   );
// }

// export async function fetchCredits(id) {
//   return fetch(
//     `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
//   ).then(response => response.json());
// }

// export async function fetchReviews(id) {
//   return fetch(
//     `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
//   ).then(response => response.json());
// }

// const myHeaders = new Headers();
// myHeaders.append("apikey", "{HfLUXlTQb06iHBVUlFrCYPtznjSyE7pW}");

// const requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };

// export async function fetchConvertor() {
// fetch(`${BASE_URL}/convert?to={to}&from={from}&amount={amount}`, requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
// }

// export async function fetchLatest() {
// fetch(`${BASE_URL}/fixer/latest?symbols={symbols}&base={base}`, requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
// }

// export async function fetchUSD() {
//   fetch(`${BASE_URL}/fixer/latest?symbols={symbols}&base={base}`, requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
//   }