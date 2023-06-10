import Button from "./Button"

const Offer = () => {
  return (
    <section className={`bg-[url(/assets/frenchfriesbg.png)] h-[60vh] bg-center bg-cover bg-no-repeat text-[--primary-dark] bg-fixed`}>
      <div className="flex flex-col gap-4 max-w-lg pt-20 pl-12">
      <h4 className="text-3xl font-bold">Special</h4>
      <h2 className="text-5xl font-extrabold">Sale 50% Discound</h2>
      <h4 className="text-3xl font-bold">ALL FOOD PRODUCTS</h4>
      <p className="text-lg font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure cumque aspernatur mollitia nisi minus veritatis quia, rem culpa explicabo architecto suscipit est pariatur? Libero, ad</p>
      </div>
      <div className="ml-12 mt-8">
      <Button text="Buy Now"  />
      </div>
    </section>
  )
}

export default Offer
