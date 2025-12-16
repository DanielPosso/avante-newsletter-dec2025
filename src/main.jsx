import React from 'react';
import { createRoot } from 'react-dom/client';
import AvanteNewsletter from '../v2NewsletterArtifact.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AvanteNewsletter />
  </React.StrictMode>
);
