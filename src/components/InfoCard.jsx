import React from 'react'

const isIncome = Math.round(Math.random());
const randomNum = Math.floor(Math.random() * 1000) + 1;

const InfoCard = () => {
    return (
        <div style={{ textAlign: 'center', padding: '0 10%' }}>
            Try saying: 
            Add {isIncome ? 'Income ' : 'Expense '} 
            for {`${randomNum} `} 
            in category {isIncome ? 'Business ' : 'Pets '} 
            for {isIncome ? 'Monday' : 'Tuesday'}...
        </div>
    )
}

export default InfoCard
