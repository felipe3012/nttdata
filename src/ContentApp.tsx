import React from 'react';
import './ContentApp.css';
import { Select } from './selectCountry' 
import { Pagination } from './tablePagination' 

function ContentApp() {
    return (     
        <div className='Contenido'>
            <Pagination />
            <table>
                <thead>
                    <tr>
                        <th>Tag</th>
                        <th>Clan</th>
                        <th>País</th>
                        <th>Nivel</th>
                        <th>Liga</th>
                        <th>Escudo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='Contenido__subheader'>
                        <td></td>
                        <td>
                        <div className="input-group flex-nowrap">
                            <input type="text" className="form-control" placeholder="Filtrar por nombre de clan" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>
                        </td>
                        <td>
                            <Select />
                        </td>
                        <td></td>
                        <td>
                            <Select />
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Cell 1</td>
                        <td>Cell 2</td>
                        <td>Cell 3</td>
                        <td>Cell 4</td>
                        <td>Cell 5</td>
                        <td>Cell 5</td>
                    </tr>
                    <tr>
                        <td>Cell 1</td>
                        <td>Cell 2</td>
                        <td>Cell 3</td>
                        <td>Cell 4</td>
                        <td>Cell 5</td>
                        <td>Cell 5</td>
                    </tr>
                    <tr>
                        <td>Cell 1</td>
                        <td>Cell 2</td>
                        <td>Cell 3</td>
                        <td>Cell 4</td>
                        <td>Cell 5</td>
                        <td>Cell 5</td>
                    </tr>
                    <tr>
                        <td>Cell 1</td>
                        <td>Cell 2</td>
                        <td>Cell 3</td>
                        <td>Cell 4</td>
                        <td>Cell 5</td>
                        <td>Cell 5</td>
                    </tr>
                    <tr>
                        <td>Cell 1</td>
                        <td>Cell 2</td>
                        <td>Cell 3</td>
                        <td>Cell 4</td>
                        <td>Cell 5</td>
                        <td>Cell 5</td>
                    </tr>
                </tbody>
            </table>
            <div className='footerTable'>
                <p>Pagina 1 de 10</p>
            </div>
        </div>   
    );
}

export { ContentApp };