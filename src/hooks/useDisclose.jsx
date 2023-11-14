import React, { useState } from 'react';
const useDisclose = () => {
    const [isOpen,setIsOpen]=useState(false);

    const onOpen=()=>{
        setIsOpen(true);
      }
      const isClose=()=>{
        setIsOpen(false);
      }
  return {isClose,isOpen,onOpen}
}

export default useDisclose