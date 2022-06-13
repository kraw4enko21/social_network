import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
const Profile = () => {
    return (
        <div>
            <div>
                <img className={s.contentImg} src='https://wp-mktg.prod.getty1.net/where-we-stand/wp-content/uploads/sites/3/2015/09/Checklist_534087861.jpg' alt='1' />
            </div>
            <div>
                ava
            </div>
            <div>
                <MyPosts/>
            </div>

        </div>
    );
};

export default Profile;