import { ProgressSpinner } from "primereact/progressspinner"

export const Loading = () => {
    return (
        <div className="flex justify-content-center align-items-center h-screen w-screen">
            <ProgressSpinner/>
        </div>
    )
}