import React, { useState, useEffect, createContext } from "react";
import { Spinner } from "reactstrap";

export const CategoryProfileContext = createContext();

export function UserProfileProvider(props) {

    const apiUrl = "https://localhost:5001";

    const 
