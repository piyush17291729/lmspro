// project-imports
import dashboard from './dashboard';
import collections from './collections';
import pages from './pages';
import utilities from './utilities';
import support from './support';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [dashboard, ...collections, pages, utilities, support]
};

export default menuItems;
