
export const Button = () => {
    const changeButtonProp = () => {
        console.log("Clicked button");
    }
    return (
        <div> 
            <button className="rounded-[10px] bg-blue-500 mt-4 sm:mt-6 md:mt-8 lg:mt-10 px-8 py-4 cursor-pointer hover:bg-red-500" onClick={changeButtonProp}>Click</button>
        </div>
    )
}