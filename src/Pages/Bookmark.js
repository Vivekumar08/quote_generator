import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBookmarks } from '../store/bookmark/bookmarks'
import bookmark from "../Components/Assets/delete.svg";

const Bookmark = () => {
    const bookmarks = useSelector(state => state.bookmarks)
    const dispatch = useDispatch()
    console.log(bookmarks)
    console.log(bookmarks.length)

    const handleSubmit = (data) => {
        localStorage.setItem('bookmarkId', data._id)
        dispatch(deleteBookmarks({ content: data.content, author: data.author }))
    };
    return (
        <div className='min-h-screen book-mark  App  flex justify-center'>
            <div className=" flex-col mt-[143px] px-5">
                {bookmarks.length > 0 ? bookmarks.map((data, key) => (
                    <div key={key} className='md:w-[773px] w-full my-16  h-[263px] bg-[#D05252] text-white rounded-[30px]  flex flex-col px-[120px] py-[23px]'>
                        <h1 className='md:w-[521px] h-[163px] px-[6px] py-[3px]  flex  align-bottom justify-start '>
                            {data.content}
                        </h1>
                        <div className='w-full flex justify-evenly items-center leading-7 mt-[15px]'>
                            <p className='px-[6px] py-[3px] flex justify-center text-[18px] font-semibold'>
                                - {data.author}
                            </p>
                            <button onClick={() => handleSubmit(data)}>
                                <img src={bookmark} alt='bookmark' className='flex justify-end w-[18px] h-[28px]' />
                            </button>
                        </div>
                    </div>
                ))
                    :
                    <div className='md:w-[773px] w-full  h-[263px] bg-[#D05252] text-white rounded-[30px]  flex flex-col px-[120px] py-[23px]'>
                        <h1 className='md:w-[521px] h-[163px] px-[6px] py-[3px]  flex  align-bottom justify-start '>
                            {"No Quote is Bookmark"}
                        </h1>
                        <div className='w-full flex justify-evenly items-center leading-7 mt-[15px]'>
                            <p className='px-[6px] py-[3px] flex justify-center text-[18px] font-semibold'>
                                - {" "}
                            </p>
                        </div>
                    </div>
                }
            </div>
        </div>

    )
}

export default Bookmark