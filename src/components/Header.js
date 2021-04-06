import React from 'react'
import { Link } from "gatsby"
import SelectLanguage from './SelectLanguage';
import {FormattedMessage} from "react-intl";

const Header = (props) => {
    return (
        <div
            style={{
                background: 'rebeccapurple',
                marginBottom: '1.45rem',
            }}
        >
            <div
                style={{
                    margin: '0 auto',
                    maxWidth: 960,
                    padding: '1.45rem 1.0875rem',
                }}
            >
                <h1 style={{margin: 0}}>
                    <Link
                        to={`/${props.currentLang}/`}
                        style={{
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        <FormattedMessage id="Header title"/>
                    </Link>
                    {(props.currentLang === 'ru') && (
                        <>
                            <div>РОССИЯ</div>
                        </>
                    )}
                </h1>
                <SelectLanguage langs={props.langs}/>
            </div>
        </div>
    )
}

export default Header;
