import firstImage from "../images/featureImages/first.jpg";

function Features() {
  return (
    <section className="mt-8">
      <div className="container mx-auto py-12">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold">Elevating Gaming to Unprecedented Heights.</h3>
          <p className="text-gray-600 mt-2">
            We are establishing a groundbreaking standard in the gaming industry.
          </p>
        </div>

        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="row-span-3 bg-blue-500 p-4">
            <img src={firstImage} alt="first Img" className="object-contain h-full w-full rounded-md" />
          </div>

          <div className="row-span-2 bg-green-500 p-4">
            02
          </div>

          <div className="row-span-2 col-span-2 bg-red-500 p-4">
            03
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
