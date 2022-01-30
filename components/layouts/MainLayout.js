import React from 'react';

export default function mainLayout(props) {
  return (
     <>
        <header>This is the Header</header>
        <main>{props.children}</main>
        <header>This is the footer</header>
     </>
  )
}
