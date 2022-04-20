import {ActionTypes} from '../Actionstypes/Actionstypes';
export const Filterdata =(values)=> {
  return {
    type:ActionTypes.FILTER_DATA,
    payload: values
}}
 export const Activeproject =(values)=> {
    return {
      type:ActionTypes.Activeproject,
      payload: values
  }}
  export const Upcoming =(values)=> {
    return {
      type:ActionTypes.Upcomingproject,
      payload: values
  }}

