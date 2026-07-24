'use client'

import * as React from 'react'
import { X } from 'lucide-react'

export function Dialog({
  children,
  open,
  onOpenChange,
}: {
  children: React.ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-navy border border-white/15 rounded-lg shadow-2xl p-6 text-white">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 z-10 p-2 rounded-full bg-navy-light/80 hover:bg-gold hover:text-navy text-white/80 transition-colors"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
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
