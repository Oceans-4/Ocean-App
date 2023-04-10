import stingray from "./../../images/stingray.jpg";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";

const DUMMY_DATA = [
  {
    _id: 1,
    title: "Save the Ocean Otter Hoodie",
    description: "A nice black hoodie made with love.",
    imageURL:
      "https://user-images.githubusercontent.com/115383177/231014115-1ba6b5b6-cc15-49fa-b22c-20be4de92eab.png",
    price: "$50",
  },
  {
    _id: 2,
    title: "Save the Ocean Turtle Hoodie",
    description: "A nice black hoodie made with love.",
    imageURL:
      "https://user-images.githubusercontent.com/115383177/231014116-13211f57-8219-477e-b960-b427e08270d7.png",
    price: "$50",
  },
  {
    _id: 3,
    title: "Save the Ocean Wave Hoodie",
    description: "A nice black hoodie made with love.",
    imageURL:
      "https://user-images.githubusercontent.com/115383177/231014117-c2c92bf8-78cd-43b1-b51a-d5427fa63a5d.png",
    price: "$50",
  },
  {
    _id: 4,
    title: "Save the Ocean Otter Sweatshirt",
    description: "A nice cotton sweatshirt made with love.",
    imageURL:
      "https://user-images.githubusercontent.com/115383177/231014121-9a03cbd7-a078-4ade-8fda-4b18ee7bc0cb.png",
    price: "$55",
  },
  {
    _id: 5,
    title: "Save the Ocean Wave Sweatshirt",
    description: "A nice cotton sweatshirt made with love.",
    imageURL:
      "https://user-images.githubusercontent.com/115383177/231014124-1d0cd8d8-82c5-4a25-ac6b-3a3b9b693ffd.png",
    price: "$55",
  },
  {
    _id: 6,
    title: "Save the Ocean Tutle Sweatpants",
    description: "A nice pair of cotton sweatpants made with love.",
    imageURL:
      "https://user-images.githubusercontent.com/115383177/231014125-6f6511a5-43fd-4286-96a7-b0529571a400.png",
    price: "$35",
  },
  {
    _id: 7,
    title: "Save the Ocean Otter Sweatpants",
    description: "A nice pair of cotton sweatpants made with love.",
    imageURL:
      "https://user-images.githubusercontent.com/115383177/231014128-62e65558-9cde-4594-9860-743f444a6309.png",
    price: "$35",
  },
  {
    _id: 8,
    title: "Save the Ocean Wave Sweatpants",
    description: "A nice pair of cotton sweatopants made with love.",
    imageURL:
      "https://user-images.githubusercontent.com/115383177/231014130-f38484af-7200-4c5b-8ce7-ba0ce154d3ad.png",
    price: "$35",
  },
  {
    _id: 9,
    title: "Save the Ocean Hats",
    description: "Hats to scream your love for the ocean.",
    imageURL:
      "https://user-images.githubusercontent.com/115383177/231014132-db5f3dd1-90ec-4b24-ade5-11509bb9931b.png",
    price: "$20",
  },
];

const Shop = () => {
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const products = data?.products || [];

  return (
    <>
      <div className="pt-32 pb-5 bg-blue-700 text-center">
        <h1 className="italic text-white text-xl ">
          All proceeds will be donated to the supporting charities.
        </h1>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <section className="mb-40 flex flex-wrap justify-around mx-10 m-5">
          {products.map((item) => (
            <div
              key={item._id}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mb-5"
            >
              <a href="#">
                <img
                  className="p-8 rounded-t-lg"
                  src={item.imageURL}
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl tracking-tight text-gray-900 font-light">
                    {item.description}
                  </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5"></div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900">
                    ${item.price}
                  </span>
                  <a
                    href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default Shop;
