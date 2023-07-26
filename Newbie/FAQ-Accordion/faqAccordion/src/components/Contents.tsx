import { useState, useEffect } from 'react';

function Contents() {
    const [i, setI] = useState<number | null>(null);
    const [currWidth, setCurrWith] = useState(window.innerWidth);

    const resized = () => {
        setCurrWith(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resized', resized);
    }, []);

    const contents = [
        {
            id: 1,
            question: 'How many team members can I invite?',
            answer: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
        }, {
            id: 2,
            question: 'What is the maximum file upload size',
            answer: 'No more than 2GB. All files in your account must fit your allotted storage space.'
        }, {
            id: 3,
            question: 'How do I reset my password?',
            answer: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
        }, {
            id: 4,
            question: 'Can I cancel my subscription?',
            answer: "Yes! Send us a message and we'll process your request no questions asked."
        }, {
            id: 5,
            question: 'Do you provide additional support?',
            answer: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
        }
    ];

    const clicked = (index: number | null) => {
        if (i === index) {
            return setI(null);
        }
        setI(index);
    }

    return (
        <>
            <div className="w-full h-[85%] flex">
                <div className="w-full h-full bg-white rounded-3xl font-kumbh-sans lg:grid lg:grid-cols-6 lg:overflow-x-hidden">
                    {currWidth >= 1024 ? 
                        <div className='col-start-1 col-span-3 row-span-2 bg-[right_.5em_bottom_-11em] bg-no-repeat mr-16' style={
                            {backgroundImage: "url(../assets/icons/bg-pattern-desktop.svg)"}
                        }>
                            <div className='relative h-auto w-[22rem] top-[19%] left-[-18%]'>
                                <img src="../assets/icons/illustration-woman-online-desktop.svg" />
                            </div>
                            <div className='absolute top-[18.7rem] left-[5rem] w-36 h-auto'>
                                    <img src="../assets/icons/illustration-box-desktop.svg" />
                            </div>
                        </div>
                    : ''}
                    <div className="text-3xl font-bold mt-32 mb-5 flex justify-center items-center lg:col-start-4 lg:mt-10 lg:block lg:mb-5">
                        <h1>FAQ</h1>
                    </div>
                    <div className="h-[50%] w-full text-xs overflow-y-auto px-5 lg:px-0 lg:col-start-4 lg:col-span-3 lg:pr-10 lg:h-[90%] xl:text-sm">
                        {
                            contents.map((content, index) => (
                                <div key={content.id}>
                                    <div className={
                                        `flex justify-between items-center py-5 lg:pb-5 lg:py-0 lg:col-start-3
                                        ${index === i ? 'border-b-0' : 'border-b-2 mb-5'}`} 
                                        onClick={() => {
                                        clicked(index)
                                    }}>
                                        <p className={`${index === i ? 'font-bold' : 'font-normal'}`}>{content.question}</p>
                                        <span className={index === i ? 'rotate-180' : 'rotate-0'}>
                                        <img src="./assets/icons/icon-arrow-down.svg" />
                                        </span>
                                    </div>
                                <div className={
                                    `text-dark-grayish-blue lg:col-start-3 ${index === i ? 'block border-b-2 pb-5 lg:mb-5' : 'hidden border-b-0 pb-0'}`
                                    }>{content.answer}</div>
                                </div>            
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contents;