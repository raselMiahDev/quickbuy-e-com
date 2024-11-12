import React, { useState } from "react";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  const product = {
    description:
      "This is a detailed description of the product, outlining its features, specifications, and benefits for the customer.",
    rating: 4.5,
    feedback: [
      {
        id: 1,
        name: "Jane Doe",
        date: "2024-10-20",
        comment: "Great product! High quality and fast delivery.",
      },
      {
        id: 2,
        name: "John Smith",
        date: "2024-10-15",
        comment: "Very satisfied with my purchase. Recommended!",
      },
    ],
  };

  return (
    <div className="my-10 p-6 md:p-8 max-w-5xl mx-auto bg-white rounded-lg shadow-lg">
      {/* Tabs Header */}
      <div className="flex border-b border-gray-200">
        {["description", "rating", "feedback"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 text-center py-2 font-semibold ${
              activeTab === tab
                ? "text-purple-600 border-b-2 border-purple-600"
                : "text-gray-500 hover:text-purple-600"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {/* Description Tab */}
        {activeTab === "description" && (
          <div className="text-gray-700">
            <h3 className="text-xl font-semibold text-purple-700 mb-4">Product Description</h3>
            <p>{product.description}</p>
          </div>
        )}

        {/* Rating Tab */}
        {activeTab === "rating" && (
          <div className="text-gray-700">
            <h3 className="text-xl font-semibold text-purple-700 mb-4">Product Rating</h3>
            <p className="text-4xl font-bold text-purple-600">{product.rating} / 5</p>
            <div className="mt-3">
              <p>Based on customer reviews:</p>
              <div className="flex space-x-1 mt-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`${
                      i < Math.floor(product.rating)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Feedback Tab */}
        {activeTab === "feedback" && (
          <div className="text-gray-700">
            <h3 className="text-xl font-semibold text-purple-700 mb-4">Customer Feedback</h3>
            {product.feedback.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-4 mb-4">
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
                <p className="mt-2">{review.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
