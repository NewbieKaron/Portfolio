import { Navbar } from "@page/components/Navbar";
import { Discord, FaceBook, Instagram, LinkedIn } from "@page/components/Socials";
import { Socials } from "@page/enums/page/index"

const Contact = () => {
    return (
      <>
      <Navbar />
    <div className="bg-black text-white flex items-center justify-center min-h-screen">
      <div className="bg-white p-10 rounded-[10px] hover:bg-gray-200 cursor-pointer border-5 border-yellow-200">
        <p className="text-black font-bold"><Discord /> <FaceBook />  <Instagram /> <LinkedIn /> </p>
        <p className="text-black text-2xl font-bold italic">Email: {Socials.EMAIL}</p>
      </div>
    </div>
    </>
    )
}

export default Contact;