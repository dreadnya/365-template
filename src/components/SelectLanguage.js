import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "gatsby"
import { FormattedMessage } from 'react-intl';

const SelectLanguage = (props) => {
  const links = props.langs.map(lang =>
    <li selected={lang.selected} key={lang.langKey}>
      <Link to={lang.link} style={{
        color: 'white'
      }}>
        {lang.langKey}
      </Link>
    </li>
  );

  return (
    <section>
      <header style={{
        color: 'white'
      }}>
        <FormattedMessage id="selectLanguage" />
      </header>
      <ul>
        {links}
      </ul>
    </section>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;
