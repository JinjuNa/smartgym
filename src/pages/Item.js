import React from 'react';
import styled from 'styled-components';

export default function Item(props) {
    const icon = "icon-"+props.icon;
    return (
        <div>
            {props.id}
            <span className={icon}></span>
        </div>
    )
}