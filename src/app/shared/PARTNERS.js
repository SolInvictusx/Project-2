import bootStrapLogo from '../assets/img/bootstrap-logo.png';
import gitLogo from '../assets/img/git-logo.png';
import mongoLogo from '../assets/img/mongo-logo.png';
import flannels from '../assets/img/Flannels.jpg';

export const PARTNERS = [
    {
        id: 0,
        name: 'Bootstrap Outfitters',
        image: bootStrapLogo,
        featured: false,
        description:
            "Bootstrap Outfitters supplies you with the gear you need at prices you can't beat."
    },
    {
        id: 1,
        name: 'Git Out Expeditions',
        image: gitLogo,
        featured: false,
        description:
            'Join Git Out Expeditions to explore new horizons with a group of other adventurers!'
    },
    {
        id: 2,
        name: 'Mongo Fly Shop',
        image: mongoLogo,
        featured: false,
        description:
            'Need a new fishing pole, a tacklebox, or flies of all kinds? Stop by Mongo Fly Shop.'
    },
    {
        id: 3,
        name: 'Fireside Apparel',
        image: flannels,
        featured: true,
        description:
            'From polar fleeces to swimsuits, hiking boots to waders, a visit to our shop will be sure to get you covered.'
    }
];
