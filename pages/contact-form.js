import LoginComponent from "@/components/forms/login/login";
import Head from "next/head.js"

const Login = ()=>{
    return(
        <>
          <Head>
      <title>Login to Webiste and Web Apps</title>
    </Head>
        <LoginComponent />
        </>
    )
}

export default Login;