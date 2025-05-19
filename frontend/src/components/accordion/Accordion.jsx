import React from "react";

const Accordion = () => {
  return (
    <>
      <div className="collapse collapse-plus text-gray-900 bg-white">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title font-semibold">Dummy Content</div>
        <div className="collapse-content text-sm">
          Click the "Sign Up" button in the top right corner and follow the
          registration process.
        </div>
      </div>
      <div className="collapse collapse-plus text-gray-900  bg-white">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">Dummy Content</div>
        <div className="collapse-content text-sm">
          Click on "Forgot Password" on the login page and follow the
          instructions sent to your email.
        </div>
      </div>
      <div className="collapse collapse-plus text-gray-900  bg-white">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">Dummy Content</div>
        <div className="collapse-content text-sm">
          Go to "My Account" settings and select "Edit Profile" to make changes.
        </div>
      </div>
    </>
  );
};

export default Accordion;
