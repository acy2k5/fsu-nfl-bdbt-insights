import TeamMember from "./TeamMember"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import SocialLink from "@/components/ui/SocialLink"

export default function Team() {
    return (
        <section className="relative">
            {/* Main content container */}
            <div className="max-w-screen-xl mx-auto px-6">
                {/* Responsive vertical padding container */}
                <div className="py-12 md:py-20">
                    {/* Section content */}
                    <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <TeamMember
                            name="Andrew Young"
                            role="Web Developer"
                            pfp="https://i.pinimg.com/736x/aa/c6/a1/aac6a12fd48d80fe1c1d7e4f87505589.jpg"
                        >
                            <SocialLink
                                className="text-purple-600 hover:text-purple-800"
                                icon={<FaGithub />}
                                platform="GitHub"
                                url="https://github.com/acy2k5"
                            />
                            <SocialLink
                                className="text-blue-700 hover:text-blue-900"
                                icon={<FaLinkedin />}
                                platform="LinkedIn"
                                url="https://www.linkedin.com/in/youngandrewchristian/"
                            />
                        </TeamMember>
                        <TeamMember
                            name="Alex Trbovic"
                            role="Data Analyst"
                            pfp="https://i.pinimg.com/736x/aa/c6/a1/aac6a12fd48d80fe1c1d7e4f87505589.jpg"
                        >
                            {" "}
                            <SocialLink
                                className="text-purple-600 hover:text-purple-800"
                                icon={<FaGithub />}
                                platform="GitHub"
                                url="https://github.com/ATrbovic"
                            />
                            <SocialLink
                                className="text-blue-700 hover:text-blue-900"
                                icon={<FaLinkedin />}
                                platform="LinkedIn"
                                url="https://www.linkedin.com/in/alextrbovic/"
                            />
                        </TeamMember>
                        <TeamMember
                            name="Lichun Li"
                            role="Assistant Professor"
                            pfp="https://i.pinimg.com/736x/aa/c6/a1/aac6a12fd48d80fe1c1d7e4f87505589.jpg"
                        >
                            <SocialLink
                                className="text-blue-700 hover:text-blue-900"
                                icon={<FaLinkedin />}
                                platform="LinkedIn"
                                url="https://www.linkedin.com/in/lichun-li-653776263/"
                            />
                        </TeamMember>
                        <TeamMember
                            name="Souhail Marnaoui"
                            role="Data Analyst"
                            pfp="https://i.pinimg.com/736x/aa/c6/a1/aac6a12fd48d80fe1c1d7e4f87505589.jpg"
                        ></TeamMember>
                        <TeamMember
                            name="Nicolas Herbst"
                            role="Data Analyst"
                            pfp="https://i.pinimg.com/736x/aa/c6/a1/aac6a12fd48d80fe1c1d7e4f87505589.jpg"
                        />
                        <TeamMember
                            name="Jose Diaz"
                            role="Data Analyst"
                            pfp="https://i.pinimg.com/736x/aa/c6/a1/aac6a12fd48d80fe1c1d7e4f87505589.jpg"
                        ></TeamMember>
                        <TeamMember
                            name="Olivia Zeng"
                            role="Researcher"
                            pfp="https://i.pinimg.com/736x/aa/c6/a1/aac6a12fd48d80fe1c1d7e4f87505589.jpg"
                        ></TeamMember>
                    </ul>
                </div>
            </div>
        </section>
    )
}
