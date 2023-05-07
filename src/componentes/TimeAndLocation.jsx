import { formatToLocalTime } from "../services/weatherService"
//la HORA ↓↓↓ tiene MINUTOS de DELAY/ATRASO

function TimeAndLocation({weather}) {
  return (
    <main>
        <article className='flex items-center justify-center my-6'>
            <p className='text-white text-xl font-extralight'>
                {formatToLocalTime(weather.dt, weather.timezone)}
            </p>
            
        </article>
        <article className='flex items-center justify-center my-3'>
            <p className='text-white text-3xl font-medium'>
            {`${weather.name}, ${weather.country}`}
            </p>

        </article>
    </main>
  )
}

export default TimeAndLocation