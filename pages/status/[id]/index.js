import Devit from "components/Devit"
// import { firestore } from "firebase/admin"
import React from "react"

const DevitPage = (props) => {
  return (
    <>
      <Devit {...props} />
      <style jsx>{``}</style>
    </>
  )
}

// * server side rendering

// ? new version (OPC 1)
export const getServerSideProps = async (context) => {
  const { params, res } = context
  const { id } = params

  const apiResponse = await fetch(`http://localhost:3000/api/devits/${id}`)
  if (apiResponse.ok) {
    const props = await apiResponse.json()
    return { props }
  }
  if (res) {
    res.writeHead(301, { Location: "/home" }).end()
  }
}

// ? serverside in build time (OPC 2)
// export const getStaticPaths = async () => {
//   return {
//     paths: [{ params: { id: "xePJekB2SqO58ipoljBz" } }],
//     fallback: false,
//   }
// }

// export const getStaticProps = async (context) => {
//   const { params } = context
//   const { id } = params

//   return await firestore
//     .collection("devits")
//     .doc(id)
//     .get()
//     .then((doc) => {
//       const data = doc.data()
//       const id = doc.id
//       const { createdAt } = data

//       const props = {
//         ...data,
//         id,
//         createdAt: +createdAt.toDate(),
//       }
//       return props
//     })
//     .catch((error) => {
//       console.log("error", error)
//       return { props: {} }
//     })
// }

// ! old version
// DevitPage.getInitialProps = (context) => {
//   const { query, res } = context
//   const { id } = query
//   console.log("getInitialProps", id)

//   return fetch(`http://localhost:3000/api/devits/${id}`)
//     .then((apiResponse) => {
//       if (apiResponse.ok) return apiResponse.json()
//       if (res) {
//         res.writeHead(301, { Location: "/home" }).end()
//       }
//     })
//     .catch((error) => console.log("error", error))
// }

export default DevitPage
