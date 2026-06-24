'use client'

import { X } from 'lucide-react'
import { useState } from 'react'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="announcement-bar">
      <div className="announcement-content">
        <p>Bem-vindo ao Iate Clube Brasileiro!</p>
      </div>
      <button onClick={() => setVisible(false)} className="announcement-close">
        <X size={16} />
      </button>
    </div>
  )
}
