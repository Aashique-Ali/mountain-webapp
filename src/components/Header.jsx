import React from "react"
import { RiAccountCircleLine } from "react-icons/ri"

const Header = () => {
  return (
    <div className="flex justify-between items-center pt-10 px-14 text-white">
      <div>MNTN</div>
      <div>
        <ul className="flex justify-center items-center gap-8">
          <li>Equipment</li>
          <li>About us</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="flex  items-center">
        <RiAccountCircleLine size={20} />
        Account
      </div>
    </div>
  )
}

export default Header
