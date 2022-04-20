import {ActionTypes} from '../Actionstypes/Actionstypes';
import cardimg1 from '../../Image/Rectangle165.png';
import cardimg2 from '../../Image/Rectangle166.png';
const cards=[
    {
        id:Math.random().toString(),
        status:'active',
        totalrise:'1000$',
        allocation:'750$ Max',
        img:`${cardimg1}`
    },
    {
        id:Math.random().toString(),
        status:'active',
        totalprise:'2000$',
        allocation:'700$ Max',
        img:`${cardimg2}`
    },
    {
        id:Math.random().toString(),
        status:'active',
        totalrise:'100$',
        allocation:'650$ Max',
        img:`${cardimg2}`
    },
    {
        id:Math.random().toString(),
        status:'upcoming',
        totalprize:'1000$',
        allocation:'850$ Max',
        img:`${cardimg1}`  
    }
]
const userReducer=(state=cards,actions)=>{
    switch(actions.type){
      case ActionTypes.FILTER_DATA:
        var filterstate='';
      const status=actions.payload;
      filterstate=state.filter((items)=>{ return items.status==status});
       return filterstate;
      default: 
      return state;
    }
}
export default userReducer