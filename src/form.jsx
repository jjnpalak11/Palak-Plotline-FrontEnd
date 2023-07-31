import React, { useState } from "react";
import "./form.css"; // Import the CSS file for styling

const MyForm = () => {
  const [formData, setFormData] = useState({
    tooltipWidth: "",
    arrowHeight: "",
    arrowWidth: "",
    cornerRadius: "",
    textColour: "",
    backgroundColor: "",
    textSize: "",
    padding: "",
    tooltipText: "",
    targetElement: "Button 3",
  });

  const [showTooltip, setShowTooltip] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNumberChange = (name, value) => {
    // Ensure the numeric input fields only accept numbers
    if (/^\d*$/.test(value)) {
      setFormData({ ...formData, [name]: value === "" ? "" : parseInt(value) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to the server
    console.log(formData);
  };

  const handleTooltip = (e) => {
    setShowTooltip(true);
  };

  const handleTooltipHide = () => {
    setShowTooltip(false);
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="square-box">
          <div className="screen">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="targetElement">Target Element</label>
                <input
                  type="text"
                  id="targetElement"
                  name="targetElement"
                  value={formData.targetElement}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <label htmlFor="tooltipText">Tooltip text</label>
                <input
                  type="text"
                  id="tooltipText"
                  name="tooltipText"
                  value={formData.tooltipText}
                  onChange={handleChange}
                />
              </div>

              <div className="row">
                <div className="form-row">
                  <label htmlFor="textSize">Text Size</label>
                  <input
                    type="text"
                    id="textSize"
                    name="textSize"
                    value={formData.textSize}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="padding">Padding</label>
                  <input
                    type="text"
                    id="padding"
                    name="padding"
                    value={formData.padding}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <label htmlFor="textColour">Text Colour</label>
                <input
                  type="text"
                  id="textColour"
                  name="textColour"
                  value={formData.textColour}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <label htmlFor="backgroundColor">Background colour</label>
                <input
                  type="text"
                  id="backgroundColor"
                  name="backgroundColor"
                  value={formData.backgroundColor}
                  onChange={handleChange}
                />
              </div>

              <div className="row">
                <div className="form-row">
                  <label htmlFor="cornerRadius">Corner radius</label>
                  <input
                    type="text"
                    id="cornerRadius"
                    name="cornerRadius"
                    value={formData.cornerRadius}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="tooltipWidth">Tooltip width</label>
                  <input
                    type="text"
                    id="tooltipWidth"
                    name="tooltipWidth"
                    value={formData.tooltipWidth}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="form-row">
                  <label htmlFor="arrowWidth">Arrow width</label>
                  <input
                    type="text"
                    id="arrowWidth"
                    name="arrowWidth"
                    value={formData.arrowWidth}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="arrowHeight">Arrow height</label>
                  <input
                    type="text"
                    id="arrowHeight"
                    name="arrowHeight"
                    value={formData.arrowHeight}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="phone-container">
        <div className="phone">
          <div className="phone-screen">
            <button
              className={`phone-button button-top-left ${
                formData.targetElement === "Button 1" && "active"
              }`}
              data-tooltip={
                formData.targetElement === "Button 1"
                  ? formData.tooltipText
                  : undefined
              }
            >
              Button 1
            </button>
            <button
              className={`phone-button button-top-right ${
                formData.targetElement === "Button 2" && "active"
              }`}
              data-tooltip={
                formData.targetElement === "Button 2"
                  ? formData.tooltipText
                  : undefined
              }
            >
              Button 2
            </button>
            <button
              className={`phone-button button-middle ${
                formData.targetElement === "Button 3" && "active"
              }`}
              data-tooltip={
                formData.targetElement === "Button 3"
                  ? formData.tooltipText
                  : undefined
              }
            >
              Button 3
            </button>
            <button
              className={`phone-button button-bottom-left ${
                formData.targetElement === "Button 4" && "active"
              }`}
              data-tooltip={
                formData.targetElement === "Button 4"
                  ? formData.tooltipText
                  : undefined
              }
            >
              Button 4
            </button>
            <button
              className={`phone-button button-bottom-right ${
                formData.targetElement === "Button 5" && "active"
              }`}
              data-tooltip={
                formData.targetElement === "Button 5"
                  ? formData.tooltipText
                  : undefined
              }
            >
              Button 5
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyForm;
