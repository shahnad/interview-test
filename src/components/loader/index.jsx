import Spinner from 'react-bootstrap/Spinner';

function Loader() {
    return (
        <div style={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Spinner animation="border" variant="primary" />
        </div>
    );
}

export default Loader;