import { useState } from "react"
import { Formik, Form, Field } from "formik"

import { motion } from "framer-motion"

import Header from "./components/Header"

const App = () => {
  const [photos, setPhotos] = useState([])

  const api_key = "eJsLdTfgcV5zc0mczo3rGF8xIPHNhKRfZba0veUzFRM"

  const open = (url) => window.open(url)
  const random = "random"
  console.log({ photos })

  const loadPhotos = async (values) => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?per_page=40&query=${
        values.search || random
      }`,
      {
        headers: {
          Authorization: `Client-ID ${api_key}`,
        },
      }
    )
    const data = await response.json()
    console.log(data)
    //API UNSPLASH
    setPhotos(data.results)
  }

  return (
    <div>
      <Header />
      <header>
        <Formik initialValues={{ search: "" }} onSubmit={loadPhotos}>
          <Form className="flex justify-center p-5 bg-gray-100 shadow-xl">
            <Field
              className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="search"
            />
          </Form>
        </Formik>
      </header>
      <div className="flex bg-gray-100 justify-center">
        <div className="center">
          {photos.map((photo) => (
            <motion.article
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 1,
                  ease: "easeIn",
                },
              }}
              className="shadow-lg inline-block w-96 m-7 bg-gray-100 rounded-lg cursor-pointer hover:transform hover:scale-105 transition duration-200 ease"
              key={photo.id}
              onClick={() => open(photo.links.html)}
            >
              <img
                className="w-96 rounded-t-lg "
                src={photo.urls.regular}
                alt={photo.alt_description}
              />
              <h3 className="text-gray-800 my-2 mx-4">
                {[photo.description, photo.alt_description].join(" - ")}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}

// KEY: eJsLdTfgcV5zc0mczo3rGF8xIPHNhKRfZba0veUzFRM

export default App
