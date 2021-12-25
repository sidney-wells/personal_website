import React, { useState, useRef } from 'react';

// PURPOSE: basic interface validation of Textfield with text prop

interface TextField {
    text: string;
    // optional w/ question mark
    isVisibile?: boolean;
}

interface Person { name: string, age: number }

const TextField = ({ text, isVisibile }: TextField) => {
    // this value can be null or number or string
    const [count, setCount] = useState<number | null | string>(5)
    // interface validation of Person 
    const [person, setPerson] = useState<Person>({ name: 'Sidney', age: 1 })
    const inputRef = useRef<HTMLInputElement>();
    return (
        <div>
            <input ref={inputRef} />
        </div>
    )
}

export default TextField;