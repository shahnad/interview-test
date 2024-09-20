import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import "./index.scss"

const Header = () => {
    let [searchparams, setSearchParams] = useSearchParams();
    const activeQuery = searchparams?.get('continent')
    const navigate = useNavigate();

    const tabs = [
        { id: 0, title: "All", query: "all" },
        { id: 1, title: "Asia", query: "asia" },
        { id: 2, title: "Europe", query: "europe" }
    ]

    const handleSelectMenu = (query) => setSearchParams({ continent: query });

    const handleLogout = () => {
        localStorage.removeItem('user');
        // toast.success("Logged out sucecssfully!")
        navigate('/login')
    }

    useEffect(() => {
        if (!activeQuery) {
            setSearchParams({ continent: "all" })
        }
        //eslint-disable-next-line
    }, [activeQuery])

    return (
        <div className="header-container w-100">
            <div className='d-flex flex-row gap-5 w-100 align-items-center'>
                <div className='d-flex gap-2 justify-content-between w-100 py-5'>
                    <h4 className='font-weight-bold'>Countries </h4>
                    <div className='d-flex'>
                        {!!tabs?.length && tabs?.map(({ title, query }) => <p key={title} role="button" onClick={() => handleSelectMenu(query)} className={`mx-2 ${query === activeQuery ? 'border-2 border-bottom border-tertiary' : ''}`}>{title}</p>)}
                    </div>
                </div>
                <Button color="secondary" className="logout-btn" type="button" onClick={handleLogout}>Logout</Button>
            </div>
        </div>
    )
}

export default Header;