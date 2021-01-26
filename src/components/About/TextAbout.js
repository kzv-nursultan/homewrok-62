import React from 'react';

const TextAbout = props => {
    const listOfText = (   
          <div className='container d-flex'>
            <div>
                    <div>
                        <h3>{props.title}</h3>
                        {props.text}
                     </div>
            </div>
            <div>
                    <img style={{width:'250px'}} src={props.src} alt='randomphotofromgoogle'/>
            </div>
        </div>       
    )

    return(
        <>
            {listOfText}
        </>
    );
};

export default TextAbout;