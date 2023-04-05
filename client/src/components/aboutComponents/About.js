import beachside from "./../../images/beachside.jpg";

const About = () => {
  const datas = [
    {
      title: "Title",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sociis natoque penatibus et magnis. Egestas maecenas pharetra convallis posuere morbi leo. Egestas sed tempus urna et pharetra pharetra massa massa. Ultrices vitae auctor eu augue. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Nulla at volutpat diam ut. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet.",
    },
    {
      title: "Title",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sociis natoque penatibus et magnis. Egestas maecenas pharetra convallis posuere morbi leo. Egestas sed tempus urna et pharetra pharetra massa massa. Ultrices vitae auctor eu augue. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Nulla at volutpat diam ut. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet.",
    },
    {
      title: "Title",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sociis natoque penatibus et magnis. Egestas maecenas pharetra convallis posuere morbi leo. Egestas sed tempus urna et pharetra pharetra massa massa. Ultrices vitae auctor eu augue. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Nulla at volutpat diam ut. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet.",
    },
    {
      title: "Title",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sociis natoque penatibus et magnis. Egestas maecenas pharetra convallis posuere morbi leo. Egestas sed tempus urna et pharetra pharetra massa massa. Ultrices vitae auctor eu augue. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Nulla at volutpat diam ut. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet.",
    },
    {
      title: "Title",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sociis natoque penatibus et magnis. Egestas maecenas pharetra convallis posuere morbi leo. Egestas sed tempus urna et pharetra pharetra massa massa. Ultrices vitae auctor eu augue. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Nulla at volutpat diam ut. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet.",
    },
    {
      title: "Title",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sociis natoque penatibus et magnis. Egestas maecenas pharetra convallis posuere morbi leo. Egestas sed tempus urna et pharetra pharetra massa massa. Ultrices vitae auctor eu augue. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Nulla at volutpat diam ut. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet.",
    },
  ];
  return (
    <>
      <img src={beachside} />
      <section className="flex flex-wrap justify-center">
        {datas.map((data) => (
          <div className="w-1/4 max-md:w-full m-5">
            <h1 className="text-center font-bold">{data.title}</h1>
            <p>{data.text}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default About;
