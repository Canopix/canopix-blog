import React from "react"
import ChangeWord from "./effects/changeWord"
import person from "./../static/svg/person.svg"

const Hero = () => {
  return (
    <div className="mx-auto p-0 w-11/12 md:w-9/12 flex flex-col md:flex-row mt-4">
      <div className="w-full md:w-1/3" style={{ zIndex: 2 }}>
        <img
          className="mx-auto my-0"
          style={{ zIndex: 2 }}
          width={250}
          src={person}
        />
      </div>
      <div
        className="w-full md:w-2/3 text-center flex items-center"
        style={{ zIndex: 2 }}
      >
        <p
          className="m-0 p-4 text-white Nunito-800 text-2xl leading-snug"
          style={{ zIndex: 2 }}
        >
          A{" "}
          <ChangeWord
            words={["developer", "person", "user", "friend", "neighbor"]}
            time={3000}
          />
          , changing the world one bit at a time.
        </p>
      </div>
    </div>
  )
}

export default Hero
