const BASE_URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

export async function apiUSD() {
  return await fetch(`${BASE_URL}&valcode=USD`)
}

export async function apiEUR() {
  return await fetch(`${BASE_URL}&valcode=EUR`)
}

export async function apiAll() {
    const response = await fetch(`${BASE_URL}`);
    const data = await response.json();
    return data;
}