import {Github, ArrowRight} from "lucide-react"
const projects = [
    {
        id:1,
        title: " Command Shell on Custom OS API",
        description: "Implemented a DOS-style OS API layer and prototype command processor, decoupled from POSIX for future x86 kernel integration.",
        image: "/projects/project1.png",
        tags: ["C Programming", "POSIX Internals","Low-Level I/O"],
        //demoUrl:"#",
        githubUrl: "https://github.com/isha152002/myOS.git",

    },

    {
        id:2,
        title: "Personal Portfolio Website",
        description: " Developed a responsive, component-driven portfolio SPA using React.js and Tailwind CSS",
        image: "/projects/project2.png",
        tags: ["React.js", "Tailwind CSS","SPA"],
        //demoUrl:"#",
        githubUrl: "https://github.com/isha152002/portfolio.git",

    },


]


export const ProjectSection=()=>{
    return (
    <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">My<span className="text-primary"> Projects</span></h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. 
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project,key) =>(
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "/>
                        </div>
                        <div className="p-3">
                            <div className="flex flex-wrap gap-2 mb-1">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/10">
                                        {tag}
                                    </span>
                                ))}

                            </div>
                        
                        <h3 className="test-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-2">{project.description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3 p-2">
                                
                                <a target ="_blank" href={project.githubUrl} 
                                   className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                >
                                    <Github size={20} />
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target ="_blank" href="https://github.com/isha152002">
                    Check My Github <ArrowRight size={16} />
            </a>
            </div>
        </div>

    </section>
    )
}