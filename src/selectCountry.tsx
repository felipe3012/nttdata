import React from 'react';

function Select() {
    return ( 
        <div className="input-group">
            <label className="input-group-text"><i className="bi bi-filter"></i></label>
            <select className="form-select" aria-label="Filter select" defaultValue="">
                <option value="" disabled>
                    Seleccione...
                </option>
                <option value="1">All</option>
                <option value="2">Active</option>
                <option value="3">Inactive</option>
            </select>
        </div>
    );
  }
  
  export { Select };
