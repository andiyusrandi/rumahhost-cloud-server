import React from "react";

function Loading() {
  return (
    <main className="h-screen">
      <div className="container flex items-center justify-center h-auto">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-[#323548]/50 border-t-[#323548]" />
      </div>
    </main>
  );
}

export default Loading;
