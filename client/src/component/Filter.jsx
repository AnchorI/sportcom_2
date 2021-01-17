import React,{Component} from 'react';
import {Menu, Input} from "semantic-ui-react";





const Filter = ({searchQuery, filterBy, setSearchQuery},) => {

    return(
        <Menu>
            <Menu.Item

                 active={searchQuery === 'BMX'}
                onClick={setSearchQuery.bind(this, 'BMX')}>BMX
            </Menu.Item>
            <Menu.Item

                 active={searchQuery === 'Skate'}
                onClick={setSearchQuery.bind(this, 'Skate')}>Скейт
            </Menu.Item>
            <Menu.Item

                active={searchQuery === 'Scooter'}
                onClick={setSearchQuery.bind(this, 'Scooter')}>Самокат
            </Menu.Item>
        </Menu>
    );
};

export default Filter;

