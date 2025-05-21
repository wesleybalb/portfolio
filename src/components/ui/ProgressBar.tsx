import React from "react";

interface ProgressBarProps {
  value: number;
  color?: string;
  label?: string;
  showPercentage?: boolean;
  height?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  color = "bg-blue-600",
  label,
  showPercentage = true,
  height = 8,
}) => {
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </span>
          {showPercentage && (
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {value}%
            </span>
          )}
        </div>
      )}
      <div
        className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden`}
        style={{ height: `${height}px` }}
      >
        <div
          className={`${color} transition-all duration-500 ease-out`}
          style={{
            width: `${value}%`,
            height: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;