import React, { useState } from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';

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
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <Dropdown
                selected={selected}
                onSelectedChange={setSelected}
                options={options}
            />
        </div>
    );
};

// <Accordion items={items} />
