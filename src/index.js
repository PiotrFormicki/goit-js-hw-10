import Notiflix from 'notiflix';
import { fetchCountry } from './fetchCountries';
import debounce from 'lodash.debounce';
import './css/styles.css';

const inputText = document.querySelector('#search-box');
const countriesResult = document.querySelector('.country-list');
const countriesData = document.querySelector('.country-info');
const DEBOUNCE_DELAY = 300;

const getGivenCountry = ({ name, capital, population, flags, languages }) => {
  const countriesLanguages = languages
    .map(language => language.name)
    .join(', ');
  countriesData.innerHTML = '';
  countriesResult.innerHTML = '';
  countriesData.innerHTML = `<div class = "country-info__box">
  <img class="img-info" src="${flags.svg}">
  <p class="country-name">${name}
  </p>
  </div>
  <a>
  <p class ="country-capital">
  Capital: ${capital}</span> </p>
  <a class ="country-info__link">
  <p>Population: ${population} </p>
   </a><a>
   <p>Languages: ${countriesLanguages}</p> 
   </a>`;
};

function createListOfExistingCountries(countries) {
  const countriesArray = countries.map(({ name, flags }) => {
    const countryBlock = document.createElement('div');
    countryBlock.classList.add('card');
    countryBlock.innerHTML = `
    
    <img class="img-block" src="${flags.svg}">
    <p class="block-name">${name}</p>

    `;

    return countryBlock;
  });

  countriesResult.innerHTML = '';
  countriesData.innerHTML = '';
  countriesResult.append(...countriesArray);
}

const inputEvent = () => {
  const country = inputText.value;

  if (country === '') {
    countriesData.innerHTML = '';
    countriesResult.innerHTML = '';
  } else {
    if (textLimitter(country)) {
      fetchCountry(country)
        .then(countries => {
          if (countries.length > 10) {
            Notiflix.Notify.failure(
              'Too many matches found. Please enter a more specific name.'
            );
            return;
          }
          if (countries.length === 1) {
            return getGivenCountry(countries[0]);
          }
          return createListOfExistingCountries(countries);
        })
        .catch(() => {
          countriesData.innerHTML = '';
          countriesResult.innerHTML = '';
          Notiflix.Notify.failure('Oops, there is no country with that name');
        });
    } else {
      Notiflix.Notify.info('You can use only letters and spaces');
    }
  }
};
function textLimitter(str) {
  return /^[a-zA-Z\s ]+$/.test(str);
}
inputText.addEventListener('input', debounce(inputEvent, DEBOUNCE_DELAY));
