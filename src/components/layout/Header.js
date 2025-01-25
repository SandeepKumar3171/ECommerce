import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";



function Header() {
  const dispatch = useDispatch();


  return (
    <div>
      <h1>Header</h1>
    </div>
  );
}

export default Header;