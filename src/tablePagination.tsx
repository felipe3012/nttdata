import './tablePagination.css';

function Pagination() {
    return (     
        <div className='Pagination__content'>
            <div className='input-group input-group-sm mb-3 Pagination__content--inputSelect'>
                <span className='input-group-text' id='inputGroup-sizing-sm'>Mostrar</span>                    
                <select className="form-select form-select-sm" defaultValue="">
                    <option value="1">10</option>
                    <option value="2">20</option>
                    <option value="3">50</option>
                </select>
                <span className='input-group-text' id='inputGroup-sizing-sm'>Elementos</span>
            </div>
            <ul className='pagination pagination-sm'>             
                <li className='page-item'><a className='page-link' href='#'>Anterior</a></li>  
                <li className='page-item'><a className='page-link' href='#'>1</a></li>
                <li className='page-item'><a className='page-link' href='#'>2</a></li>
                <li className='page-item active'><a className='page-link' href='#'>3</a></li>
                <li className='page-item disabled'><a className='page-link' href='#'>4</a></li>
                <li className='page-item'><a className='page-link' href='#'>Siguiente</a></li>
            </ul>
        </div>
    );
}

export { Pagination };