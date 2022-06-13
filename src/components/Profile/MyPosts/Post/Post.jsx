import React from 'react';
import s from './Post.module.css'
console.log(s)
const Post = (props) => {
    return (
        <div>
            <img src="https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png" className={s.postFoto} alt='1'/>
            <p className={s.postText}>{props.message}</p>
            <div>
                <span>Like - {props.likes}</span>
            </div>
        </div>
    );
};

export default Post;