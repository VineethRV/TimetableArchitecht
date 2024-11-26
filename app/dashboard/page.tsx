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
    <div className="p-8">
      <Button onClick={logout}>Logout</Button>
    </div>
  )
}

export default Page
