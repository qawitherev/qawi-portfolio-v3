import "./App.css";
import { Hero } from "./components/Hero";
import { MobileStacks } from "./components/MobileStacks";
import { NavBar } from "./components/NavBar";
import { PageLayout } from "./components/PageLayout";
import { Bento } from "./components/Bento";
import { WebStacks } from "./components/WebStacks";

function App() {
  return (
    <div className='bg-background-dark-blue w-full h-full' >
      <PageLayout>
        <NavBar/>
        <div className='mb-20' />
        <Hero/>
        <div className='md:mb-48 mb-0' />
        <Bento/>
        <div className='mb-20' />
        <MobileStacks/>
        <div className='mb-16' />
        <WebStacks/>
        <div className=' mb-48' />
      </PageLayout>
    </div>
  );
}

export default App;
