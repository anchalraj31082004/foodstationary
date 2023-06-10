import Button from "./Button"

const PricingCard = (props) => {
  return (
    <section className="flex flex-col mt-28">
      <div className="flex flex-col gap-2 bg-[--secondary-light] py-10 px-16 text-white rounded-tl-2xl  ">
        <h4 className="text-4xl font-medium">{props.text}</h4>
        <h2 className="text-4xl font-bold">{props.num}</h2>
      </div>
      <div className="flex flex-col gap-5 bg-[--tertiary-gray] py-10 px-16 text-[--primary-dark] rounded-br-2xl">
       <div>
        <ul className="flex flex-col font-medium gap-2">
            <li>6 Pis Chicken</li>
            <li>3 Pis Breeff Chicken</li>
            <li>3 Pis Burger</li>
        </ul>
       </div>
        <div className="">
        <Button text="Buy Now"  />
        </div>
      </div>
    </section>
  )
}

export default PricingCard
