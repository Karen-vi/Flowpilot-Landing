"use client"
import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)


  const menuItems = [
    { label: "Work", href: "#" },
    { label: "Services", href: "#" },
    { label: "Get in touch", href: "#" },
  ]

  const resources = [
    { label: "Twitter/X", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Terms of Service", href: "#" },
  ]

  return (
    <>
      {/* BOTÓN HAMBURGUESA */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-[1000] flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className="w-5 h-0.5 bg-white rounded-full"
          transition={{ duration: 0.3 }}
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          className="w-5 h-0.5 bg-white rounded-full"
          transition={{ duration: 0.3 }}
        />
        
      </button>

      {/* MODAL PEQUEÑO */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* OVERLAY - Cierra el menú al hacer click */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[998]"
            />

            {/* MENÚ MODAL */}
            <motion.div
              className="fixed top-20 right-4 sm:right-6 z-[999]  backdrop-blur-lg border border-white/10 rounded-2xl p-4 sm:p-6 w-[calc(100vw-2rem)] sm:w-80 max-w-sm"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* NAVEGACIÓN PRINCIPAL */}
              <div className="flex flex-col gap-3 mb-6">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    whileHover={{ x: 4 }}
                    className="text-sm font-medium text-white hover:text-title transition-colors cursor-pointer"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              {/* DIVIDER */}
              <div className="h-px bg-white/10 mb-6" />

              {/* RECURSOS */}
              <div className="flex flex-col gap-3">
                <p className="text-xs uppercase tracking-widest text-white/40 mb-2">
                  Resources
                </p>
                {resources.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    whileHover={{ x: 4 }}
                    className="text-xs text-white/70 hover:text-title transition-colors cursor-pointer"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}