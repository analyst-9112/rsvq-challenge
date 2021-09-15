import React from 'react'
import Header from './Header'
import Quotes from './Quotes'
import Card from 'react-bootstrap/card'

const QuotesCard = (props) => {
    return (
        
        <Card>
            <Header total={props.total}/>
                <Card.Body/>
                    <Quotes data={props.data} add={props.add} subtract={props.subtract}/>
        </Card>

    )
}

export default QuotesCard
