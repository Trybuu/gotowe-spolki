import React from "react";

export default function GetSizeWhenResize() {
    React.useEffect(() => {
      function handleResize() {
        let iWidth = window.innerWidth;
        let iHeight = window.innerHeight;
        console.log('resized to: ', iWidth, 'x', iHeight)
        // return iWidth, iHeight;
  }
  
      window.addEventListener('resize', handleResize)
    })
  }