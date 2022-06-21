import './tablePagination.css';

function TablePagination() {
    return (     
        <div className='Pagination__content'>
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

export { TablePagination };