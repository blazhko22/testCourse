export type Currencies = keyof typeof currencyFullName;
export type CurrencyFullName = { [key in Currencies]: string };
export type CurrencyCodeMap = { [key in Currencies]: string };
export type CurrencyCode = typeof currencyCodes[number];

export const currencyFullName = {
  EUR: 'Euro',
  UAH: 'Ukrainian Hryvnia',
  USD: 'US Dollar',
} as const;
export const currencyCodes = [ 
  'EU',
  'UA',
  'US',
] as const;

export const currencyCodeMap = Object.fromEntries(
  (Object.keys(currencyFullName) as Array<Currencies>).map(el => [
    el,
    el[0] + el[1],
  ])
) as { [key in Currencies]: CurrencyCode };

export const setCommasInNumber = (value: string) => {
  const splitValue = value.split('.');
  let result = '';
  let counter = 0;

  for (let i = splitValue[0].length - 1; i >= 0; i--) {
    result += splitValue[0][i];
    counter += 1;

    if (counter === 3) {
      counter = 0;
      result += ',';
    }
  }

  result = result.split('').reverse().join('');

  if (splitValue[1] !== undefined) result += '.' + splitValue[1];

  if (result[0] === ',') {
    result = result.replace(result[0], '');
  }

  return result;
};

export const errorMessage =
  'Access block for you, You have reached maximum 3 limit per minute in free account, Please stop extra hits or upgrade your account. Restriction remove after 1 minute.';
