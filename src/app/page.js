import AllProducts from "@/components/productCard/AllProducts";
import styles from "./page.module.css";
import IncredibleOffers from "@/components/carousels/IncredibleOffers";
import SmallBanner from "@/components/advertise/SmallBanner";
import LargeBanner from "@/components/advertise/LargeBanner";
import SingleBanner from "@/components/advertise/SingleBanner";
import DigiIcons from "@/components/sevenIcons/DigiIcons";


async function getAllProducts() {

  const response = await fetch("http://80.75.14.90:9090/products" )
  if (!response.ok) {
      console.log("error")
      return
  }
  else {
      const data = await response.json()
      return data
  }
}

async function getIncredibleOffer() {

  const response = await fetch("http://80.75.14.90:9090/products/incredibleOffers" )
  if (!response.ok) {
      console.log("error")
      return
  }
  else {
      const data = await response.json()
      return data
  }
}

export default async function Home() {

  const allProducts=await getAllProducts()
  const incredibleOffer=await getIncredibleOffer()

  return (
    <>
      <div className={`${styles.allProducts}`}><AllProducts products={allProducts}/></div>
      <div><DigiIcons/></div>
      <div><SmallBanner/></div>
      <div className={`${styles.IncredibleOffers}`}><IncredibleOffers products={incredibleOffer}/></div>
      <div><LargeBanner/></div>
      <div><SingleBanner/></div>
    </>
  );
}
