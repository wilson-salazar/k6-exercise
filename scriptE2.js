import http from 'k6/http';
import { check, sleep } from 'k6';

//opcion para no escribir esto en la linea del run consola
export const options = {
  vus: 15,
  duration: '1m'
};

export default function () {
  
  const res = http.get('https://httpbin.test.k6.io');
  check(res, { 'Is status 200': (r)=> r.status === 200 });
  
  sleep(1);
}