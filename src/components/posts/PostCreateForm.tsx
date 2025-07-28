"use client"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { createTopics } from "@/actions/create-topics";
import { useActionState } from "react";
import { Divide } from "lucide-react";
import { createPost } from "@/actions/create-post";

type CreatePostFormProps={
    slug:string;
}


const PostCreateForm :React.FC<CreatePostFormProps> = ({slug}) => {
  const [formState, action]= useActionState(createPost.bind(null, slug),{errors:{}}) 


  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button>New a post</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">



          <form action={action}>
            <DialogHeader>
              <DialogTitle>Create a Post</DialogTitle>
              <DialogDescription>
                Write a new post. Click save when
                you are done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" />
              </div>
              {formState.errors.title && <p className="text-sm text-red-600">{formState.errors.title}</p>}
              <div className="grid gap-3">
                <Label htmlFor="content">Content</Label>
                <Textarea id="content" name="content" />
              </div>
              {formState.errors.content && <p className="text-sm text-red-600">{formState.errors.content}</p>}
              {formState.errors.formError && <div className="border border-red-600 bg-red-200 p-2 rounded ">{formState.errors.formError}</div>}
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>



          
        </DialogContent>
      </form>
    </Dialog>
  );
};
export default PostCreateForm;
