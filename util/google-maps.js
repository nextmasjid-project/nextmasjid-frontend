import { Loader } from '@googlemaps/js-api-loader';

const GOOGLE_MAPS_AUTH_KEY = 'AIzaSyDsepiQWyfU33Z7huHIAiIGbH511eAmSwk'

const loader = new Loader({
  apiKey: GOOGLE_MAPS_AUTH_KEY,
});

export default loader;
