import LoginForm from "@/app/components/loginForm/loginForm"

const Loginpage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[500px] bg-stone-800  p-12 flex flex-col text-center gap-7 rounded-md">
        <form>
        <h1>Login With Github</h1>
            <LoginForm/>
            </form>
        </div>
    </div>
  )
}

export default Loginpage
