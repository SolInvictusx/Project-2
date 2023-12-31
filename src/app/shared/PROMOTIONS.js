import breadCrumbImg from '../assets/img/breadcrumb-trail.jpg';
import weedsImg from '../assets/img/weeds.jpg';
import bootsImg from '../assets/img/boots.jpg';
import asyncImg from '../assets/img/mount-promise.jpg';

export const PROMOTIONS = [
    {
        id: 0,
        name: 'Mountain Adventure',
        image: breadCrumbImg,
        featured: true,
        description:
            'Tucked away in the picturesque landscapes of Washington lies a tranquil oasis for outdoor enthusiasts seeking respite amidst lush forests, vibrant wildflowers, and breathtaking coastal vistas.'
    },
    {
        id: 1,
        name: 'Into The Weeds',
        image: weedsImg,
        featured: false,
        description:
            '5 days deep in the Redux National Monument, far from the beaten path, with only a reducer in your backpack. Guide provided.'
    },
    {
        id: 2,
        name: 'Bootstrap Teardown',
        image: bootsImg,
        featured: false,
        description: `In this weekend workshop, we'll rebuild your bootstraps from scratch, so you're ready for next-level excursions.`
    },
    {
        id: 3,
        name: 'Asynchronous Rendezvous',
        image: asyncImg,
        featured: false,
        description:
            'Meet up with your guide at the top of Promise Mountain. Or, try to. Good luck!'
    }
];
