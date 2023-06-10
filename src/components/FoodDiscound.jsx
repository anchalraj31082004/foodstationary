import Button from "./Button"

const FoodDiscound = () =>{
    return (
      <section className={`bg-[url(/assets/breadbg.png)] h-[60vh] bg-center bg-cover bg-no-repeat text-[--primary-dark]`}>
        <div className="flex flex-col gap-4 pr-[60px] pt-[60px] text-end">
        <h4 className="text-3xl font-bold">Special</h4>
        <h2 className="text-5xl font-extrabold">Sale 50% Discound</h2>
        <h4 className="text-3xl font-bold">ALL FOOD PRODUCTS</h4>
        <p className="text-lg font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure<br /> cumque aspernatur mollitia nisi minus veritatis quia,  rem culpa <br /> explicabo architecto suscipit est pariatur? Libero, ad</p>
        </div>
        <div className="text-end pr-16 pt-8">
        <Button text="Buy Now"  />
        </div>
      </section>
    )
  }

export default FoodDiscound
