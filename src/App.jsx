import ButtonGradient from'./assets/svg/ButtonGradient'
import Button from "./components/Button";
import Footer from './components/Footer';
import Header from "./components/Header";


const App=() =>{
  return (
    <>
     
    <div className="pt-[4.75rem] lg:pt-[5.24rem] overflow-hidden">
      <Header/>
     <Button className='mt-10' href='#login'>
      replace
     </Button>

     <Footer/>
     
    </div>

   <ButtonGradient/>

    </>
   
  )
}

export default App;