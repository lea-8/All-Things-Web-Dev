import { csv } from 'd3';

const carUrl = 'https://gist.githubusercontent.com/curran/8c131a74b85d0bb0246233de2cff3f52/raw/194c2fc143790b937c42bf086a5a44cb3c55340e/auto-mpg.csv';
const sanFranTempUrl = 'https://gist.githubusercontent.com/curran/60b40877ef898f19aeb8/raw/9476be5bd15fb15a6d5c733dd79788fb679c9be9/week_temperature_sf.csv';
const countryPopulationUrl = 'https://gist.githubusercontent.com/curran/6cd1e224d76811b68df4/raw/12c93b2e53872d088331d939bdb790019f06dc32/populationByCountry2015.csv';
const countryReligionUrl = 'https://gist.githubusercontent.com/curran/4320a57d344358257ca9/raw/2f5eeb180488f442290fad28fb5041f5d4f2b047/religionByCountryTop5.csv';
const peopleUrl = 'https://gist.githubusercontent.com/llagerlof/928847ece919d8549112/raw/a36e7bb9c7a16342af7b46e1bc2f4f6e3b01290d/people.csv';

const csvUrl = peopleUrl;

export const getData = async () => {
  const data = await csv(csvUrl);
  
  // Have a look at the attributes available in the console!
  console.log(data[0]);

  return data;
};