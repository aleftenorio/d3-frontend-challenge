import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import serviceCountrys from '../../services/serviceCountrys'

export default function Dashboard({ theme }) {

    const [country, setCountry] = useState([])
    const [searchName, setSearchName] = useState('')
    const [searchRegion, setSearchRegion] = useState('')

    const [messageNotCountrys, setmessageNotCountrys] = useState(false)

    document.body.style.backgroundColor = theme.theme.secondaryColorBackground;

    useEffect(() => {

        if (searchName !== '') {

            async function loadCountrysSearchName() {

                setSearchRegion('all');

                const response = await serviceCountrys.getCountryName(searchName);

                if (response.length === 0) {
                    setmessageNotCountrys(true)
                } else {
                    setmessageNotCountrys(false)
                }

                setCountry(response);
            }
            loadCountrysSearchName();
        } else {

            setmessageNotCountrys(false)

            async function loadCountrys() {
                const response = await serviceCountrys.getAllCountrys();
                setCountry(response);
            }
            loadCountrys();
        }

    }, [searchName]);

    useEffect(() => {

        if (searchRegion !== '') {

            async function loadCountrysSearchRegion() {

                setSearchName('')

                const response = searchRegion === 'all' ? await serviceCountrys.getAllCountrys() : await serviceCountrys.getCountryRegion(searchRegion);

                if (response.length === 0) {
                    setmessageNotCountrys(true)
                } else {
                    setmessageNotCountrys(false)
                }

                setCountry(response);
            }
            loadCountrysSearchRegion();

        }

    }, [searchRegion]);

    return (
        <>

            <div className="bar-action">
                <div className="input-group">
                    <FaSearch className="icon" color='#d3d3d3' />
                    <input
                        type="email"
                        id="email"
                        placeholder="Search for a country..."
                        value={searchName}
                        onChange={event => setSearchName(event.target.value)}
                        style={{ backgroundColor: theme.theme.primaryColorBackground, color: theme.theme.primaryColorTitle }}
                    />
                </div>
                <div className="menu">
                    <select onChange={event => setSearchRegion(event.target.value)} value={searchRegion} style={{ backgroundColor: theme.theme.primaryColorBackground, color: theme.theme.primaryColorTitle }}>
                        <option value="all">Filter by Region</option>
                        <option value="africa">Africa</option>
                        <option value="americas">Americas</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select>
                </div>

            </div>


            {
                messageNotCountrys ? <div className="message" style={{ color: theme.theme.primaryColorTitle }}>  No country found for this search... </div> : null
            }

            <div className="countrys">

                {
                    country.map(country => (


                        <div key={country.name} style={{ backgroundColor: theme.theme.primaryColorBackground }}>

                            <img src={country.flag} />

                            <div className="country-info" style={{ color: theme.theme.primaryColorTitle }}>

                                <ul>
                                    <li className="title"><span><strong> <Link to={{ pathname: `/country/${country.alpha3Code}` }} className="link-country"> {country.name} </Link></strong> </span></li>
                                    <li><span><strong>Population:</strong> {country.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span></li>
                                    <li><span><strong>Region:</strong> {country.region}</span></li>
                                    <li><span><strong>Capital:</strong> {country.capital}</span></li>
                                </ul>

                            </div>

                        </div>


                    ))
                }



            </div>

        </>
    )
}