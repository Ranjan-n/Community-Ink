export function LoginSubHeading({
  setShowSignIn,
  showSignIn,
}: {
  setShowSignIn: React.Dispatch<React.SetStateAction<boolean>>;
  showSignIn: boolean;
}) {
  return (
    <h3 className="text-xs text-gray-500 pt-3 flex justify-center">
      {showSignIn ? `Don't have an account? ` : `Already have an account? `}
      <div
        className="pl-1 hover:underline hover:cursor-pointer"
        onClick={() => setShowSignIn(!showSignIn)}
      >
        {showSignIn ? "Sign Up" : "Sign In"}
      </div>
    </h3>
  );
}
