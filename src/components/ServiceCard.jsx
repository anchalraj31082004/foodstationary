import Button from "./Button"

const ServiceCard = (props) =>{
    return (
      <section className={`flex justify-between text-start mt-14  gap-20`}>
        <div className='flex flex-col gap-5'>
            <div className=' text-4xl font-bold text-[--primary-dark] flex justify-normal gap-10'>
                <h3>{props.text}</h3>
                <p>{props.num}</p>
            </div>
          <p className=' font-normal mb-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, <br /> blanditiis nostrum debitis provident adipisci repudiandae expedita<br /> dolore deleniti, velit maiores quod est? Doloribus,ratione <br /> voluptatibus? delectus necessitatibus vitae veniam ab quae!</p>
          <Button text="Buy Now" />
        </div>
        <div className=" bg-contain text-center">
            <img src={`/assets/${props.img}`} alt="" />
        </div>
      </section>
    )
  }

export default ServiceCard
