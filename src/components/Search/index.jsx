import React, { useState } from 'react'

function Search({onEvent, inputRef}) {
    const [show, setShow] = useState(false)

    const handleToggle = () => setShow(!show)

    return (
        <form
            className={`${styles.search} ${show ? styles.open : ''}`}
            onSubmit={onEvent}
        >
            <input
                type="text"
                placeholder="Que deseas buscar..."
                ref={inputRef}
            />
            <button type="submit"></button>
            <span className="icon-search" onClick={() => handleToggle()}>
                <img src={searchIcon} alt="search-icon" />
            </span>
        </form>
    )
}

export default Search
