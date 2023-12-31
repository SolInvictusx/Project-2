import reactLakeImg from '../assets/img/react-lake.jpg';
import chromeRiverImg from '../assets/img/chrome-river.jpg';
import breadCrumbImg from '../assets/img/breadcrumb-trail.jpg';
import reduxWoodsImg from '../assets/img/redux-woods.jpg';

export const CAMPSITES = [
    {
        id: 0,
        name: 'Virgo Lake Campground',
        image: reactLakeImg,
        elevation: 1233,
        featured: false,
        description:
            'Nestled in the foothills of the Oregon, this campground on the shores of the pristine Virgo Lake is a favorite for fly fishers.'
    },
    {
        id: 1,
        name: 'River Campground ',
        image: chromeRiverImg,
        elevation: 877,
        featured: false,
        description:
            'Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the River.'
    },
    {
        id: 2,
        name: 'Mountain Adventure',
        image: breadCrumbImg,
        elevation: 2901,
        featured: false,
        description:
            'Let us be your guide to this off-the-beaten-path, hike-in-only campground.'
    },
    {
        id: 3,
        name: 'Upper Pines',
        image: reduxWoodsImg,
        elevation: 42,
        featured: true,
        description:
            "Nestled amidst the breathtaking beauty of Yosemite lies a serene retreat where nature enthusiasts can immerse themselves in towering sequoias, crystal-clear streams, and awe-inspiring granite cliffs."
    }
];
