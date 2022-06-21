import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './FilterClan.css';
import image from './clash.webp';
import Select from 'react-select'
import { text } from 'stream/consumers';

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjRmOTdiMTAzLTUyYzAtNGRjOC1iMjg3LWM3YmRjYzZlOGUxNyIsImlhdCI6MTY1NTUxNzkwNywic3ViIjoiZGV2ZWxvcGVyL2NkOTNlOTBjLWVlOTQtNjUwNS1iODhhLTAyYjgxZjMxYmU4MSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4Ni4xNDQuMTAwLjkzIl0sInR5cGUiOiJjbGllbnQifV19.rp15d1bEiocy0y1YX1lSYj0Cfs5ql-tBTdR7ryI3OMngK_Jb1SSK6Ewh8evvtm3wBc7_bCAW0KeM3Zo8FfGdNQ";
        
export default class FilterClan extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {name_clan: ''}; 
        this.state = {tag_clan: ''}; 
        this.state = {country: ''}; 
        this.state = {validate: true}; 
        this.state = {textoError: ''}; 

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeTag = this.handleChangeTag.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('/v1/locations', 
        { 
            headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization' : `Bearer ${token}`,
            'Content-Type': 'application/json'
        } })
            .then(res => {

            type Countries = {
                value: number;
                label: string;
            };

            const locations = res.data;
            let countries: Countries[] = [];
            locations.items.forEach(function (value: any) {
                if(value.isCountry){      
                    countries.push({
                        value: value.id,
                        label: value.name
                    })      
                }
            }); 
            this.setState({ countries });
        })
    } 

    handleChange(event:any) { this.setState({name_clan: event.target.value}); } 
    handleChangeTag(event:any) { this.setState({tag_clan: event.target.value}); }
    handleChangeCountry = (country:any) => {
        this.setState({ country }, () =>
          console.log(`opcion:`, this.state.country)
        );
      };

    handleSubmit(event:any) {
        let nameClanForm = 0;
        let tagClanForm = 0;
        let countryClanForm = 0;
        if(this.state.name_clan == "" || this.state.name_clan == null){
            nameClanForm += 1;
        }
        if(this.state.tag_clan == "" || this.state.tag_clan == null){
            tagClanForm += 1;
        } 
        if(this.state.country == "" || this.state.country == null){
            countryClanForm += 1;
        }
        if(nameClanForm+tagClanForm+countryClanForm == 3){
            this.setState({validate: true})
            this.setState({textoError: "* No selecciono ningun filtro de busqueda"})
            this.renderElement();
        }else if(nameClanForm+tagClanForm+countryClanForm == 1 || nameClanForm+tagClanForm+countryClanForm == 0){
            this.setState({validate: true})
            this.setState({textoError: "* Debe filtrar solo por un elemento del formulario"})
            this.renderElement();
        } else {
            if(nameClanForm == 1){
                if(tagClanForm == 1){
                    this.setState({validate: false})
                    this.consultaClanesCountry();  
                    setTimeout(() => {
                        this.props.handleSearch(this.state.listaClanes)
                    }, 900);
                }else{
                    this.setState({validate: false})
                    this.consultaClanesTag();  
                    setTimeout(() => {
                        this.props.handleSearch(this.state.listaClanes)
                    }, 900);
                }
            }else {
                this.setState({validate: false})
                this.consultaClanes();
                setTimeout(() => {
                    this.props.handleSearch(this.state.listaClanes)
                }, 900);
            }            
        }

        event.preventDefault();
    }

    renderElement() {
        if(this.state.validate){
            return <span className='filter__form__error'>{this.state.textoError}</span>;
        }
    }

    consultaClanes() {
        axios.get('/v1/clans', 
        { 
            params: {
                name: this.state.name_clan,
                limit: 5
            },
            headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization' : `Bearer ${token}`,
            'Content-Type': 'application/json'
        } })
            .then(res => {
            const listaClanes = res.data;  
            this.setState({ listaClanes });       
        })
    }

    consultaClanesCountry() {
        axios.get('/v1/clans', 
        { 
            params: {
                locationId: this.state.country.value,
                limit: 5
            },
            headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization' : `Bearer ${token}`,
            'Content-Type': 'application/json'
        } })
            .then(res => {
            const listaClanes = res.data;  
            this.setState({ listaClanes });       
        })
    }

    consultaClanesTag() {
        axios.get('/v1/clans/%'+this.state.tag_clan, 
        {
            headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization' : `Bearer ${token}`,
            'Content-Type': 'application/json'
        } })
            .then(res => {
            let listaClanes = res.data;  
            let clanTag= [];
            clanTag.push(listaClanes)  
            listaClanes = {items: clanTag}
            this.setState({ listaClanes });       
        })
    }

    render() {
        const { country } = this.state;
        return (  
            <div className="filter">
                <div className="filter__form">
                    <form className='filter__form__search'>
                        <h2 className="filter__form--title">Filtro de busqueda de clanes</h2>
                        <br/>
                        <label>Nombre:</label>
                        <input type="text" className="input" value={this.state.name_clan || ''} onChange={this.handleChange}  placeholder="Escribe aqui el nombre del clan !" />
                        <label>País:</label>
                        <Select className='filter__form__select' 
                            value={country}
                            onChange={this.handleChangeCountry} 
                            options={this.state.countries}/>
                        <label>Tag:</label>
                        <input type="text" className="input" value={this.state.tag_clan || ''} onChange={this.handleChangeTag}  placeholder="Escribe aqui el tag (código) del clan !" />
                        <br/><br/>
                        { this.renderElement() }
                        <br/>
                        <button className="button__primary" type="button" onClick={this.handleSubmit}> Buscar clan <i className="bi bi-search"></i> </button>                    
                    </form>
                </div>
                <div className="filter_img">
                    <img src={image} className="image" alt="work"/>
                </div>
            </div>
        );
    }
}

export { FilterClan };



    