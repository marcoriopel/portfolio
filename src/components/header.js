import React from 'react';

export default function Header(props) {
    return <h1 style={{ color: `white`, fontSize: `100px` }}>{props.headerText}</h1>;
}
