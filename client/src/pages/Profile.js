import React from 'react';
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import ProfileSystem from '../components/profile/ProfileSystem'

const Profile = () => {
    return (
        <div>
            <Navigation />
            <div className="d-flex justify-content-center m-5">
                <ProfileSystem />
            </div>
            <Footer />
        </div>
    )

}

export default Profile