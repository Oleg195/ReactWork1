import React from 'react';
import "../myImput/myImput.css"
const MyImput = (props) => {
    const {caption, setCaption} = props;
 
    const handleChange = (e) => {
        setCaption(e.target.value);
    };
 
    return (
        <div>
            <textarea value={caption} onChange={handleChange} className="form-control" placeholder="Input text" />
        </div>
    )
};
 
export default MyImput