import Typewriter from "typewriter-effect";

export function Typer({
  title,
  content,
}: {
  title: string;
  content: string[];
}) {
  return (
    <div className="hidden w-1/2 sm:flex flex-col justify-center items-center bg-gradient-to-r from-violet-300 to-red-300">
      <h2 className="text-2xl lg:text-4xl font-black text-white tracking-tight [text-shadow:_0_2px_6px_rgba(0,0,0,0.25)] mb-4">
        {title}
      </h2>
      <p className="texxt-lg lg:text-xl font-bold text-white [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)] mb-8">
        <Typewriter
          options={{
            strings: content,
            autoStart: true,
            loop: true,
            delay: 10,
            deleteSpeed: 10,
            cursor: "_",
          }}
        />
      </p>
    </div>
  );
}
