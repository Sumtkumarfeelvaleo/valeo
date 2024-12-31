export const GlobalResult = () => {
  const globalDatabase = [
    { value: '1,100+', description: 'Clients Reduced 20-25% of their Body Weight' },
    { value: '7,600+', description: 'GLP-I Injections & Weight Loss Supplements Delivered' },
    { value: '3,400+', description: 'Successful Teleconsultations with Specialist Physician' },
    { value: '25,000+', description: 'Blood tests conducted at home' },
  ];

  return (
    <div className="global-result-container">
      <div className="global-result-header">
        {globalDatabase.map((data, index) => (
          <div
            key={index}
            className="result-card"
          >
            <div className="result-card-content">
              <div className="result-card-icon"></div>
              <div className="result-card-text">
                <p className="result-value">{data.value}</p>
                <p className="result-description">{data.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
