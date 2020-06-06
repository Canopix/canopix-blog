import React from "react"

const Talk = ({ talk }) => {
  return (
    <div className="my-8  p-4 flex flex-col md:flex-row md:items-center ">
      <div className="w-full md:w-32">
        <h1 className="Nunito-800 text-yellow-500 m-0 text-2xl">
          {talk.title}
        </h1>
      </div>
      <div className="md:p-4 my-2 md:mx-0 w-full md:w-64">
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
      <div>
        <p className="mt-2 Nunito-400 italic text-lg">{talk.description}</p>
      </div>
    </div>
  )
}

export default Talk
