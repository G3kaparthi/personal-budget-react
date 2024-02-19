import React from 'react';

import {
    Link
  } from "react-router-dom";

function Menu() {
  return (
    <nav 
    role="navigation" 
    aria-label="Main Navigation"
    itemScope
    itemType="https://schema.org/SiteNavigationElement"
    >
    <ul>
         <li><Link itemprop="url" to="/">Home</Link></li>
        <li><Link itemprop="url" to="/about">About</Link></li>
        <li><Link itemprop="url" to="/login">Login</Link></li>
    </ul>
</nav>
  );
}

export default Menu; 
