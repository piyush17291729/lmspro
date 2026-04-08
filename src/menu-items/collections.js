// assets
import { Book1, DocumentCode2, Home3, HomeTrendUp, I24Support, Profile2User, Security, SecurityUser, ShoppingCart } from 'iconsax-reactjs';

// icons
const icons = {
  customer: Profile2User,
  loans: DocumentCode2,
  creditExecutive: Profile2User,
  sanctionManager: Security,
  sanctionHead: SecurityUser,
  loanOps: ShoppingCart,
  allCollection: Home3,
  preCollection: HomeTrendUp,
  postCollection: Profile2User,
  completedLoans: Book1,
  misReports: DocumentCode2,
  reminders: I24Support
};

// ==============================|| MENU ITEMS - SALES & LEADS ||============================== //

const collections = [
  {
    id: 'sales-leads',
    title: 'Sales & Leads',
    type: 'group',
    children: [{ id: 'customer', title: 'Customer', type: 'item', url: '/customer', icon: icons.customer, breadcrumbs: false }]
  },
  {
    id: 'loan-management',
    title: 'Loan Management',
    type: 'group',
    children: [
      { id: 'loans', title: 'Loans', type: 'item', url: '/loans', icon: icons.loans, breadcrumbs: false },
      { id: 'credit-executive', title: 'Credit Executive', type: 'item', url: '/credit-executive', icon: icons.creditExecutive, breadcrumbs: false },
      { id: 'sanction-manager', title: 'Sanction Manager', type: 'item', url: '/sanction-manager', icon: icons.sanctionManager, breadcrumbs: false },
      { id: 'sanction-head', title: 'Sanction Head', type: 'item', url: '/sanction-head', icon: icons.sanctionHead, breadcrumbs: false }
    ]
  },
  {
    id: 'disbursement-operation',
    title: 'Disbursement Operation',
    type: 'group',
    children: [{ id: 'loan-ops', title: 'Loan Ops >', type: 'item', url: '/loan-ops', icon: icons.loanOps, breadcrumbs: false }]
  },
  {
    id: 'collections',
    title: 'Collections',
    type: 'group',
    children: [
      { id: 'all-collection', title: 'All Collection', type: 'item', url: '/all-collection', icon: icons.allCollection, breadcrumbs: false },
      { id: 'pre-collection', title: 'Pre Collection', type: 'item', url: '/pre-collection', icon: icons.preCollection, breadcrumbs: false },
      { id: 'post-collection', title: 'Post Collection', type: 'item', url: '/post-collection', icon: icons.postCollection, breadcrumbs: false }
    ]
  },
  {
    id: 'loan-closure',
    title: 'Loan Closure',
    type: 'group',
    children: [{ id: 'completed-loans', title: 'Completed Loans >', type: 'item', url: '/completed-loans', icon: icons.completedLoans, breadcrumbs: false }]
  },
  {
    id: 'insights-reports',
    title: 'Insights & Reports',
    type: 'group',
    children: [
      { id: 'mis-reports', title: 'MIS Reports', type: 'item', url: '/mis-reports', icon: icons.misReports, breadcrumbs: false },
      { id: 'reminders', title: 'Reminders', type: 'item', url: '/reminders', icon: icons.reminders, breadcrumbs: false }
    ]
  }
];

export default collections;
