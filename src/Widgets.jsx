import { MdCancel } from "react-icons/md";
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addWidgets, removeWidgets } from './Redux/WidgetSlice'
import Popup from './Popup'

const Widgets = () => {

const categories = useSelector(state=>state.dashboard.categories);
const dispatch = useDispatch();
const [isPopup, setIsPopup] = useState(false);
const [selectedCategory, setSelectedCategory] = useState(null);
const [widgetName, setWidgetName] = useState('');
const [widgetDescription, setWidgetDescription] = useState('');
const [hover, setHover] = useState(null);

//handleAddClick function
const handleAddClick = (id) => {
  setSelectedCategory(id);
  setIsPopup(true);
}

//handleAddWidget function
const handleAddWidget = () => {
  if(widgetName && widgetDescription && selectedCategory){
    const newWidget = {
      id: Date.now(),
      name: widgetName,
      description: widgetDescription
    }
    dispatch(addWidgets({categoryId: selectedCategory, widget: newWidget}))
    setIsPopup(false);
    setWidgetName('');
    setWidgetDescription('');

}}

//handleRemoveWidget function
const handleRemoveWidget = (categoryId, widgetId)=>{
  dispatch(removeWidgets({categoryId, widgetId}))
}

//handleClosePopup function
const handleClosePopup = () => {
  setIsPopup(false);
  setWidgetName('');
  setWidgetDescription('');
}

  return (
    <div className='flex flex-col items-start justify-center w-full gap-8 mt-[5rem] '>
      {categories.map(cat=>(
        <div key={cat.id} className='flex flex-col items-start justify-center w-full h-auto gap-2 '>
          <p className='ml-4 text-2xl font-medium'>{cat.name}</p>
            <div className='flex items-center justify-start w-full gap-2'>
              {cat.widgets.map(widget=>(
                <div key={widget.id} className=' ml-4 relative flex flex-col items-center  justify-center gap-8 w-1/3 h-[13rem] rounded-md bg-gradient-to-r from-rose-100 to-teal-100 '
                onMouseEnter={()=>setHover(widget.id)}
                onMouseLeave={()=>setHover(null)}>
                  <p className='text-2xl font-medium '>{widget.name}</p>
                  <p className='text-xl'>{widget.description}</p>
                  {hover===widget.id && (<MdCancel className='absolute text-2xl cursor-pointer right-3 top-3' onClick={()=>handleRemoveWidget(cat.id,widget.id)} />)}
                </div>
              ))}
              {cat.widgets.length<3 &&( <div className='flex items-center ml-4 justify-center w-1/3 h-[13rem] bg-[#ccc] rounded-md cursor-pointer' onClick={()=>handleAddClick(cat.id)}>
                <p>+ Add Widget</p>
              </div>)}
            </div>
        </div>
      ))}
      {isPopup && (<Popup
        widgetName={widgetName}
        setWidgetName={setWidgetName}
        widgetDescription={widgetDescription}
        setWidgetDescription={setWidgetDescription}
        handleAddWidget={handleAddWidget}
        handleClosePopup={handleClosePopup}
      />)}
    </div>
  )
}

export default Widgets
