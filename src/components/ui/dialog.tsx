'use client'

import * as React from 'react'
import { X } from '../icons'
import { useLockBodyScroll } from './use-lock-body-scroll'

export function Dialog({
  children,
  open,
  onOpenChange,
}: {
  children: React.ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const panelRef = React.useRef<HTMLDivElement>(null)

  useLockBodyScroll(open)

  React.useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onOpenChange(false)
    }
    document.addEventListener('keydown', onKeyDown)
    panelRef.current?.focus()
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onOpenChange])

  if (!open) return null

  return (
    <div
      onClick={() => onOpenChange(false)}
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 backdrop-blur-sm animate-fade-in sm:items-center sm:p-4"
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="
          relative w-full max-w-3xl max-h-[92dvh] overflow-y-auto overscroll-contain outline-none
          rounded-t-2xl border border-white/15 bg-navy p-4 text-white shadow-2xl
          animate-slide-up sm:max-h-[90vh] sm:rounded-lg sm:p-6
        "
      >
        {/* Drag affordance on mobile */}
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-white/20 sm:hidden" />
        <button
          onClick={() => onOpenChange(false)}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-navy-light/80 text-white/80 transition-colors hover:bg-gold hover:text-navy sm:right-4 sm:top-4"
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>
  )
}

export function DialogContent({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`pt-2 ${className}`}>{children}</div>
}

export function DialogHeader({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`flex flex-col space-y-1.5 text-left mb-4 ${className}`}>{children}</div>
}

export function DialogTitle({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <h3 className={`text-2xl font-serif font-bold text-gold ${className}`}>{children}</h3>
}

export function DialogDescription({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`text-sm text-white/70 ${className}`}>{children}</div>
}
