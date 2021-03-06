// Display notebook info in navbar if loaded
import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './components.css';

function NavBarNbInfo({ nb, unloadNotebook }) {
  return (
    <div className="navbar-nb-info">
      <div>
        <div>
          <FontAwesomeIcon className="mr-2" icon={['fas', 'key']} />
          {nb.nbKey}
        </div>
        <div><small>Created: {nb.created.slice(0, 10)}</small></div>
        <div><small>Expires: {nb.expiration.slice(0, 10)}</small></div>
      </div>
      <div className="unload-btn">
        <Button variant="outline-danger" size="sm" onClick={unloadNotebook}>Unload</Button>
      </div>
    </div>
  );
}

export default NavBarNbInfo;