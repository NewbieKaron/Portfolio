
import { ButtonLabel } from "@page/enums/page";

export const Button = () => {
    const changeButtonProp = () => {
        console.log("Clicked button");
        document.body.classList.toggle("dark");
    }
    return (
        <div> 
            <button className="rounded-[10px] bg-blue-500 mt-4 sm:mt-6 md:mt-8 lg:mt-10 px-8 py-4 cursor-pointer hover:bg-red-500" onClick={changeButtonProp}>{ButtonLabel.INDEX_BUTTON_LABEL}</button> 
        </div>
    )
}

//<Link href='/projects'> </Link>