import { prisma } from '@/lib';
import { notFound } from 'next/navigation';
import React from 'react'

const PostShow = async({ postId }: { postId: string }) => {
    const post= await prisma.post.findFirst({
        where:{
            id:postId
        }
    });
    if(!post) notFound();

    
  return (
    <div>
        <h1 className='font-bold my-2 text-2xl'>{post.title}</h1>

        <p className='border rounded p-4'>{post.content}</p>
      
    </div>
  )
}

export default PostShow
