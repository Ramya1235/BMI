import TopNav from "../components/TopNav";



const Subnav = () => {
  return (
    <div>
      <div>
        <TopNav />
      </div>
      <div >
        <h1 className="j">Body Mass Index (BMI)</h1>
        <div>
          <p>Body Mass Index (BMI) is a persons weight in kilograms divided by the square of height in meters.</p>
          <p>A high BMI can indicate high body fatness. BMI screens for weight categories that may lead to health problems, </p>
          <p>but it does not diagnose the body fatness or health of an individual.</p>
        </div>
        <h3>Adult Body Mass Index Calculator Widget</h3>
        <p>Add this widget to your website to let anyone calculate their BMI. BMI is a reliable indicator of body fatness for most people.<p />
          <p>It is used to screen for weight categories that may lead to health problems. This calculator provides BMI and the corresponding weight
            category.</p>
          <p>Use this calculator for adults, 20 years old and older.</p>
          <h3>CDC Child and Teen BMI Calculator Widget</h3>
          <p>Add this widget to your website. This calculator provides BMI and the corresponding BMI-for-age percentile on a CDC BMI-for-age
            <p>growth chart. Use this calculator for children and teens, aged 2 through 19 years old.</p>
            The Childrens BMI Tool for Schools</p>
          <p>School staff, child care leaders, and other professionals can use this spreadsheet to compute BMI for as many as 2,000 children. Also see safeguards </p>
          for BMI measurement in schools.</p>
      </div>
    </div>
  );
}

export default Subnav;