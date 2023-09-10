import { Spinner } from "@nextui-org/react";

function Loading() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <Spinner label="Loading..." color="danger" labelColor="danger" />
    </div>
  );
}

export default Loading;
