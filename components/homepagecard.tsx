'use client'
import { Poppins } from "next/font/google";
import { 
    Card,
    CardContent,
    CardFooter,
    CardHeader
  } from "@/components/ui/card";

import SearchBar from "./Searchbar";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
import { useEffect, useState } from "react";
   

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"]
  })

  interface HomeCardWrapper {
    
    
  };

  export const HomeCardWrapper = ({
    
    
  }: HomeCardWrapper) => { 
    const [food, setFood] = useState<any[]>([]);

  };


  export default HomeCardWrapper;
 
 
