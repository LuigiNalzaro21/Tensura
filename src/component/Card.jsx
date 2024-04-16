import React from "react";

function Card({ datav, datav2 }) {
  return (
    <div className='mx-[50px]'>
      <h1 className="text-center text-5xl font-bold mb-8 mt-10">12 Guardian Lords (Tempest Federation)</h1>
      <div className="grid grid-cols-2 place-items-center mt-[100px] gap-y-[50px] gap-x-[50px] md:grid-cols-3 lg:grid-cols-4">
        {datav.map((item, index) => (
          <div className='relative flex flex-col items-center' key={item.id}>
            <img className="object-cover rounded-full h-[150px] w-[150px]" src={item.image} alt={item.text} />
            <h1 className='uppercase text-[1rem] font-bold mt-2'>{item.text}</h1>
          </div>
        ))}
      </div>
      <h1 className="text-center text-5xl font-bold mb-[-50px] mt-40">8 Star Demon Lords (Octagram)</h1>
      <div className="grid lg:grid-cols-2 place-items-center mt-[200px] gap-y-[50px] gap-x-[50px] md:grid-cols-1" style={{ marginBottom: '50px' }}>
        {datav2.map((item, index) => (
          <div className='relative flex flex-col items-center' key={item.id}>
            <img className="object-cover h-[400px] w-[600px]" src={item.image} alt={item.text} />
            <h1 className='uppercase text-[1rem] font-bold mt-2'>{item.text}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
