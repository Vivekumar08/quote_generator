/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import bookmark from "../Components/Assets/Vector.svg";
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { addBookmarks } from '../store/bookmark/bookmarks';

const Home = () => {
    const [data, setData] = useState();
    const [tags, setTags] = useState();
    const [selectedOption, setSelectedOption] = useState(null);
    let arr = []

    const dispatch = useDispatch()

    const handleSubmit = (data) => {
        localStorage.setItem('bookmarkId', data._id)
        window.alert("This quote is Bookmarked!!!")
        dispatch(addBookmarks({ content: data.content, author: data.author }))
    };

    const fetchdata = async () => {
        const response = await fetch("https://api.quotable.io/random");
        setData(await response.json());

    };
    const fetchQuote = async (option) => {
        const response = await fetch(`https://api.quotable.io/random?tags=${option}`);
        if (response.status === 404) {
            setData(null)
            setSelectedOption(null);

        } else {
            setData(await response.json());
            setSelectedOption(null);
        }
    }
    const fetchTags = async () => {
        const resTags = await fetch("https://api.quotable.io/tags");
        setTags(await resTags.json());
    }

    useEffect(() => {
        if (selectedOption != null) {
            fetchQuote(selectedOption);
            fetchTags();
        } else {
            fetchdata();
            fetchTags();
        }
    }, [selectedOption]);

    tags && tags.map((elem) => {
        arr.push({ value: elem.slug, label: elem.name });
    })

    var handleChange = (selectedOption) => {
        setSelectedOption(selectedOption.value);
    };
    return (
        <div className='min-h-screen  App  flex justify-center'>
            <div className=" flex-col mt-[143px] px-5">
                <div className='md:w-[773px] w-full  h-[263px] bg-[#D05252] text-white rounded-[30px]  flex flex-col md:px-[120px] px-[25px] py-[23px]'>
                    <h1 className={`md:w-[521px] w-full h-[163px] px-[6px] py-[3px]  flex  align-bottom ${data?'justify-start':'justify-center'}`}>
                        {data ? data.content : <div className="custom-loader"></div>}
                    </h1>
                    <div className='w-full flex justify-evenly items-center leading-7 mt-[15px]'>
                        <p className='px-[6px] py-[3px] flex justify-center text-[18px] font-semibold'>
                            - {data && data.author}
                        </p>
                        <button onClick={() => handleSubmit(data)}>
                            <img src={bookmark} alt='bookmark' className='flex justify-end' />
                        </button>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='w-[253px] h-[38px] mt-[95px] '>
                        <Select
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 30,
                                margin: 0

                            })}
                            styles={{
                                control: styles => ({ ...styles, backgroundColor: 'white' }),
                                option: (styles) => {
                                    return {
                                        ...styles,
                                        paddingLeft: '24px',
                                        borderRadius: 30,
                                        margin: 0

                                    };
                                },
                            }
                            }
                            defaultValue={selectedOption}
                            onChange={handleChange}
                            options={arr}
                        />
                    </div>
                </div>
                <div className='flex justify-center my-[75px] '>
                    <button onClick={fetchdata} className='w-[240px] h-[38px] next-button'>
                        <div className='text-white '>Next Quote</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home