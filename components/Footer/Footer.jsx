import SocialMedia from "components/SocialMedia";

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 w-full max-w-container mx-auto border-t p-5 text-sm text-gray-500">
      <div>
        <p className="md:text-left text-center">
          <span className="font-semibold">Phone: </span>+91 9901373620
        </p>
        <p className="md:text-left text-center">
          <span className="font-semibold">E-mail: </span>
          karthikpadav@gmail.com
        </p>
      </div>
      <div className="flex justify-center md:justify-end md:pt-0 pt-2">
        <div>
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
}
