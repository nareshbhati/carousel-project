import React from "react";
import axios from "axios";

export function submit_parentid(value)
{
  return{
    type    : "SubMItPareNtid",
    payload : value
  }
}
