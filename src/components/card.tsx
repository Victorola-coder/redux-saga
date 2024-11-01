// import Glow from "./glow";

export default function Cards({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    // <Glow>
    <div className="w-full md:w-1/2 border border-gray-200 h-[250px] shadow-md">
      <div className="flex flex-col items-center justify-center h-full">
        <h5 className="text-4xl font-medium text-main">{title}</h5>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
    // </Glow>
  );
}
