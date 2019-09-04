import React from 'react'

const CardContent = ({value}) => {
    console.log("++++++++++++++++ value", value);
    const languages = !value.language ? (
        <span>English</span>
    ) : (
        value.language.map(item => (
            <span key={value.language.indexOf(item)}>{item.name}, </span>
        ))
    )
    return (
        <ul>
            <li>
                <b>Country: </b>
                {value.message}
            </li>
            <li>
                <b>Population: </b>
                {value.population}
            </li>
            <li>
                <b>Capital: </b>
                {value.capital}
            </li>
            <li>
                <b>Region: </b>
                {value.region}
            </li>
            <li>
                <b>Language: </b>
                {languages}
            </li>
        </ul>
    )
}

export default CardContent
