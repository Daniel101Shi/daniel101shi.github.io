import Image from "next/image";

export default function Picture(){
    return (
        <Image src={"/profilePic.JPG"} alt="Profile picture" width={200} height={200} className="rounded-full"/>
    );

}