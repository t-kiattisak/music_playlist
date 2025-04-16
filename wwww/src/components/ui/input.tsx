import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

function Input({ className, type, startIcon, endIcon, ...props }: InputProps) {
  return (
    <div className='relative'>
      {startIcon && (
        <div className='absolute left-1.5 top-1/2 transform -translate-y-1/2'>
          {startIcon}
        </div>
      )}
      <input
        type={type}
        data-slot='input'
        className={cn(
          "file:text-foreground placeholder:text-white/60 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-white shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[0px] border-spotify-dark",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          startIcon ? "pl-8" : "",
          endIcon ? "pr-8" : "",
          className
        )}
        {...props}
      />
      {endIcon && (
        <div className='absolute right-3 top-1/2 transform -translate-y-1/2'>
          {endIcon}
        </div>
      )}
    </div>
  )
}

export { Input }
