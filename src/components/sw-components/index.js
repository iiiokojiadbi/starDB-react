import { PersonList } from './PersonList';
import { PlanetList } from './PlanetList';
import { StarshipList } from './StarshipList';
import { PersonDetails } from './PersonDetails';
import { PlanetDetails } from './PlanetDetails';
import { StarshipDetails } from './StarshipDetails';
import WithContent from './../HOCHelpers';

const PeoplePage = WithContent(PersonDetails, PersonList);
const PlanetPage = WithContent(PlanetDetails, PlanetList);
const StarshipsPage = WithContent(StarshipDetails, StarshipList);

export { PeoplePage, PlanetPage, StarshipsPage };
