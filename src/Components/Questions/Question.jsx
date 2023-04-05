import React from 'react';

const Question = () => {
    return (
        <div className='m-5'>
            <div className='mb-4'>
                <h4 className='text-primary'> 
                <span className='btn btn-danger me-2'>Question </span> 
                1: Difference between Props vs state ?</h4>
                <h5> 
                <span className='btn btn-success me-2'>Answer:</span>
                Props: <br />
                props is the short form of properties. Props in only readable. That means we can't change its value. They are what make components reusable. Because they perform an essential function they pass data from one component to another.  
                <br />
                State: <br />
                On the other hand, the data on the state can be changeable. We can modify the data of a state. State allows us to manage changing data in an application. It's defined as an object where we define key-value pairs specifying various data we want to track in the application.
                </h5>
            </div>
            <div className='mb-4'>
                <h4 className='text-primary'> 
                <span className='btn btn-danger me-2'>Question </span>
                2: How does useState work ?</h4>
                <h5> <span className='btn btn-success me-2'>Answer:</span>
                useState is React Hook that allows us to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.
                useState works in asynchronous way. At first we have to give it an initial value. The value can be ( 0, [], "" ) whatever. Then we can send data into the state.
                </h5>
            </div>
            <div className='mb-4'>
                <h4 className='text-primary'> 
                <span className='btn btn-danger me-2'>Question </span> 
                3: What is the purpose of useEffect other than fetching data ?</h4>
                <h5> 
                <span className='btn btn-success me-2'>Answer:</span>
                useEffect hook is part of React's Hooks API. The core principle of this hook is to let us perform side effects in the functional components.
                useEffect perform side effects functionality. It can manage timers and intervals. Event listeners can be used inside it. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers. The second argument is optional.
                </h5>
            </div>
            <div>
                <h4 className='text-primary'> 
                <span className='btn btn-danger me-2'>Question </span>
                4: How Does React work?</h4>
                <h5> 
                <span className='btn btn-success me-2' >Answer:</span>
                React works by using a virtual representation of the actual web page, called the virtual DOM, React compares the new virtual DOM tree with the previous virtual DOM tree to determine which parts of the actual DOM need to be updated. It is a declarative, efficient, and flexible JavaScript library for building user interfaces. A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state for example, a TabList component may store a variable corresponding to the currently open tab. 
                </h5>
            </div>
        </div>
    );
};

export default Question;