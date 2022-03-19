import { useRouter } from 'next/router'

const Glasses = () => {
  const router = useRouter()

  console.log(router)

  return <h2>ID: {router.query.glasses}</h2>
}

export default Glasses
