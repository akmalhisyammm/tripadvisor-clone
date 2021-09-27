import {
  bedOutline,
  ticketOutline,
  restaurantOutline,
  chatboxOutline,
} from 'ionicons/icons';
import { Menu } from 'types/interfaces';

export const MENUS: Array<Menu> = [
  {
    id: 'menu_1',
    label: 'Hotels',
    icon: bedOutline,
  },
  {
    id: 'menu_2',
    label: 'Things to do',
    icon: ticketOutline,
  },
  {
    id: 'menu_3',
    label: 'Restaurant',
    icon: restaurantOutline,
  },
  {
    id: 'menu_4',
    label: 'Forums',
    icon: chatboxOutline,
  },
];
