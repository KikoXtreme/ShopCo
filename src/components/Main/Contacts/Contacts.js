import { useEffect, useState } from 'react';

export const Contacts = () => {
    const [count, setCount] = useState(0);

    const clickHandler = () => {
        setCount(count => count + 1);
    }

    useEffect(() => {
        document.title = count >= 10 ? `This is: ${count} test clicks` : 'Blaze Fan Page'
    }, [count]);

    return (
        <div>
            <p>Contacts</p>
            <p>Test Counts: [{count}] clicks</p>
            {/* <button onClick={() => setCount(count + 1)}>Click me, I am a counter</button> */}
            <button onClick={clickHandler}>Click me, I am a counter</button>
        </div>
    );
}