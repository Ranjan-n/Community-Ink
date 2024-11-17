export function LoginHeading({ heading }: { heading: string }) {
  return (
    <h1 className="md:text-2xl xl:text-3xl flex justify-center font-extrabold text-center">
      {heading}
    </h1>
  );
}
