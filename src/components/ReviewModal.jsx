/* eslint-disable no-unused-vars */

import { useLoaderData } from 'react-router-dom';


const ReviewModal = () => {

    const review = useLoaderData();
    // console.log(review);
    return (
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-8">
                <h1 className="section-title">Guest Review</h1>
                <p className="section-subtitle">See what guests have shared about their stay.</p>
            </div>
            <div className="card-surface p-8">
                <p className="text-sm text-ink-500">Review data will appear here.</p>
            </div>
        </div>
    );
};

export default ReviewModal;