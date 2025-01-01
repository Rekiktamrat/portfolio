// import { ToastProvider } from './hooks/use-toast'
// import { Hero } from './components/Hero'
// import { Skills } from './components/Skills'
// import { Contact } from './components/Contact'
// import { Projects } from './components/Projects'
// import { Footer } from './components/Footer'  


// function App() {
//   return (
//     <ToastProvider>
//       <Hero />
//       <Skills />
//       <Contact />
//       <Projects />
//       <Footer />
//     </ToastProvider>
//   )
// }
// export default App; 


 import { Hero } from './components/Hero'
 import { Skills } from './components/Skills'
 import { Contact } from './components/Contact'
 import { Projects } from './components/Projects'
 import { Footer } from './components/Footer'  

import { ToastProvider } from './hooks/use-toast';
// ... other imports ...

function App() {
  return (
    <ToastProvider>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
    </ToastProvider>
  );
}

export default App;