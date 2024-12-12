interface BadgeProps {
    color: string
    icon: string
    isLocked?: boolean
  }
  
  export function Badge({ color, icon, isLocked }: BadgeProps) {
    const bgColor = isLocked ? "bg-gray-200" : `bg-${color}-100`
    const textColor = isLocked ? "text-gray-400" : `text-${color}-500`
  
    return (
      <div
        className={`flex h-20 w-20 items-center justify-center rounded-xl ${bgColor}`}
      >
        <span className={`text-2xl ${textColor}`}>{isLocked ? "🔒" : icon}</span>
      </div>
    )
  }
  
  