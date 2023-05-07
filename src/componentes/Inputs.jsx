import { UilSearch,UilMapMarkerAlt } from '@iconscout/react-unicons'
import { useState } from 'react'
import { toast } from 'react-toastify'

function Inputs({setQuery,units,setUnits}) {

  const [ciudad,setCiudad] = useState("")

  function onChange(e) {
    e.preventDefault()
    setCiudad(e.target.value)
  }

  function handleSearchClick() {
    if (ciudad !== "") {
      setQuery({q:ciudad})
      setCiudad("")
    }
  }

  function handleLocationClick() {
    if(navigator.geolocation){
      toast.info("Buscando ubicación del usuario")
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Ubicación encontrada")
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        setQuery({lat,lon})
      })
    }
  }

  function handleUnitsChange(e) {
    const selectedUnit = e.currentTarget.name
    if (units !== selectedUnit) {
      setUnits(selectedUnit)
    }
  }

  return (
    <main className= 'flex flex-row justify-center my-6'>
      <form className= 'flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input 
          type= "text" 
          placeholder= 'busca una ciudad...' 
          value= {ciudad}
          onChange= {onChange}
          className= 'text-xl font-light p-2 w-full shadow-xl focus:outline-none placeholder:capitalize'
        />
        <UilSearch 
          size= {25} 
          className= "text-white cursor-poiner transition ease-out hover:scale-150 hover:cursor-pointer"
          onClick= {handleSearchClick}
        />
        <UilMapMarkerAlt 
          size=  {25} 
          className= "text-white cursor-poiner transition ease-out hover:scale-150 hover:cursor-pointer"
          onClick= {handleLocationClick}
        />
      </form>
      <aside className='flex flex-row w-1/4 items-center justify-center'>
        <button 
          name= 'metric' 
          className='text-xl text-white font-light transition ease-out hover:scale-150'
          onClick={handleUnitsChange}>
            °C
        </button>
        <p className='text-xl text-white mx-2'>|</p>
        <button 
          name='imperial' 
          className='text-xl text-white font-light transition ease-out hover:scale-150'
          onClick={handleUnitsChange}>
            °F
        </button>
      </aside>
    </main>
  )
}

export default Inputs