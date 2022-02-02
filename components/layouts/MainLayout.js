import Header1 from '../Header/Header1/Header1';
import React from 'react';

export default function mainLayout(props) {
  return (
     <>
        <Header1 />
        <main>{props.children}</main>
        <header>This is the footer</header>
     </>
  )
}
