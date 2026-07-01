import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-[#64ffda] text-[#0a192f] hover:scale-105"
      : "border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f]";

  return (
    <Link
      href={href}
      className={`rounded-md px-7 py-3 transition duration-300 ${styles}`}
    >
      {children}
    </Link>
  );
}