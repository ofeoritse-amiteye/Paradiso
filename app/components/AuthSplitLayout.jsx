export default function AuthSplitLayout({ children }) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      
      {/* LEFT SIDE – FORM */}
      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>

      {/* RIGHT SIDE – IMAGE */}
      <div
        className="hidden md:block bg-cover bg-center"
        style={{
          backgroundImage: "url('/auth-bg.jpg')",
        }}
      />
    </div>
  );
}
