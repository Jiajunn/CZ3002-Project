import React from "react";
import { AuthProvider } from "./app/contexts/AuthContext";
import { Router } from "./app/routes/Router";

export default function App() {

  
  return (
    <AuthProvider>
      <Router></Router>
    </AuthProvider>
    
  );
}
