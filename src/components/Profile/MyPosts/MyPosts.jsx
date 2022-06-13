import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            Post
                <div >
                    New Post
                    <div>
                        <textarea></textarea>
                        <button>Add Post</button>
                    </div>
                    <Post message='Hello, how are you?' likes='5'/>
                    <Post message='Hello, i fuck your mother' likes='1'/>
                    <Post message='Hello, it`s my first post' likes='2'/>
                    <Post message='Hello, my last post' likes='-10'/>
                </div>
        </div>
    );
};

export default MyPosts;