import React from "react"
import bg2 from "../images/BG2.png"

const Footer = () => {
  return (
    <div
      className=" mt-[1000px] pt-[300px] h-[600px]  flex justify-between items-start px-20  bg-cover text-white"
      style={{ backgroundImage: `url("${bg2}")` }}
    >
      <div>
        <h1 className="text-xl mb-5">MNTN</h1>
        <p className="text-sm w-[250px] mb-28">
          Get out there & discover your next slope, mountain & destination
        </p>
        <p className="text-sm text-gray-400">
          Copyright 2023 MNTN, inc. Terms & Privacy
        </p>
      </div>
      <div>
        <h1 className="text-xl text-orange-300 mb-5">More on The Blog</h1>
        <ul className="text-sm flex justify-center items-start gap-5 flex-col">
          <li>About MNTN</li>
          <li>Contributors & Writers</li>
          <li>Write For Us</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <h1 className="text-xl text-orange-300 mb-5">More on MNTN</h1>
        <ul className="text-sm flex justify-center items-start gap-5 flex-col">
          <li>The Team</li>
          <li>Jobs</li>
          <li>Press</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
