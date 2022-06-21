import './ListItem.css'; 
import copas from './copas.png';

function ListItem(props: any) {
    return (
        <div className='ClanItem'>
            <div className='ClanItem__total'>
                <img className="ClanItem__image" src={props.escudo} alt='logo_clan' />
                <div className='ClanItem__text'>
                    <p>{props.tag}</p>
                    <p>{props.name}</p>
                    <p>{props.country}</p>
                </div>
            </div>
            <div className='ClanItem__copa'>
                <p>{props.copas}</p>
                <img className="ClanItem__copa__img" src={copas} alt='logo_copa' />                  
            </div>
        </div>
    ); 
}

export { ListItem };