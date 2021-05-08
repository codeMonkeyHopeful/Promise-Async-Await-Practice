// Task 4: get the neighbor countries of Columbia

const fetchCountry = async (alpha3Code) => {
  try {
    const res = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${alpha3Code}`
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const getCountryAndNeighbors = async () => {
  const columbiaData = await fetchCountry("col");

  console.log(columbiaData.borders);

  const neighboringCountryData = await Promise.all(
    columbiaData.borders.map((border) => {
      return fetchCountry(border);
    })
  );
  console.log(neighboringCountryData);
};

getCountryAndNeighbors();
