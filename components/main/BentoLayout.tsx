import React from 'react';

const BentoLayout = () => {
    return (
        <div className="min-h-screen p-32">
            <div className='grid grid-cols-3 auto-rows-[200px] gap-4'>
            <div className="col-span-1">
                <div className="bg-gray-200 rounded-lg p-4 w-full h-full">Card 1</div>
            </div>
            <div className="col-span-1">
                <div className="bg-gray-200 rounded-lg p-4 w-full h-full">Card 2</div>
            </div>
            <div className='row-span-2'>
                <div className="bg-gray-200 rounded-lg p-4 w-full h-full">Card 3</div>
            </div>
            <div className=''>
                <div className="bg-gray-200 rounded-lg p-4 w-full h-full">Card 4</div>
            </div>
            <div>
                <div className="bg-gray-200 rounded-lg p-4 w-full h-full">Card 5</div>
            </div>
            <div className='col-span-2'>
                <div className="bg-gray-200 rounded-lg p-4 w-full h-full">Card 6</div>
            </div>
            <div className='col-span-1'>
                <div className="bg-gray-200 rounded-lg p-4 w-full h-full">Card 7</div>
            </div>
            </div>
        </div>
    );
};

export default BentoLayout;
