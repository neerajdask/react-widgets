import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dropdown = ({ options }) => {
    const renderdOptions = options.map((option) => {
        return (
            <div className='item' key={option.value}>
                {option.label}
            </div>
        );
    });
    return (
        // <div>
        <div className='ui form'>
            <div className='field'>
                <label className='label'>Select a color</label>
                <div className='ui selection dropdown visible active'>
                    <i className='dropdown icon'></i>
                    <div className='text'>Select color</div>
                    <div className='menu visible transition'>
                        {renderdOptions}
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
};
export default Dropdown;
