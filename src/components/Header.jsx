import React from "react"
import { RiAccountCircleLine } from "react-icons/ri"

const Header = () => {
  return (
    <div className="flex justify-between items-center pt-10 px-14 text-white">
      <div>MNTN</div>
      <div>
        <ul className="flex justify-center items-center gap-8">
          <li className="cursor-pointer">Equipment</li>
          <li className="cursor-pointer">About us</li>
          <li className="cursor-pointer">Blog</li>
        </ul>
      </div>
      <div className="flex  items-center cursor-pointer">
        <RiAccountCircleLine size={20} />
        Account
      </div>
    </div>
  )
}

export default Header
