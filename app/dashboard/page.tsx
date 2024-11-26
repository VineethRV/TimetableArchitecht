"use client"
import { Button } from "antd"
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function Page() {
  const router = useRouter();

  function logout(){
    localStorage.setItem('token',"");
    router.push('/')
    toast.success("Logged out successfully !!");
  }

  return (
    <div>
      <Button onClick={logout}/>
    </div>
  )
}

export default Page
