const Recommendations = (props: any) => {
  const recommendationList = props.recommendation.map(
    (recommendation: any, index: string) => (
      <div key={index} className="recommendation">
        <img className="image" src={recommendation.picture} />
        <div className="recommendation-text-section">
          <div className="name" id="social--link">
            <img
              className="recommendation-social-media-icon"
              height="30"
              width="30"
              src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
              alt="LinkedIn"
            />
            &nbsp;
            <a
              href={recommendation.url}
              target="_blank"
              className="recommendation-giver-name"
            >
              {recommendation.name}
            </a>
          </div>
        </div>
        <div className="recommendation-giver-job-title">
          {recommendation.title}
        </div>
        <div>{recommendation.date}</div>
        <div>{recommendation.title}</div>
        <div>
          <p>{recommendation.text}</p>
        </div>
      </div>
    ),
  );

  return (
    <section className="section--page">
      <h2>Recommendations</h2>
      <p>
        While Britta and Adele offered genuine recommendations, I couldn't
        resist playfully including one from my other half, who should know me
        best, right? 😄
      </p>
      {recommendationList}
    </section>
  );
};

export default Recommendations;
