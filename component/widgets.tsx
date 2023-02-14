import dynamic from "next/dynamic"
import { Suspense } from "react"
import ErrorBoundary from "./error-boundary"

interface WrapperInterface {
    children: React.ReactNode | React.ReactNode[]
}
export const MFWrapper = ({ children }: WrapperInterface) => {
    return (
        <Suspense fallback="Loading...">
            <ErrorBoundary>{children}</ErrorBoundary>
        </Suspense>
    )
}

//@ts-ignore
export const Widget1 = dynamic(() => import('widget1/demo'), { ssr: false, });
//@ts-ignore
export const Widget2 = dynamic(() => import('widget2/demo'));
//@ts-ignore
export const Widget3 = dynamic(() => import('widget3/demo'));
//@ts-ignore
export const Widget4 = dynamic(() => import('widget4/demo'));
//@ts-ignore
export const Widget5 = dynamic(() => import('widget5/demo'));