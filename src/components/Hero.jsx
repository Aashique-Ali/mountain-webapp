import React from "react"
import start from "../images/Start.png"
import one from "../images/01.png"
import two from "../images/02.png"
import three from "../images/03.png"
import MG from "../images/MG.png"
import VG from "../images/VG.png"
import Header from "./Header"
import Bghero from "../images/BG Hero.jpg"
import { IoLogoInstagram } from "react-icons/io5"
import { IoLogoTwitter } from "react-icons/io"

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url("${Bghero}")` }}
      className="w-full h-screen mb-80"
    >
      <Header />
      <div
        style={{ backgroundImage: `url("${MG}")` }}
        className="w-full h-[120vh] mt-40"
      >
        <div className="flex justify-between items-center px-14 ">
          <div className="[writing-mode:vertical-lr] ">
            <h1 className="text-white flex justify-center items-center ">
              Follow us
              <div className=" flex mt-3 gap-3">
                <div>
                  <IoLogoInstagram />
                </div>
                <div>
                  <IoLogoTwitter />
                </div>
              </div>
            </h1>
          </div>
          <div className="relative">
            <h2 className="pl-28 text-orange-300 before:content-[''] before:block before:h-0.5 before:w-10 before:bg-orange-300 before:absolute before:left-14 before:top-3 before:-translate-y-1/2 before:mr-4">
              A HIKING GUIDE
            </h2>
            <h1 className=" capitalize text-6xl text-white w-[800px] pl-14">
              be prepared for the mountains and beyond!
            </h1>
          </div>
          <div className="flex justify-center items-end flex-col gap-10 ">
            <img src={start} alt="" className="w-[30px]" />
            <img src={one} alt="" className="w-[15px]" />
            <img src={two} alt="" className="w-[15px]" />
            <img src={three} alt="" className="w-[15px]" />
          </div>
        </div>
        <img
          src={VG}
          alt=""
          className="mt-24 
        "
        />
      </div>
    </div>
  )
}

export default Hero
