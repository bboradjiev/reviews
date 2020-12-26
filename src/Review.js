import React, {useState} from 'react';
import people from './data';
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';

function Review() {
    const [index, setIndex] = useState(0);
    const {name, job, image, text} = people[index];

    const checkNumber = (number) => {
        if (number > people.length - 1){
            return 0;
        }
        if (number < 0){
            return people.length - 1;
        }
        return number;
    };

    const prevPerson = () => {
        let newIndex = index + 1;
        setIndex(checkNumber(newIndex));
    }; 

    const nextPerson = () => {
        let newIndex = index - 1;
        setIndex(checkNumber(newIndex));
    };

    const randomPerson = () => {
        let random = Math.floor(Math.random() * people.length);
        setIndex(random);
    };

    return (
        <article className='review'>
            <div className='img-container'>
                 <img src={image} alt={name} className='person-img'/>
            <span className='quote-icon'><FaQuoteRight/></span>
            </div>
            <h4 className='authon'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button className='prev-btn' onClick={nextPerson}><FaChevronLeft/></button>
                <button className='next-btn' onClick={prevPerson}><FaChevronRight/></button>
            </div> 
            <button className='random-btn' onClick={randomPerson}>Surprise Me!</button>
        </article>
    )
}

export default Review
