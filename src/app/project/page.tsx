import ProjectCaed from "./ProjectCard";

export default function ProjectPage() {
    

    return(
        // <div className="min-h-screen bg-gray-900 pt-28 flex flex-wrap gap-x-6 gap-y-1 m-0 p-0">
        //         <ProjectCaed 
        //             name="Stackybit" 
        //             title="A website for some project ja" 
        //             image="" 
        //             stackName={["sveltekit" , "tailwind"]}
        //         />
        //         <ProjectCaed 
        //             name="Stackybit" 
        //             title="A website for some project ja" 
        //             image="" 
        //             stackName={["sveltekit" , "tailwind"]}
        //         />
        //         <ProjectCaed 
        //             name="Stackybit" 
        //             title="A website for some project ja" 
        //             image="" 
        //             stackName={["sveltekit" , "tailwind"]}
        //         />
        //         <ProjectCaed 
        //             name="Stackybit" 
        //             title="A website for some project ja" 
        //             image="" 
        //             stackName={["sveltekit" , "tailwind"]}
        //         />
        // </div>
        <div className="min-h-screen bg-gray-900 pt-28 flex flex-col">
            <div className="self-center gap-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-4">
                    <ProjectCaed 
                        name="Stackybit" 
                        title="A website for some project ja" 
                        image="/image/stackybit.png" 
                        stackName={["sveltekit" , "tailwind"]}
                        link={"https://stackybit.com/"}
                        scale={150}
                    />
                    <ProjectCaed 
                        name="StackyCraft" 
                        title="A discordbot for ping minecraft server" 
                        image="/image/stackycraft.png" 
                        stackName={["sveltekit" , "tailwind"]}
                        link={"https://stackybit.com/discord/bot/stackycraft"}
                    />
            </div>
        </div>

    )
}