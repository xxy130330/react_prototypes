import React from 'react';
import img from './Image';

const Header = () => {
    return (
        <div className='topHeader'>
            <h1>Super Blog!</h1>
            <div className='userProfile'>
                <p className='quote'>When you reach the end of your rope, tie a knot in it and hang on.</p>
                <p className='name'>Joe</p>
                <img className='avatar'/>
            </div>
        </div>



    );
};


export default Header;