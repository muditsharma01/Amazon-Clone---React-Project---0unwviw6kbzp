import React from 'react'
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const SideNavContent = (props) => {
  return (
    <div className="py-3 border-b-[1px] border-b-gray-300 z-0">

    
                    <h3 className="text-lg z-50 font-titleFont font-semibold mb-1 px-6">{props.title}</h3>
                    <ul className='text-sm'>
                        <li className="flex text-black items-center justify-between hover:bg-zinc-100 px-6
                        py-2 cursor-pointer"

                        >{props.first}{" "}<span><KeyboardArrowRightIcon/></span></li>
                        <li className="flex text-black items-center justify-between hover:bg-zinc-100 px-6
                        py-2 cursor-pointer"

                        >{props.second}{" "}<span><KeyboardArrowRightIcon/></span></li>
                        <li className="flex text-black items-center justify-between hover:bg-zinc-100 px-6
                        py-2 cursor-pointer"

                        >{props.third}{" "}<span><KeyboardArrowRightIcon/></span></li>
                        
                        <li className="flex text-black items-center justify-between hover:bg-zinc-100 px-6
                        py-2 cursor-pointer"

                        >{props.fourth}{" "}<span><KeyboardArrowRightIcon/></span></li>
                        
                    </ul>
           
    </div>
  )
}

export default SideNavContent
 