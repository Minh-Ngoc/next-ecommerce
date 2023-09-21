"use client";

import { Spinner } from "@nextui-org/react";

export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen">
            <Spinner
                label="Secondary"
                color="secondary"
                labelColor="secondary"
            />
        </div>
    );
}
