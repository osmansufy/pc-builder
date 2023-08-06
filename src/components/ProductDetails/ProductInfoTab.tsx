
import { IReview } from '@/types';
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import RatingContent from '../Common/RatingContent';

const ProductInfoTab = ({ description, reviews }: {
    description: string,
    reviews: IReview[]
}) => {
    return (
        <Tabs.Group
            aria-label="Default tabs"
            style="pills"
            className='my-4'

        >
            <Tabs.Item
                active
                icon={HiUserCircle}
                title="Description"
            >
                {
                    description
                }
            </Tabs.Item>
            <Tabs.Item
                icon={MdDashboard}
                title="Reviews"
            >
                <div className="divide-y flex flex-col gap-6">
                    {
                        Array.isArray(reviews) && reviews.map((review, index) => (
                            <div key={index} className="flex  flex-col gap-3">
                                <p >
                                    {review.comment}
                                </p>
                                <div className="flex gap-3">
                                    <RatingContent rating={review.rating} />
                                    <p className='text-sm'>
                                        by {review.username}
                                    </p>
                                </div>


                            </div>
                        ))
                    }
                </div>
            </Tabs.Item>

        </Tabs.Group>
    )
}


export default ProductInfoTab