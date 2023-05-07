function TopButtons({setQuery}) {
    const ciudades = [
        {
            id:1,
            title: "Barranquilla"
    },
    {
        id:2,
        title: "Miami"
    },
    {
        id:3,
        title: "Sarkhej"
    },
    {
        id:4,
        title: "Chota"
    },
    {
        id:5,
        title: "Doha"
    },
    {
        id:6,
        title: "Estocolmo"
    }
]
  return (
    <main className='flex items-center justify-between my-6'>
        {ciudades.map(ciudad => (
            <button 
                className='text-white text-xl font-medium transition ease-out hover:scale-125' 
                key={ciudad.id}
                onClick= {() => setQuery({q: ciudad.title })}  
            >
                {ciudad.title}
            </button>
        ))}
    </main>
  )
}

export default TopButtons