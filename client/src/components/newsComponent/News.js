import TextInfo from "../homeComponents/TextInfo";
import water from "./../../images/deep-blue.jpg";
import turtle from "./../../images/sleepy-turtle.jpg";

const News = () => {
  return (
    <>
      <div className="pt-32 pb-5 bg-blue-700 text-center flex justify-between" />
      <section>
        <div className="flex flex-wrap py-8 justify-center">
          <TextInfo
            title="Ocean Buddies and Rescuing Sea Turtles"
            text="Rescuing sea turtles is an important and ongoing effort to protect these vulnerable creatures from harm. Sea turtles face numerous threats, including entanglement in fishing gear, ingestion of plastics, poaching, and habitat destruction. When sea turtles are injured, sick, or otherwise in need of assistance, specialized organizations and trained professionals are often called upon to provide rescue and rehabilitation services."
            image={turtle}
            buttonText="Read More"
          />
          <img style={{ height: "380px", width: "400px" }} className="animation" src={turtle} />
        </div>
        <div className="flex flex-wrap py-8 justify-center">
          <img style={{ height: "380px", width: "400px" }} className="max-ex:order-3 animation2" src={water} />
          <TextInfo title="Ocean Buddies Coral Reef Conservation Efforts" text="Coral reefs are among the most biodiverse and productive ecosystems on Earth, supporting countless species of marine life and providing important ecological, economic, and cultural benefits to communities around the world. Unfortunately, coral reefs are under threat from a range of human activities, including overfishing, pollution, and climate change." image={water} buttonText="Read More" />
        </div>
        <div className="flex flex-wrap py-8 justify-center">
          <TextInfo title="How We Helped with Ocean Acidification!" text="Ocean acidification is a growing threat to the health of our oceans, and many ocean charities are working to address this issue. Ocean acidification occurs when carbon dioxide from the atmosphere dissolves in seawater, causing the water to become more acidic. " image={water} buttonText="Read More" />
          <img style={{ height: "380px", width: "400px" }} className="animation" src={water} />
        </div>
        <div className="flex flex-wrap py-8 mb-32 justify-center">
          <img style={{ height: "380px", width: "400px" }} className="max-ex:order-3 animation2" src={water} />
          <TextInfo title="Plastic Waste and Our Removal of It" text="Plastic waste is one of the biggest environmental challenges facing our oceans, and many ocean charities are working tirelessly to tackle this issue. The negative impacts of plastic pollution on marine ecosystems are well-documented, including entanglement, ingestion, and the release of toxic chemicals." image={water} buttonText="Read More" />
        </div>
      </section>
    </>
  );
};

export default News;
