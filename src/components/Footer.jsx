import { Mail , Linkedin} from "lucide-react"

export const Footer = () => {
    return (
        <footer  className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
            <a
               target="_blank" href="mailto:ishajain152002@gmail.com"
                className="flex items-center gap-2 card-hover"
            >
                <Mail  className="text-primary" />
                <span >ishajain152002@gmail.com</span>
            </a>

            <a
        href="https://www.linkedin.com/in/isha-jain-468a93214/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 card-hover"
      >
        <Linkedin className="text-primary" />
        <span>LinkedIn</span>
      </a>

        </footer>
    )
}