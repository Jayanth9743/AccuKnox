
import { useSelector } from 'react-redux'

const Widgets = () => {

const categories = useSelector(state=>state.dashboard.categories)

  return (
    <div className='flex flex-col items-start justify-center w-full gap-8 mt-[5rem] '>
      {categories.map(cat=>(
        <div key={cat.id} className='flex flex-col items-start justify-center w-full h-auto gap-2'>
          <p className='ml-4 text-2xl font-medium'>{cat.name}</p>
            <div className='flex items-center justify-start w-full gap-2'>
              {cat.widgets.map(widget=>(
                <div key={widget.id} className=' ml-4 flex items-center justify-center w-1/3 h-[13rem] bg-[#ccc] rounded-md '>
                  <h3>{widget.name}</h3>
                  <p>{widget.description}</p>
                </div>
              ))}
              {cat.widgets.length<3 &&( <div className='flex items-center ml-4 justify-center w-1/3 h-[13rem] bg-[#ccc] rounded-md '>
                <button>+ Add Widget</button>
              </div>)}
            </div>
        </div>
      ))}
    </div>
  )
}

export default Widgets
