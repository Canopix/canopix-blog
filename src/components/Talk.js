import React from "react"

const Talk = ({ talk }) => {
  return (
    <div className="my-4">
      <h1 className="Nunito-800 text-yellow-500 m-0 text-2xl">{talk.title}</h1>
      <div className="flex flex-col md:flex-row md:items-center ">
        <div className="md:p-4 my-2 md:mx-0 w-full md:w-1/2">
          <p className="m-0 Nunito-200 text-sm">Language: {talk.language}</p>
          <p className="m-0 Nunito-200 text-sm">Date: {talk.date}</p>
          <p className="m-0 Nunito-200 text-sm">
            Organization:
            <a
              href={talk.organizationLink}
              target="_blank"
              className="underline Nunito-800 text-yellow-500"
            >
              {talk.organization}
            </a>
          </p>
        </div>
        <div className="md:w-1/2">
          <p className="mt-2 Nunito-400 italic text-lg ">{talk.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Talk
