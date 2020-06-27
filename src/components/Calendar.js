import React, { useState, useEffect } from 'react'

const Calendar = ({ month, year, data }) => {

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const [m, setM] = useState(month || new Date().getMonth())
    const [y, setY] = useState(year || new Date().getFullYear())


    const [monthLength, setMonthLength] = useState(new Date(y+1, m + 1, 0).getDate())
    const [startIndex, setStartIndex] = useState(new Date(y+1, m, 1).getDay())

    let startingBlanks = Array.apply(null, Array(startIndex))

    const [squares, setSquares] = useState(Array.apply(null, Array(monthLength)))

    useEffect(() => {
        setMonthLength(new Date(y+1, m + 1, 0).getDate())
        setStartIndex(new Date(y+1, m, 1).getDay())
        startingBlanks = Array.apply(null, Array(startIndex))
        setSquares(Array.apply(null, Array(monthLength)))
    }, [m, y])
    return (
        <React.Fragment>
            
            <div>
                <button onClick={ () => setY(y-1) }>{'<'}</button>
                    <h1 style={{'display': 'inline-block', 'width': '200px', 'textAlign':'center'}}>{y}</h1>
                <button onClick={ () => setY(y+1) }>{'>'}</button>    
            </div>
            <div>
                <button onClick={ () => m > 0 ? setM(m-1) : null }>{'<'}</button>
                    <h2 style={{'display': 'inline-block', 'width': '200px', 'textAlign':'center'}}>{monthsOfYear[m%12]}</h2>  
                <button onClick={ () => setM(m+1) }>{'>'}</button>    
            </div>
            
            <div className={'daysOfWeekContainer'}>
                {daysOfWeek.map((v, i) => {
                        return (
                            <div className={'daysOfWeek'}>
                                {v.substr(0, 2)}
                            </div>
                        )
                    })
                }
            </div>
            
            <div className="calendarContainer">
                {
                    startingBlanks.map((v, i) => {
                        return (
                        <div id={`square${i + 1}`} className={'daySquare startingBlank'}>
                            <span>{i == startingBlanks.length - 1 ? '<<' + monthsOfYear[m%12-1] : null}</span>
                        </div>
                        )
                    })
                }
                {
                    squares.map((v, i) => {
                        console.log(data[`${y}-${m+1}-${i+1}`], data)
                        return (
                            <div id={`square${i + 1}`} className={'daySquare'}>
                                <span>{i + 1}</span>
                                {
                                    data && data[`${y}-${m+1}-${i+1}`] ? (
                                        data[`${y}-${m+1}-${i+1}`].events.map( (event,i) => {
                                            return <div className='eventPin'>{event.name}</div>
                                        })
                                    ) : null
                                }
                            </div>)
                    })
                } 
            </div>
        </React.Fragment>
    );
  }

export default Calendar