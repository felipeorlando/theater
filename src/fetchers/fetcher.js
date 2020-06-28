import { apiURL } from './config';
import { keysToCamelCase } from 'helpers/keysToCamelCase';

const fetcher = async (endpoint, parameters = {}) => {
  const url = apiURL(endpoint, parameters);
  const response = await fetch(url);
  const data = await response.json();
  return keysToCamelCase(data);
}

export default fetcher;
