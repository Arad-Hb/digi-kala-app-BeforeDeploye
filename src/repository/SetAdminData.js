'use client'

import { setProductsCount, setUsersCount } from "@/redux/features/slices/AdminSlice";
import { getData } from "@/serverActions/getData";
import { useDispatch } from "react-redux";

export const SetAdminData=(arrey)=>{
    const dispatch=useDispatch()
        let count = 0;
        for (let i = 0; i < arrey.length; i++) {
           count++;
        }
     
        return count; 

}