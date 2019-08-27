
const getLugarLatLng = async(dir) =>  {

  const encodedUlr = encodeURI(dir);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUlr }`,
    headers: {'X-RapidAPI-Key': 'e08082fda0msh947732037ce19a0p180d58jsn6c8fbf31e2f7'}
  });

  const resp = await instance.get();

  if(resp.data.Results.length === 0){
    throw new Error(`No hay resultados para ${dir}`);
  }
const data = resp.data.Results[0];

const direccion = data.name;
const lat = data.lat;
const lng = data.lon;

return {
  direccion,
  lat,
  lng
 }
}

module.exports = {
  getLugarLatLng
}
