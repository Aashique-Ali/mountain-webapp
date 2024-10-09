import React from "react"
import contentbg from "../images/BG Content.png"

const Card = ({ image, bgImage }) => {
  return (
    <div
      className="flex justify-center items-center bg-cover "
      // style={{ backgroundImage: `url("${contentbg}")` }}
    >
      <div
        className=" flex justify-center items-center bg-cover h-screen "
        style={{ backgroundImage: `url("${bgImage}")` }}
      >
        <img src={image} alt="" className="w-[80%] " />
      </div>
    </div>
  )
}

export default Card
