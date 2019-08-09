import React from 'react'

const CardContent = ({value}) => {
    return (
        <ul>
            <li>
                <b>Country:</b>
                {value.message}
            </li>
            <li>
                <b>Population:</b>
                {value.population}
            </li>
            <li>
                <b>Capital:</b>
                {value.capital}
            </li>
            <li>
                <b>Region:</b>
                {value.region}
            </li>
            <li>
                <b>Language:</b>
                {value.language}
            </li>
        </ul>
    )
}

export default CardContent
