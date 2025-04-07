import { ProjectLinks } from "@page/enums/page";
import Link from "next/link";

const Projects = () => {
    return (
        <div className="bg-black text-white p-4 shadow-md flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Projects</h1>
            <h2 className="font-bold text-xl mb-4 bg-green-500 p-2 rounded-[10px]">
                <Link href={ProjectLinks.WORK_HOURS_CALCULATOR}>Work Hours Calculator</Link>
            </h2>
        </div>
    )
}

export default Projects;