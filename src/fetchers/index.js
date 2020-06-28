import { endpoints } from './config'
import fetcher from './fetcher';

export const getDiscoverMovies = () => fetcher(endpoints.discover);

export const searchMovies = (query) => fetcher(endpoints.search, { query });
