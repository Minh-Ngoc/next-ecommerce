import { Card, Skeleton } from "@nextui-org/react";

function LoadingPage() {
    return ( 
        <Card className="w-full h-screen space-y-5 p-4" radius="lg">
            <Skeleton className="rounded-lg h-2/6">
                <div className="rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="space-y-3 h-2/6">
                <Skeleton className="h-1/4 w-3/5 rounded-lg">
                    <div className="w-3/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="h-1/4 w-4/5 rounded-lg">
                    <div className="w-4/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="h-1/4 w-2/5 rounded-lg">  
                    <div className="w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
            </div>
        </Card>
    );
}

export default LoadingPage;