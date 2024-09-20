import React from 'react'
import "./index.scss"
import { useSearchParams } from 'react-router-dom';

const Header = () => {
    let [searchParams, setSearchParams] = useSearchParams();

    const tabs = [
        { id: 0, title: "All", query: "all" },
        { id: 1, title: "Asia", query: "asia" },
        { id: 2, title: "Europe", query: "europe" }
    ]

    const handleSelectMenu = (query) => setSearchParams({ continent: query })

    return (
        <div className="header-container w-100">
            <div className='d-flex gap-2 justify-content-between w-100'>
                <h4 className='font-weight-bold'>Countries </h4>
                <div className='d-flex'>
                    {!!tabs?.length && tabs?.map(({ title, query }) => <p role="button" onClick={() => handleSelectMenu(query)} className='mx-2 '>{title}</p>)}
                </div>
            </div>
        </div>
    )
}

export default Header;