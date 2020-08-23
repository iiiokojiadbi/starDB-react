import { PersonList, StarshipList, PlanetList } from './ItemList';
import { PersonDetails, StarshipDetails, PlanetDetails } from './Details';
import WithContent from './../HOCHelpers';

const PeoplePage = WithContent(PersonDetails, PersonList);
const PlanetPage = WithContent(PlanetDetails, PlanetList);
const StarshipsPage = WithContent(StarshipDetails, StarshipList);

export { PeoplePage, PlanetPage, StarshipsPage };
