
const skills=[
    "HTML",
    "CSS",
    "React",
    "C Programming",
    "Tailwind CSS",
    "C++ Programming",
    "JavaScript",
    //add more later
]

export const SkillsSection = () =>{
    return (<section id="skills">
        <div className="mt-20 animate-fade-in animation-delay-600">
            <h2 className="text-3xl md:text-4xl font-bold mb-1 text-center">
                    My<span className="text-primary"> Skills</span>
                </h2>
            <div className="relative overflow-hidden">
                <div className="flex animate-slide">
                    {[...skills,...skills].map((skill,idx)=>(
                        <div key={idx} className="flex-shrink-0 px-8 py-4">
                            <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>)
}