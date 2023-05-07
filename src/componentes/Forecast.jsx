import { iconUrlFromCode } from "../services/weatherService"

function Forecast({text, items}) {
  console.log(items)
  return (
    <main>
      <article className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">
          {text}
        </p>
      </article>
      <hr className="my-2"/>

      <section className="flex flex-row items-center justify-between text-white">
        {items.map(item => (
          <div className="flex flex-col items-center justify-center" key={item.title}>
          <p className="font-light text-sm"> {item.title} </p>
          <img 
            src={iconUrlFromCode(item.icon)}
            className="w-12 my-1"
            />
          <p className="font-medium"> {item.temp.toFixed()}° </p>
        </div>
        ))}
      </section>
    </main>
  )
}

export default Forecast
