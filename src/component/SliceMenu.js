import React from 'react';

const SliceMenu = () => {
    return (
        <div id='friendList'>
            <div className='friendTab'>
                <div className='friendList-online'>2</div>
            </div>
            <div className='userProfile'>
                <div className='avatar'>
                    <figcaption className='name'>Jacky</figcaption>
                </div>
            </div>
            <div className='userProfile'>
                <div className='avatar'>
                    <figcaption className='name'>Sam</figcaption>
                </div>
            </div>
            <div className='userProfile'>
                <div className='avatar'>
                    <figcaption className='name'>Daniel</figcaption>
                </div>
            </div>
        </div>
    );
};

export default SliceMenu;