import { Place } from 'types/interfaces';

interface PlacesData {
  featured_one: Array<Place>;
  featured_two: Array<Place>;
  featured_three: Array<Place>;
}

export const PLACES: PlacesData = {
  featured_one: [
    {
      id: 'featured_one_1',
      name: 'Austin',
      image: 'https://via.placeholder.com/500.jpg',
    },
    {
      id: 'featured_one_2',
      name: 'Nashville',
      image: 'https://via.placeholder.com/500.jpg',
    },
    {
      id: 'featured_one_3',
      name: 'New York City',
      image: 'https://via.placeholder.com/500.jpg',
    },
    {
      id: 'featured_one_4',
      name: 'Washington DC',
      image: 'https://via.placeholder.com/500.jpg',
    },
  ],
  featured_two: [
    {
      id: 'featured_two_1',
      name: 'Charleston',
      image: 'https://via.placeholder.com/500.jpg',
    },
    {
      id: 'featured_two_2',
      name: 'Gatlinburg',
      image: 'https://via.placeholder.com/500.jpg',
    },
    {
      id: 'featured_two_3',
      name: 'Park City',
      image: 'https://via.placeholder.com/500.jpg',
    },
    {
      id: 'featured_two_4',
      name: 'Sedona',
      image: 'https://via.placeholder.com/500.jpg',
    },
  ],
  featured_three: [
    {
      id: 'featured_three_1',
      name: 'New York City',
      image: 'https://via.placeholder.com/500.jpg',
    },
    {
      id: 'featured_three_2',
      name: 'Singapore',
      image: 'https://via.placeholder.com/500.jpg',
    },
    {
      id: 'featured_three_3',
      name: 'Rome',
      image: 'https://via.placeholder.com/500.jpg',
    },
    {
      id: 'featured_three_4',
      name: 'Paris',
      image: 'https://via.placeholder.com/500.jpg',
    },
  ],
};
