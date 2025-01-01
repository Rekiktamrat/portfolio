// src/hooks/use-toast.js
import { createContext, useContext, useState } from 'react';

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  const showToast = (data) => {
    setToast(data);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {toast && (
        <div className="fixed bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-md shadow-lg">
          <h3 className="font-bold">{toast.title}</h3>
          <p className="text-sm">{toast.description}</p>
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}