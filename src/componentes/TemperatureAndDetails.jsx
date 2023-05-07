import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
    UilArrowUp,
    UilArrowDown,
  } from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

function TemperatureAndDetails({weather}) {
  return (
    <main>
        <article className="flex items-center justify-center py-6 text-xl text-cyan-300">
            <p>{weather.details}</p>
        </article>

        <article className="flex flex-row items-center justify-between text-white py-3">
            <img 
                src={iconUrlFromCode(weather.icon)} 
                alt="iconoTemperatura"
                className="w-20"
            />
            <p className="text-5xl"> {weather.temp.toFixed()}° </p>

            <article className="flex flex-col space-y-2">
                <section className="flex font-light text-sm items-center justify-center">
                    <UilTemperature size={18} className="mr-1"/>
                    S.Térmica:
                    <span className="font-medium ml-1">{weather.feels_like.toFixed()}°</span>
                </section>
                <section className="flex font-light text-sm items-center justify-center">
                    <UilTear size={18} className="mr-1"/>
                    Humedad:
                    <span className="font-medium ml-1">{weather.humidity} %</span>
                </section>
                <section className="flex font-light text-sm items-center justify-center">
                    <UilWind size={18} className="mr-1"/>
                    Viento:
                    <span className="font-medium ml-1">{weather.speed} km/h</span>
                </section>
            </article>
        </article>

        <article className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
            <UilSun/>
            <p className="font-light text-center">
                Amanece <span className="font-medium ml-1 text-center">{formatToLocalTime(weather.sunrise, weather.timezone, "hh:mm a")}</span> 
            </p>
            <p className="font-light">|</p>
            <UilSunset/>
            <p className="font-light text-center">
                Anochece <span className="font-medium ml-1 text-center">{formatToLocalTime(weather.sunset, weather.timezone, "hh:mm a")}</span> 
            </p>
            <p className="font-light">|</p>
            <UilArrowUp/>
            <p className="font-light text-center">
                Máxima <span className="font-medium ml-1 text-center">{weather.temp_max.toFixed()}°</span> 
            </p>
            <p className="font-light">|</p>
            <UilArrowDown/>
            <p className="font-light text-center">
                Mínima <span className="font-medium ml-1 text-center">{weather.temp_min.toFixed()}°</span> 
            </p>
        </article>
    </main>
  )
}

export default TemperatureAndDetails