import './ListClan.css';

function ListClan(props: any) {
    return (
       <section className="lista__clanes">
           { props.children }
       </section>
    );
}

export { ListClan }; 