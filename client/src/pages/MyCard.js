import React from 'react';
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import MyCards from '../components/myCard/MyCards'

const MyCard = () => {
    
    return(
        <div>
            <Navigation />
            <div className="d-flex justify-content-center">
                <MyCards />
            </div>
            <Footer />
        </div>
    )
}

export default MyCard