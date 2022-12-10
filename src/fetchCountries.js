import Notiflix from 'notiflix';

const getUrl = name =>
  `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`;
export function fetchCountry(name) {
  const trimmedName = name.trim();
  if (trimmedName.length === 0) return;

  const url = getUrl(trimmedName);
  return fetch(url)
    .then(response => {
      if (!response) {
        Notiflix.Notify.failure('Failed to fetch countries API');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      if (data.length > 0) {
        return data;
      }
    })
    .catch(error => {
      console.error(error);
    });
}
