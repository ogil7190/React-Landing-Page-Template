export const Pricing = () => {
  return (
    <div id="pricing" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Pricing</h2>
          <p>We charge for whatever the plan that you opt for, like recharge plan for your mobile which can vary, so our pricing is dependent on your network/sim providers.</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            {" "}
            <p>Airtel</p>
            <a className="service-desc" href="https://www.airtel.in/recharge-online">
              <h3>{"Airtel Plans"}</h3><p>{"Checkout Plans"}</p>
            </a>
          </div>
          <div className="col-md-4">
            {" "}
            <p>Jio</p>
            <a className="service-desc" href="https://www.jio.com/en-in/4g-plans">
              <h3>{"Jio Plans"}</h3><p>{"Checkout Plans"}</p>
            </a>
          </div>
          <div className="col-md-4">
            {" "}
            <p>Vodafone-Idea</p>
            <a className="service-desc" href="https://www.myvi.in/prepaid/best-prepaid-plans">
              <h3>{"V! Plans"}</h3><p>{"Checkout Plans"}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
