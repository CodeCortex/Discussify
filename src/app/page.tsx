import { Button } from "@/components/ui/button";
import { signIn } from "../actions/sign-in";
import { signOut } from "../actions/sign-out";
import { auth } from "@/auth";
import TopicCreateForm from "@/components/topics/TopicCreateForm";

export default async function Home() {
  // const session= await auth();
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl font-bold m-2">Home Page</h1>
      </div>

      <div>
        {/* <Button>New Topic</Button> */}
        <TopicCreateForm/>
      </div>
























      {/* <form action={signIn}>
        <Button type="submit">Signin</Button>
      </form>


      <form action={signOut}>
        <Button type="submit">Signout</Button>
      </form>

    {
      session?.user && <div>{JSON.stringify(session.user)}</div>
    } */}


      {/* <Button>Let build discuss app</Button> */}
    </div>
  );
}
