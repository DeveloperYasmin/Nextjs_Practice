import LoginForm from "@/app/components/loginForm/loginform"
import { handleGithubLogin } from "@/app/lib/action"


const Loginpage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[500px] bg-stone-800  p-12 flex flex-col text-center gap-7 rounded-md">
      <form action={handleGithubLogin}>
        <button className="w-[100%] p-5 cursor-pointer text-lg">Login With Github</button>
      </form>
      <LoginForm/>
    </div></div>
  )
}

export default Loginpage