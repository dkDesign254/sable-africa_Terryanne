import { useState } from "react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: {
    name: string;
    price: string;
    period: string;
    features: string[];
  };
}

export default function CheckoutModal({ isOpen, onClose, plan }: CheckoutModalProps) {
  const [method, setMethod] = useState<"card" | "paypal">("card");
  const [step, setStep] = useState<"form" | "success">("form");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
  };

  const formatCard = (v: string) => {
    const digits = v.replace(/\D/g, "").slice(0, 16);
    return digits.replace(/(\d{4})(?=\d)/g, "$1 ");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      {/* Modal */}
      <div className="relative w-full max-w-md rounded-2xl border border-muted-gold/20 bg-white shadow-2xl dark:bg-sable-black">
        {/* Close */}
        <button onClick={onClose} className="absolute right-4 top-4 rounded-full p-1.5 text-slate-grey/40 transition-colors hover:text-muted-gold dark:text-warm-ivory/40">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
        </button>

        {step === "form" ? (
          <div className="p-6 sm:p-8">
            {/* Header */}
            <div className="mb-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted-gold/20">
                <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" className="text-muted-gold"><path d="M16 4L4 16l12 12 12-12L16 4z" /><path d="M16 8l-6 6 6 6 6-6-6-6z" opacity="0.3" /><circle cx="16" cy="14" r="2" /></svg>
              </div>
              <h2 className="font-heading text-xl font-bold text-sable-black dark:text-warm-ivory">Complete Your Subscription</h2>
              <p className="mt-1 font-body text-sm text-slate-grey/50 dark:text-warm-ivory/50">{plan.name} — {plan.price}{plan.period}</p>
            </div>

            {/* Summary */}
            <div className="mb-6 rounded-xl border border-muted-gold/10 bg-muted-gold/5 p-4">
              <p className="mb-2 font-body text-xs font-semibold tracking-wider text-muted-gold uppercase">Summary</p>
              <div className="flex items-center justify-between">
                <span className="font-body text-sm text-slate-grey/70 dark:text-warm-ivory/70">{plan.name} Plan</span>
                <span className="font-heading text-lg font-bold text-sable-black dark:text-warm-ivory">{plan.price}<span className="text-xs font-normal text-slate-grey/50 dark:text-warm-ivory/50">{plan.period}</span></span>
              </div>
              <ul className="mt-3 space-y-1">
                {plan.features.slice(0, 3).map((f) => (
                  <li key={f} className="flex items-center gap-2 font-body text-xs text-slate-grey/50 dark:text-warm-ivory/50">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-muted-gold"><polyline points="20 6 9 17 4 12" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Payment method */}
            <p className="mb-3 font-body text-xs font-semibold tracking-wider text-slate-grey/50 dark:text-warm-ivory/50 uppercase">Payment Method</p>
            <div className="mb-4 flex gap-3">
              <button onClick={() => setMethod("card")} className={`flex flex-1 items-center justify-center gap-2 rounded-xl border-2 p-3 font-body text-sm font-medium transition-all ${method === "card" ? "border-muted-gold bg-muted-gold/10 text-sable-black dark:text-warm-ivory" : "border-muted-gold/10 text-slate-grey/50 dark:text-warm-ivory/50 hover:border-muted-gold/30"}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="4" width="22" height="16" rx="2" /><path d="M1 10h22" /></svg>
                Card
              </button>
              <button onClick={() => setMethod("paypal")} className={`flex flex-1 items-center justify-center gap-2 rounded-xl border-2 p-3 font-body text-sm font-medium transition-all ${method === "paypal" ? "border-muted-gold bg-muted-gold/10 text-sable-black dark:text-warm-ivory" : "border-muted-gold/10 text-slate-grey/50 dark:text-warm-ivory/50 hover:border-muted-gold/30"}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z"/></svg>
                PayPal
              </button>
            </div>

            {/* Card form */}
            {method === "card" && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1.5 block font-body text-xs font-medium text-slate-grey/50 dark:text-warm-ivory/50">Card Number</label>
                  <input type="text" value={cardNumber} onChange={(e) => setCardNumber(formatCard(e.target.value))} placeholder="4242 4242 4242 4242" className="w-full rounded-xl border border-muted-gold/15 bg-muted-gold/5 px-4 py-3 font-body text-sm text-sable-black placeholder-slate-grey/30 outline-none transition-colors focus:border-muted-gold/40 dark:text-warm-ivory dark:placeholder-warm-ivory/30" />
                </div>
                <div>
                  <label className="mb-1.5 block font-body text-xs font-medium text-slate-grey/50 dark:text-warm-ivory/50">Cardholder Name</label>
                  <input type="text" value={cardName} onChange={(e) => setCardName(e.target.value)} placeholder="John Doe" className="w-full rounded-xl border border-muted-gold/15 bg-muted-gold/5 px-4 py-3 font-body text-sm text-sable-black placeholder-slate-grey/30 outline-none transition-colors focus:border-muted-gold/40 dark:text-warm-ivory dark:placeholder-warm-ivory/30" />
                </div>
                <div className="flex gap-3">
                  <div className="flex-1">
                    <label className="mb-1.5 block font-body text-xs font-medium text-slate-grey/50 dark:text-warm-ivory/50">Expiry</label>
                    <input type="text" value={expiry} onChange={(e) => setExpiry(e.target.value.replace(/\D/g, "").slice(0, 4).replace(/(\d{2})(?=\d)/, "$1/"))} placeholder="MM/YY" className="w-full rounded-xl border border-muted-gold/15 bg-muted-gold/5 px-4 py-3 font-body text-sm text-sable-black placeholder-slate-grey/30 outline-none transition-colors focus:border-muted-gold/40 dark:text-warm-ivory dark:placeholder-warm-ivory/30" />
                  </div>
                  <div className="w-24">
                    <label className="mb-1.5 block font-body text-xs font-medium text-slate-grey/50 dark:text-warm-ivory/50">CVC</label>
                    <input type="text" value={cvc} onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 3))} placeholder="123" className="w-full rounded-xl border border-muted-gold/15 bg-muted-gold/5 px-4 py-3 font-body text-sm text-sable-black placeholder-slate-grey/30 outline-none transition-colors focus:border-muted-gold/40 dark:text-warm-ivory dark:placeholder-warm-ivory/30" />
                  </div>
                </div>
                <button type="submit" className="mt-2 w-full rounded-full bg-muted-gold py-3.5 font-body text-sm font-semibold tracking-wider text-sable-black uppercase transition-all hover:bg-muted-gold/90">
                  Complete Purchase — {plan.price}{plan.period}
                </button>
                <p className="text-center font-body text-[10px] text-slate-grey/30 dark:text-warm-ivory/30">Secure payment simulation. No real charges will be processed.</p>
              </form>
            )}

            {method === "paypal" && (
              <div className="text-center">
                <div className="mb-6 rounded-xl border border-muted-gold/10 bg-muted-gold/5 p-8">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="mx-auto mb-3 text-muted-gold/50"><path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z"/></svg>
                  <p className="font-body text-sm text-slate-grey/60 dark:text-warm-ivory/60">You'll be redirected to PayPal to complete your payment.</p>
                </div>
                <button onClick={handleSubmit} className="w-full rounded-full bg-[#0070BA] py-3.5 font-body text-sm font-semibold tracking-wider text-white uppercase transition-all hover:bg-[#0070BA]/90">
                  Continue to PayPal
                </button>
                <p className="mt-3 text-center font-body text-[10px] text-slate-grey/30 dark:text-warm-ivory/30">Secure payment simulation. No real charges will be processed.</p>
              </div>
            )}
          </div>
        ) : (
          /* Success state */
          <div className="p-6 sm:p-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-500"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
            <h2 className="font-heading text-xl font-bold text-sable-black dark:text-warm-ivory">Subscription Confirmed!</h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-slate-grey/60 dark:text-warm-ivory/60">Thank you for subscribing to the <strong>{plan.name}</strong> plan. You'll receive a confirmation email shortly with your account details and access instructions.</p>
            <div className="mt-6 rounded-xl border border-muted-gold/10 bg-muted-gold/5 p-4">
              <p className="font-body text-xs text-muted-gold/60">Order #{Math.random().toString(36).slice(2, 8).toUpperCase()}</p>
              <p className="mt-1 font-body text-xs text-slate-grey/50 dark:text-warm-ivory/50">Subscription managed by Sable Africa. Payments coming Q3 2026.</p>
            </div>
            <button onClick={onClose} className="mt-6 w-full rounded-full bg-muted-gold py-3.5 font-body text-sm font-semibold tracking-wider text-sable-black uppercase transition-all hover:bg-muted-gold/90">
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
}