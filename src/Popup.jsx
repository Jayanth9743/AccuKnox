import { MdCancel } from "react-icons/md";
import PropTypes from 'prop-types';

const Popup = ({
  widgetName,
  setWidgetName, 
  widgetDescription, 
  setWidgetDescription, 
  handleAddWidget, 
  handleClosePopup}) => {
    
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-around w-1/3 h-64 m-auto bg-red-100 rounded-md ">
       <div className="flex flex-col items-center justify-center w-full gap-1">
            <p>widget name</p>
            <input type="text" className="w-2/5 p-1 rounded"
            placeholder="enter name"
            value={widgetName}
            onChange={(e)=>setWidgetName(e.target.value)} />
       </div>
       <div className="flex flex-col items-center justify-center w-full gap-1">
            <p>widget description</p>
            <input type="text" className="w-2/5 p-1 rounded"
            placeholder="enter description"
            value={widgetDescription}
            onChange={(e)=>setWidgetDescription(e.target.value)} />
       </div>
       <button className="w-1/3 h-10 text-center text-white bg-blue-500 rounded" onClick={handleAddWidget}>add widget</button>
       <MdCancel className="absolute text-2xl cursor-pointer right-3 top-3" onClick={handleClosePopup}/>
    </div>
  )
}
// to remove proptypes error
Popup.propTypes = {
    widgetName: PropTypes.string.isRequired,
    setWidgetName: PropTypes.func.isRequired,
    widgetDescription: PropTypes.string.isRequired,
    setWidgetDescription: PropTypes.func.isRequired,
    handleAddWidget: PropTypes.func.isRequired,
    handleClosePopup: PropTypes.func.isRequired,
  };

export default Popup
