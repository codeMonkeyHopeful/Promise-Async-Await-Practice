// Task 3: using https://restcountries.eu/ API,
// get country where alpha3Code = col

const fetchData = async () => {
  //grab the data from the API, wait for response before moving on
  const res = await fetch("https://restcountries.eu/rest/v2/alpha/col");

  //consver to JSON so we can manipulate it if needed
  const country = await res.json();

  console.log(country);
};

fetchData();
