/* eslint-disable no-unused-vars */

import { useLoaderData } from 'react-router-dom';


const ReviewModal = () => {

    const review = useLoaderData();
    // console.log(review);
    return (
        <div>
            <h1>ReviewModal</h1>
        </div>
    );
};

export default ReviewModal;