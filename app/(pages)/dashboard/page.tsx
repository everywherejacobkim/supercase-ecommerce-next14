"use client";
import { useState, useTransition } from "react";
import Dropzone, { FileRejection } from "react-dropzone";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import { useUploadThing } from "@/libs/uploadthing";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

  const router = useRouter();

  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onClientUploadComplete: ([data]) => {
      const configId = data.serverData.configId;
      alert("Done!");
      startTransition(() => {
        router.push(`/dashboard/${configId}`);
      });
    },
  });

  const onDropAccepted = (acceptedFiles: File[]) => {
    startUpload(acceptedFiles, { configId: undefined });
    setIsDragOver(false);
  };

  // When user drops a file that is not an image(png, jpg, jpeg)
  const onDropRejected = (rejectedFiles: FileRejection[]) => {
    const [file] = rejectedFiles;
    setIsDragOver(false);
    alert(
      `${file.file.type} file is not supported. It must be a png, jpg, or jpeg.`
    );
  };

  const [isPending, startTransition] = useTransition();

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
              {isDragOver ? (
                <div className="flex flex-col justify-center items-center gap-3">
                  <ImageOutlinedIcon
                    fontSize="large"
                    className="text-gray-500"
                  />
                  <p className="text-xl font-semibold text-gray-500">
                    Drop your file here
                  </p>
                </div>
              ) : isUploading || isPending ? (
                <div className="flex flex-col justify-center items-center gap-3">
                  <CircularProgress color="warning" className="opacity-70" />
                  <p className="text-xl font-semibold text-gray-500">
                    Uploading...
                  </p>
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center gap-3">
                  <ImageOutlinedIcon
                    fontSize="large"
                    className="text-gray-500"
                  />
                  <p className="text-xl font-semibold text-gray-400">
                    Drag and drop or click here to add a file
                  </p>
                  <p className="text-sm text-gray-400 mt-2 animate-fade-up animate-once">
                    PNG | JPG | JPEG
                  </p>
                </div>
              )}
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
}
