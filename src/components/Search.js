import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('ronaldo');
    const [debuncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timerID = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timerID);
        };
    }, [term]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get(
                'https://en.wikipedia.org/w/api.php',
                {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: debuncedTerm,
                    },
                }
            );
            setResults(data.query.search);
        };
        search();
    }, [debuncedTerm]);

    // useEffect(() => {
    //     const search = async () => {
    //         const { data } = await axios.get(
    //             'https://en.wikipedia.org/w/api.php',
    //             {
    //                 params: {
    //                     action: 'query',
    //                     list: 'search',
    //                     origin: '*',
    //                     format: 'json',
    //                     srsearch: term,
    //                 },
    //             }
    //         );
    //         setResults(data.query.search);
    //     };

    //     if (term && !results.length) {
    //         search();
    //     } else {
    //         const timerID = setTimeout(() => {
    //             if (term) {
    //                 search();
    //             }
    //         }, 500);

    //         return () => {
    //             clearTimeout(timerID);
    //         };
    //     }
    // }, [term, results.length]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className='item'>
                <div className='right floated content'></div>
                <a
                    className='ui button'
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                    {' '}
                    GO
                </a>
                <div className='content'>
                    <div className='header'>{result.title}</div>
                    <span
                        dangerouslySetInnerHTML={{
                            __html: result.snippet,
                        }}></span>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter search term</label>
                    <input
                        type='text'
                        className='input'
                        value={term}
                        onChange={(e) => {
                            setTerm(e.target.value);
                        }}
                    />
                </div>
            </div>

            <div className='ui celled list'>{renderedResults}</div>
        </div>
    );
};
export default Search;
