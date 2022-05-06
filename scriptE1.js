import http from 'k6/http';
import { check, sleep } from 'k6';

//opcion para no escribir esto en la linea del run consola
export const options = {
  vus: 5,
  duration: '1s'
};

export default function () {
  
  const res = http.get('https://pokeapi.co/api/v2/pokemon/ditto');
  check(res, { 'Is status 200': (r)=> r.status === 200 });
  
  sleep(1);
}
