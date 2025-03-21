import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'
import "../scss/Error.scss"

const ErrorPage = () => {

    const error = useRouteError();
    console.log(error)
    console.log(error.data)

    return (
        <div className="box">
            <div className="box__ghost">
                <div className="symbol"></div>
                <div className="symbol"></div>
                <div className="symbol"></div>
                <div className="symbol"></div>
                <div className="symbol"></div>
                <div className="symbol"></div>

                <div className="box__ghost-container">
                    <div className="box__ghost-eyes">
                        <div className="box__eye-left"></div>
                        <div className="box__eye-right"></div>
                    </div>
                    <div className="box__ghost-bottom">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="box__ghost-shadow"></div>
            </div>

            <div className="box__description">
                <div className="box__description-container">
                    <div className="box__description-title">Whoops!</div>
                    <div className="box__description-text">{error.data}</div>
                </div>

                <NavLink to="/react-country-web" className="box__button">Go back</NavLink>

            </div>

        </div>
    )
}

export default ErrorPage