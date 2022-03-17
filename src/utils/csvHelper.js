const csvToArray = (file) => {
  const csvHeader = file.slice(0, file.indexOf(`\n`)).split(",");
  const csvRows = file.slice(file.indexOf(`\n`) + 1).split(`\n`);
  const array = csvRows.map((i) => {
    const values = i.split(",");
    const obj = csvHeader.reduce((object, header, index) => {
      object[header] = values[index];
      return object;
    }, {});
    return obj;
  });
  return array;
};

const headerKeys = (array) => Object.keys(Object.assign({}, ...array));

const getCountry = (code, array) => {
  return array.find((country) => country.country_code === code);
};

export default { csvToArray, headerKeys, getCountry };
