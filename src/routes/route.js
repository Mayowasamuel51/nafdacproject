import Frontdesk from '../components/Unit/unit1Osun/Frontdesk';
import Suspect from '../components/Suspect/SuspectForm/Suspect';
import SuspectSurety from '../components/MakeSurety/SuspectSurety'
const route = [
    { path: '/unit1Osun', exact: true, name: 'Unit1Osun' },
    {
        path: '/unit1Osun/frontdesk',
        exact: true,
        name: 'frondesk',
        component: Frontdesk
    },
    {
        path: '/unit1Osun/frontdesk/createsuspect', exact: true,
        name: 'Suspect',
        component: Suspect
    },

    {
        path: '/unit1Osun/edit-suspect-surety/:martic_number',
        exact: true, name: 'SuspectSurety',
        component: SuspectSurety
    },




]


export default route;