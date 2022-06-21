import React, {useState, useEffect} from 'react';
import { HeaderApp } from './HeaderApp'  
/* import { ContentApp } from './ContentApp'  */
import { FilterClan } from './FilterClan'  
import { ListClan } from './ListClan'  
import { ListItem } from './ListItem'  
import { ClashCounter } from './ClashCounter'  
import { FooterApp } from './FooterApp' 
import './App.css';
import image from './clash-logo.png';

export default class App extends React.Component<any, any> {

constructor(props: any) {
    super(props);

    this.state = {clanes: []}; 
}

componentDidMount() {
  this.renderElement()
}

handleSearch = (e:any) => {
  const clanes = e.items;
  this.setState({ clanes });
}

renderElement() {
  if(this.state.clanes.length === 0){ 
      return  <div className='Clanes__image'>
                <img src={image} className="Clanes__image__list" alt="clashofclans"/>
                <h2 className='Clanes__image__text'>¡No se encontraron clanes con los filtros seleccionados!</h2>
              </div>;
  }else{
    return "";
  }
}

render() {
  return (  
    <div className="App">
      <header>
        <HeaderApp/>
      </header>
      <section>
        <div className="container">
          <div className="container__create">
            <FilterClan handleSearch={this.handleSearch}/>
          </div>
          <div className="container__task">
            <ClashCounter cantidad={this.state.clanes.length}/>
            <ListClan>
              {this.state.clanes.map((clan : any) => (
                <ListItem tag={clan.tag} name={clan.name} country={clan.location.name} copas={clan.clanPoints} escudo={clan.badgeUrls.medium} />
              ))}
            </ListClan>
            <div>
              { this.renderElement() }
            </div>
          </div>
        </div>
      </section>
      <footer>
        <FooterApp/>
      </footer>
    </div>
    );
  }
}

export { App };
