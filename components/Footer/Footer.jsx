import SocialMedia from "components/SocialMedia";

export default function Footer() {
  return (
    <footer className="w-full max-w-container mx-auto border-t p-5 flex items-center justify-between text-sm text-gray-500">
      <div>
        <p>
          <span className="font-semibold">Phone: </span>+91 9901373620
        </p>
        <p>
          <span className="font-semibold">E-mail: </span>karthikpadav@gmail.com
        </p>
      </div>
      <SocialMedia />
    </footer>
  );
}
