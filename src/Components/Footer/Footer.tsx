import {GitHubIcon, LinkedinIcon} from '../../../public/images/index'

export function Footer(){

    return(
        <footer className="w-screen flex justify-center p-14 border border-black ">
            <div className="flex items-center justify-center gap-2">

                <div className="p-4 text-gray-400 rounded-full hover:text-emerald-500">
                    <a target='_blank' href="https://github.com/GabrielTheDEV">
                        <GitHubIcon/>
                    </a>
                </div>
                <div className="p-4 text-gray-400 rounded-full hover:text-emerald-500">
                    <a target='_blank' href="https://www.linkedin.com/in/gabriel-barbosa-0a38012a1/">
                        <LinkedinIcon/>
                    </a>
                </div>
                
            </div>
            <div>

            </div>
            <div>

            </div>
        </footer>
    )
}