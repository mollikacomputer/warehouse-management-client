import React from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';

const CustomerReviews = () => {
    return (
        <div className='container' >
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3' >
            <CustomerReview></CustomerReview>
            <CustomerReview></CustomerReview>
            <CustomerReview></CustomerReview>

            </div>
        </div>
    );
};

export default CustomerReviews;