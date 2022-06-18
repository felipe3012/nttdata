import React from 'react';
import axios from 'axios';
import './ContentApp.css';
import { Select } from './selectCountry' 
import { Pagination } from './tablePagination' 

export default class ContentApp extends React.Component {

    state = {
        locations: []
      }

    componentDidMount() {
        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjRmOTdiMTAzLTUyYzAtNGRjOC1iMjg3LWM3YmRjYzZlOGUxNyIsImlhdCI6MTY1NTUxNzkwNywic3ViIjoiZGV2ZWxvcGVyL2NkOTNlOTBjLWVlOTQtNjUwNS1iODhhLTAyYjgxZjMxYmU4MSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4Ni4xNDQuMTAwLjkzIl0sInR5cGUiOiJjbGllbnQifV19.rp15d1bEiocy0y1YX1lSYj0Cfs5ql-tBTdR7ryI3OMngK_Jb1SSK6Ewh8evvtm3wBc7_bCAW0KeM3Zo8FfGdNQ";
        axios.get('https://api.clashofclans.com/v1/leagues', 
        { headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Content-Type': 'application/json',
            'Ocp-Apim-Trace': 'true',
            'Authorization' : `Bearer ${token}`
        } })
            .then(res => {
            console.log(res.data);
            const locations = res.data;
            this.setState({ locations });
        })
    }

    render() {
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
    
}

export { ContentApp };