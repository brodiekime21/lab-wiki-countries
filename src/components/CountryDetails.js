

import { Link } from 'react-router-dom';

function CountryDetails({ alpha2Code, name, capital, area, borders = [] }) {

    
  return (
    <div className="col-7">
    <img src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`} alt="flag" />
      <h1>{name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {area} km
              <sup>2</sup>
            </td>
          </tr>
          {borders.length > 0 && (
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {borders.map((border) => (
                    <li key={border}>
                      <Link to={`/${border}`}>{border}</Link>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;


