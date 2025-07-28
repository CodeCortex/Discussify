"use client";

import React, { useActionState, useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { createComment } from "@/actions/create-comment";

const CommentCreateForm = () => {
  const [open, setOpen] = useState(true);
  const [formState, action]= useActionState(createComment, {errors:{}})
  return (
    <div>
      <Button size={"sm"} variant={"link"} onClick={() => setOpen(!open)}>
        {" "}
        Reply
      </Button>
      {open && (
        <form action="" className="space-y-2">
          <Textarea
          name="content"
            className="bg-gray-100 focus-visible:ring-0"
            placeholder="write a comment..."
          />
          <Button size={"sm"} variant={"secondary"}>
            Save
          </Button>
        </form>
      )}
    </div>
  );
};

export default CommentCreateForm;
