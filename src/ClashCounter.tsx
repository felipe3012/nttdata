import './ClashCounter.css';

function ClashCounter(props: any) {    
    return (
        <div className="clashcounter">
            <h1 className="clashcounter__title">Lista de clanes</h1>
            <p className="clashcounter__tasks">Se han encontrado {props.cantidad} clanes diferentes</p>
        </div>
    ); 
}

export { ClashCounter };