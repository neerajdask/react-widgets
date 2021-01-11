import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
import Link from './components/Link';

const items = [
    {
        title: 'What is React?',
        content: 'Front end JS library',
    },
    {
        title: 'Why React?',
        content: 'Easy to use and engineers favorite',
    },
    {
        title: 'How do you use it?',
        content: 'Create reusable code!',
    },
];

const options = [
    {
        label: 'A color Red',
        value: 'red',
    },
    {
        label: 'Shade of blue',
        value: 'blue',
    },
    {
        label: 'Tangerine..',
        value: 'orange',
    },
];

export default () => {
    const [selected, setSelelcted] = useState(options[0]);
    return (
        <div>
            <Header />
            <Route path='/'>
                <Accordion items={items} />
            </Route>

            <Route path='/list'>
                <Search />
            </Route>

            <Route path='/dropdown'>
                <Dropdown
                    label='Select a color'
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelelcted}
                />
            </Route>

            <Route path='/translate'>
                <Translate items={items} />
            </Route>
        </div>
    );
};
