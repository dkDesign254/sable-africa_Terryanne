import { useState } from "react";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<
    { role: "assistant" | "user"; text: string }[]
  >([
    {
      role: "assistant",
      text: "Good morning. I'm your Sable Intelligence Assistant. Ask me about African markets, economic trends, or compare economies.",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setInput("");

    // Simulated response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "I'm analysing that query against our intelligence database. For the full analysis, upgrade to a Professional subscription. For now: this is a demo of the Sable Intelligence Assistant interface.",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat window */}
      <div
        className={`ai-assistant mb-3 flex flex-col overflow-hidden rounded-2xl border border-muted-gold/20 bg-sable-black shadow-2xl dark:bg-sable-black ${
          open ? "open" : "h-0 w-0 border-0"
        }`}
        style={open ? {} : undefined}
      >
        {open && (
          <>
            {/* Header */}
            <div className="flex items-center justify-between border-b border-muted-gold/10 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted-gold/20">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className="text-muted-gold"
                  >
                    <path d="M16 4L4 16l12 12 12-12L16 4z" />
                    <path d="M16 8l-6 6 6 6 6-6-6-6z" opacity="0.3" />
                    <circle cx="16" cy="14" r="2" />
                  </svg>
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-warm-ivory">
                    Sable Intelligence
                  </p>
                  <p className="flex items-center gap-1.5 font-body text-[10px] text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-1.5 text-warm-ivory/40 transition-colors hover:text-muted-gold"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 font-body text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-muted-gold/20 text-warm-ivory"
                        : "bg-muted-gold/10 text-warm-ivory/80"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t border-muted-gold/10 p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about African markets..."
                  className="flex-1 rounded-full border border-muted-gold/15 bg-muted-gold/5 px-4 py-2.5 font-body text-sm text-warm-ivory placeholder-warm-ivory/30 outline-none transition-colors focus:border-muted-gold/40"
                />
                <button
                  onClick={handleSend}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-muted-gold text-sable-black transition-colors hover:bg-muted-gold/90"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-muted-gold text-sable-black shadow-lg transition-all hover:bg-muted-gold/90 hover:shadow-xl"
        aria-label="Toggle Sable Intelligence Assistant"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        )}
      </button>
    </div>
  );
}