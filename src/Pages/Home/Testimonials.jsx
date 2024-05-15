import data from "../../data/index.json";

export default function Testimonial() {
  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Education</p>
          <h2 className="sections--heading">Education Details</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.education?.map((item, index) => (
          <div key={index} className="testimonial--section--card">
            <div style={{fontWeight:"700"}} className="testimonial--section--card--review">
              {item.department}
            </div>
            <p className="text-md" style={{fontWeight:"700", color:"black"}}>{item.place}</p>
            <div className="testimonial--section--card--author--detail">
              <div>
                <p className="text-md testimonial--author--name">
                  {item.grade}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
