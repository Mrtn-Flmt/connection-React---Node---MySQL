import React from 'react';
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import MessageSystem from '../components/admin/MessagesAdmin'

const AllMessage = () => {
    return (
        <div>
            <Navigation />
            <div className="d-flex justify-content-center">

                <MessageSystem />
            </div>
            <Footer />
        </div>
    )
}

export default AllMessage