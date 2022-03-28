import Image from "next/image";

export const Main = () => {
  return (
    <div className="flex items-center flex-col">
      <span className="block">
        <Image src="/fv01.PNG" alt="First View" width={640} height={640} />
      </span>
      <p>welcom to Gallemy!!!</p>
    </div>
  );
};
