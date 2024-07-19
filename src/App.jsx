import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Offers from "./components/Offers"
import PopularProduct from "./components/PopularProduct"
import Review from "./components/Review"
import Service from "./components/Service"
import SubscribedPerson from "./components/SubscribedPerson"
import SuperQuality from "./components/SuperQuality"

const App =() => {

  return (
    <main className="relative">
      <Navbar />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
          <PopularProduct />
      </section>
      <section className="padding">
          <SuperQuality />
      </section>
      <section className="padding-x py-10">
         <Service />
      </section>
      <section className="padding">
         <Offers />
      </section>
      <section className="bg-pale-blue padding">
         <Review />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
          <SubscribedPerson /> 
      </section>
      <section className="bg-black padding-x padding-t pb-8">
          <Footer />
      </section>
    </main>
  )
}
export default App;