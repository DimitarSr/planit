import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Header from "@/components/Header";
import SyncUser from "@/components/SyncUser";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      <SyncUser /> 
    <html lang="en">
      <body>
        <Header/>  
        {children}
        <Footer/>  
      </body>
    </html>
    </ClerkProvider>
  );
}
