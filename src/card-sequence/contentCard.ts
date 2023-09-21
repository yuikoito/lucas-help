import checkmark from '/svgs/checkmark-done.svg';
import keyLoginCircle from '/svgs/key-login-circle.svg';
import svgNotepad from '/svgs/svg-notepad.svg';
import phoneCall from '/svgs/phone-call.svg';
import document from '/svgs/document.svg';

const cardContent = [
  {
    title: 'Request',
    svg: checkmark,
    content: 'To get started, fill out the form on this page.',
  },
  {
    title: 'Portal access',
    svg: keyLoginCircle,
    content: 'Track your journey with the assistance of the Velox Generation team.',
  },
  {
    title: 'Infrastructure analysis',
    svg: svgNotepad,
    content: 'Receive your fiber coverage analysis quickly.',
  },
  {
    title: 'Contact Velox',
    svg: phoneCall,
    content: 'Wait for our proposal to close the best rate conditions.',
  },
  {
    title: 'Release',
    svg: document,
    content: 'Enjoy the connection released in your environment.',
  },
];

export {cardContent};

