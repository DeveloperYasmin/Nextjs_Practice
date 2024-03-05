import { useRouter } from "next/router"

const Links = () => {
    const router=useRouter()

    const navigatetoabout=()=>{
        router.push("/about")
    }

    const navigatetohome=()=>{
        router.push("/")
    }
  return (
    <div>
                <button onClick={navigatetohome}>Go to Home</button>

        <button onClick={navigatetoabout}>Go to About</button>

    </div>
  )
}

export default Links