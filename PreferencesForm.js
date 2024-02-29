import React from 'react';
import './PreferencesForm.css'; // Ensure you have CSS for styling

function PreferencesForm() {
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement what happens when the form is submitted
    // E.g., filter recipes, navigate to a results page, etc.
    console.log("Form submitted");
  };

  return (
    <section id="meal-prep-preferences">
      <h2>Tailor Your Meal Preferences</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Dietary Preferences</legend>
          <label><input type="checkbox" name="diet" value="vegetarian" /> Vegetarian</label>
          <label><input type="checkbox" name="diet" value="vegan" /> Vegan</label>
          <label><input type="checkbox" name="diet" value="gluten-free" /> Gluten-Free</label>
          <label><input type="checkbox" name="diet" value="keto" /> Keto</label>
          <label><input type="checkbox" name="diet" value="paleo" /> Paleo</label>
        </fieldset>
        <fieldset>
          <legend>Allergies</legend>
          <label><input type="checkbox" name="allergy" value="nuts" /> Nuts</label>
          <label><input type="checkbox" name="allergy" value="dairy" /> Dairy</label>
          <label><input type="checkbox" name="allergy" value="shellfish" /> Shellfish</label>
          <label><input type="checkbox" name="allergy" value="soy" /> Soy</label>
        </fieldset>
        <button type="submit">Find Recipes</button>
      </form>
    </section>
  );
}

export default PreferencesForm;