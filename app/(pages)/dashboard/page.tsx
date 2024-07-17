"use client";
import { useState } from "react";
import Dropzone from "react-dropzone";

export default function Dashboard() {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

  const onDropAccepted = () => {
    console.log("Accepted");
  };
  const onDropRejected = () => {};

  return (
    <div className="w-full h-full">
      <div className="flex justify-center w-full">
        <Dropzone
          onDropAccepted={onDropAccepted}
          onDropRejected={onDropRejected}
          accept={{
            "image/*": [".jpg", ".jpeg", ".png"],
          }}
          onDragEnter={() => setIsDragOver(true)}
          onDragLeave={() => setIsDragOver(false)}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className="w-4/5 min-h-[70vh] max-h-[100vh] bg-neutral-100 rounded-xl border-dashed border-4 border-gray-400 flex flex-col justify-center items-center cursor-pointer"
            >
              <input {...getInputProps()} />
              <p className="text-xl font-semibold text-gray-400">Drag and drop or click here to add a file</p>
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
}
