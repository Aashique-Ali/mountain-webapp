import React from "react"
import Card from "../components/Card"
import content from "../images/Content1.png"
import content2 from "../images/Content02.png"
import content3 from "../images/Content3.png"
import contentbg from "../images/BG Content.png"
import bg2 from "../images/BG2.png"

const Guide = () => {
  return (
    <div
      // style={{ backgroundImage: `url("${contentbg}")` }}
      className="h-screen mt-40 bg-cover mb-10"
    >
      <Card image={content} bgImage={contentbg} />
      <Card image={content2} bgImage={bg2} />
      <Card image={content3} bgImage={bg2} />
    </div>
  )
}

export default Guide
