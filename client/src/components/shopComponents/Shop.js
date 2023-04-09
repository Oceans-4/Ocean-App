import stingray from "./../../images/stingray.jpg";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";

const DUMMY_DATA = [
  {
    _id: 1,
    title: "Save the Ocean T-Shirt",
    description: "A nice silk t-shirt made with love.",
    imageURL: "https://picsum.photos/200/300",
    price: "$50",
  },
  {
    _id: 2,
    title: "Save the Ocean Pants",
    description: "A nice leather pants made with love.",
    imageURL: stingray,
    price: "$60",
  },
  {
    _id: 3,
    title: "Save the Ocean Watch",
    description: "A nice watch made with love.",
    imageURL: stingray,
    price: "$25",
  },
  {
    _id: 4,
    title: "Save the Ocean Watch",
    description: "A nice watch made with love.",
    imageURL: stingray,
    price: "$45",
  },
  {
    _id: 5,
    title: "Save the Ocean Watch",
    description: "A nice watch made with love.",
    imageURL: stingray,
    price: "$30",
  },
  {
    _id: 6,
    title: "Save the Ocean Watch",
    description: "A nice watch made with love.",
    imageURL: stingray,
    price: "$25",
  },
];

const Shop = () => {
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const products = data?.products || [];

  return (
    <>
      <div className="pt-32 pb-5 bg-blue-700 text-center">
        <h1 className="italic text-white text-xl ">All proceeds will be donated to the supporting charities.</h1>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <section className="mb-40 flex flex-wrap justify-around mx-10 m-5">
          {products.map((item) => (
            <div key={item._id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mb-5">
              <a href="#">
                <img className="p-8 rounded-t-lg" src={item.imageURL} alt="product image" />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl tracking-tight text-gray-900 font-light">{item.description}</h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5"></div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900">${item.price}</span>
                  <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
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
