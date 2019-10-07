import React, { useEffect, useState } from 'react';

import { FaArrowLeft } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import serviceCountrys from '../../services/serviceCountrys'

export default function Country(props) {

    const [country, setCountry] = useState('')

    const countryName = props.match.params.namecountry
    document.body.style.backgroundColor = props.theme.theme.secondaryColorBackground;

    useEffect(() => {

        async function loadCountry() {

            const response = await serviceCountrys.getCountryCode(countryName);
            console.log(response)
            setCountry(response)

        }
        loadCountry();

    }, [countryName]);

    return (
        <>

            {
                country ?

                    <>

                        <div className="bar-action">
                            <Link to="/">
                                <button className="btn-back" style={{ background: props.theme.theme.primaryColorBackground, color: props.theme.theme.primaryColorTitle }}> <FaArrowLeft color='#d3d3d3' />  <span style={{ marginLeft: 5 }}> Back </span> </button>
                            </Link>
                        </div>

                        <div className="country-detail">

                            <div><img src={country.flag} /></div>

                            <div>
                                <div className="grid-box">

                                <div className="box" style={{ color: props.theme.theme.primaryColorTitle }}>
                                    <div className="text">
                                        <ul>
                                            <li className="title-detail"><span><strong> {country.name}</strong> </span></li>
                                            <li><span><strong>Native Name:</strong> {country.nativeName}</span></li>
                                            <li><span><strong>Population:</strong> {country.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span></li>
                                            <li><span><strong>Region:</strong> {country.region}</span></li>
                                            <li><span><strong>Sub Region:</strong> {country.subregion}</span></li>
                                            <li><span><strong>Capital:</strong> {country.capital}</span></li>
                                        </ul>
                                    </div>
                                    <div className="text">
                                        <ul>
                                            <li><span><strong>Top Level Domain:</strong> {country.topLevelDomain}</span></li>
                                            <li><span><strong>Currencies:</strong> {country.currencies ? country.currencies[0].name : null}</span></li>
                                            <li><span><strong>Languages:</strong> {

                                                country ?

                                                    country.languages.map(lang => (
                                                        <span key={lang.name}> {lang.name} </span>
                                                    ))

                                                    : null

                                            }</span></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="border-country" style={{ color: props.theme.theme.primaryColorTitle, display: country.borders.length === 0 ? 'none' : null }}>
                                    Border Countries:
            
                        {

                            country ?

                                country.borders.map(border => (
                                    <Link key={border} to={{ pathname: `/country/${border}` }}>
                                        <button className="btn-border" style={{background: props.theme.theme.primaryColorBackground, color: props.theme.theme.primaryColorTitle }}>  <span style={{ marginLeft: 5 }}> {border} </span> </button>
                                    </Link>
                                ))

                                : null

                        
                        }

                                </div>

                                </div>


                            </div>

                        </div>

                    </>

                    : null
            }
        </>
    )
}