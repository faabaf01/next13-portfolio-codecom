import React from "react";

const item = ({ data, index }) => {
  const { title, description, content } = data;
  return (
    <div className="bg-gray-100 rounded-lg p-4 mb-4">
      {/* container-item */}
      <div className="flex flex-col">
        {/* container-content-item */}
        <div className="mb-2">
          <span className="font-bold text-lg">{title}</span>
          {/* container-content-header */}
          <span className="text-gray-600">{description}</span>
        </div>
        <ul className="list-disc pl-4">
          {content.map((item) => (
            <li key={item.title} className="mb-2">
              <span className="font-semibold">{item.title}</span>
              <ul className="list-disc pl-4">
                {item.subtitles.map((subtitle) => (
                  <li key={subtitle} className="text-gray-600">
                    {subtitle}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default item;
