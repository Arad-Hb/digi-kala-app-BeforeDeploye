import styles from "./page.module.css";
import IncredibleOffers from "@/components/carousels/IncredibleOffers";
import SmallBanner from "@/components/advertise/SmallBanner";
import LargeBanner from "@/components/advertise/LargeBanner";
import SingleBanner from "@/components/advertise/SingleBanner";
import DigiIcons from "@/components/sevenIcons/DigiIcons";
import CategoriesItems from "@/components/categorieItems/CategoriesItems";
import MainSlider from "@/components/slider/MainSlider";
import BrandsCarousel from "@/components/carousels/BrandsCarousel";
import { getData } from "@/serverActions/getData";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { Suspense } from "react";
import MainLayout from "@/components/mainLayout/MainLayout";


export default async function Home() {

  const data=await getData("public/mainSlider")

  return (
    <>
    <MainLayout>
      <Suspense fallback={<h1>main slider is loading...</h1>}>
        <div><MainSlider value={data}/></div>
      </Suspense>
      <div><CategoriesItems/></div>
      <div><SingleBanner/></div>
      <Suspense fallback={<h1>digi icons is loading...</h1>}>
        <div><DigiIcons/></div>
      </Suspense>
      <div><SmallBanner/></div>
      <Suspense fallback={<h1>incredibale offer is loading...</h1>}>
        <div><IncredibleOffers/></div>
      </Suspense>
      <div><LargeBanner/></div>
      <div><BrandsCarousel/></div>
    </MainLayout>
    
    </>
  );
}
