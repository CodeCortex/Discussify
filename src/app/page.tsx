import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signIn } from "./actions/sign-in";
import { signOut } from "./actions/sign-out";

export default function Home() {
  return (
    <div>
      Home page

      <form action={signIn}>
        <Button type="submit">Signin</Button>
      </form>


      <form action={signOut}>
        <Button type="submit">Signout</Button>
      </form>


      {/* <Button>Let build discuss app</Button> */}
    </div>
  );
}
