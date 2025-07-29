import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { PostWithData } from "@/lib/query/post";
import Link from "next/link";

type PostListProps = {
  fetchData: () => Promise<PostWithData[]>;
};

const TopList: React.FC<PostListProps> = async ({ fetchData }) => {
  const posts = await fetchData();
  console.log(posts);
  return (
    <div className="flex flex-col gap-2">
      {posts.map((post) => (
        <Link href={`/topics/${post.title}`} key={post.id}>
          <Card  key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription className="flex items-center justify-between">
                <h1>By {post.user.name}</h1>
                <h1>{post._count.comments} comments</h1>
              </CardDescription>
            </CardHeader>
          </Card>
         </Link>
      ))}
    </div>
  );
};
export default TopList;
