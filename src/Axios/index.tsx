import axios from 'axios';
import { config } from '../config/common';

let baseURL = config().rest_url; // dev server
axios.defaults.baseURL = baseURL
axios.defaults.timeout = 15000

export const rootURL = baseURL;
export default axios;
