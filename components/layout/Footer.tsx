export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-800 pt-8 pb-12">
      <p className="text-sm leading-7 text-slate-500">
        Built with{" "}
        <span className="text-slate-300">Next.js</span>,
        {" "}Tailwind CSS and{" "}
        <span className="text-slate-300">TypeScript</span>.
      </p>

      <p className="mt-3 text-sm text-slate-500">
        Inspired by Brittany Chiang.
      </p>

      <p className="mt-8 text-xs text-slate-600">
        © 2025 Mazen Eltokhy
      </p>
    </footer>
  );
}