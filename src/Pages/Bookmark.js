import React from 'react'
import { useSelector } from 'react-redux'

const Bookmark = () => {
    const bookmarks = useSelector(state => state.bookmarks)
    return (
        <div className='min-h-screen book-mark  App  flex justify-center'>
            <div className=" flex-col mt-[143px] px-5">
                {bookmarks ? bookmarks.map((data,key) => (
                    <div key={key} className='md:w-[773px] w-full my-16  h-[263px] bg-[#D05252] text-white rounded-[30px]  flex flex-col px-[120px] py-[23px]'>
                        <h1 className='md:w-[521px] h-[163px] px-[6px] py-[3px]  flex  align-bottom justify-start '>
                            {data.content}
                        </h1>
                        <div className='w-full flex justify-evenly items-center leading-7 mt-[15px]'>
                            <p className='px-[6px] py-[3px] flex justify-center text-[18px] font-semibold'>
                                - {data.author}
                            </p>
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