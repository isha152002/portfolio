import {Network,Cpu, Code} from "lucide-react"
export const AboutSection= () =>{
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About<span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold" >M.Tech CSE student at IIT Guwahati</h3>
                        <p className="text-muted-foreground">Strong interest in core computer science fundamentals and how complex systems are built from low-level mechanisms behind the scenes.</p>
                        <p className="text-muted-foreground">Enjoy understanding how algorithms, data structures, and system-level design translate into performance and scalability in real software.

                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            {/*
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>
                            */}
                            <a href="/isha_resume.pdf" download="IshaJain_CV.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                {" "}
                                Download CV
                            </a>
                            

                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Network className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Data Structures & Algorithms</h4>
                                    
                                    <p className="text-muted-foreground">Strong foundation in arrays, trees, graphs, and dynamic programming, with a focus on efficient and optimized solutions.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Cpu className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Operating Systems Internals</h4>
                                    
                                    <p className="text-muted-foreground">Interest in understanding how processes, memory, scheduling, and concurrency work behind the scenes in operating systems.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Programming & Problem Solving</h4>
                                    
                                    <p className="text-muted-foreground">Hands-on experience with C/C++ , focused on logical thinking and debugging.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}