import React from 'react'

const Header = (props) => {

    return (
        
    <div className="p-2 border border-dark d-flex justify-content-between">
        <span>Ron Swanson Quote Voter</span>
        <span className="fst-italic small">"Vote for your favorite quote!"</span>
        <span className="small text-end">Total Votes: <span className="fw-bold">{props.total}</span>
        </span>
    </div>

    )
}

export default Header
