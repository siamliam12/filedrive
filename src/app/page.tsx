"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const createFile = useMutation(api.files.createFile)
  const Files = useQuery(api.files.getFiles)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {
        Files?.map((file)=>{
          return <div key={file._id}>{file.name}</div>
        })
      }
      <Button onClick={()=>{
        createFile({name:"Hello world"})
      }}>Click mE</Button>
    </div>
  );
}
