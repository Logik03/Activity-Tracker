import React from 'react';
import { Activity } from '../types/activity';

export const ActivityItem: React.FC<{ activity: Activity }> = ({ activity }) => (
    <li className="
      group relative bg-white/80 backdrop-blur-sm border border-gray-100 
      rounded-xl p-4 mb-3 shadow-sm hover:shadow-lg transition-all duration-300 
      hover:bg-white hover:border-gray-200 hover:-translate-y-0.5
      before:absolute before:left-0 before:top-0 before:h-full before:w-1 
      before:bg-gradient-to-b before:from-blue-400 before:to-purple-500 
      before:rounded-l-xl before:opacity-0 before:transition-opacity before:duration-300
      hover:before:opacity-100
    ">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
            <span className="
              font-semibold text-red-600 text-sm tracking-wide
              group-hover:text-red-700 transition-colors duration-200
            ">
              {activity.user}
            </span>
          </div>
          <p className="
            text-gray-700 text-sm leading-relaxed font-medium
            group-hover:text-gray-800 transition-colors duration-200
          ">
            {activity.action}
          </p>
        </div>
        
        <div className="flex flex-col items-end ml-4">
          <time className="
            text-xs text-gray-500 font-mono bg-gray-50 px-2 py-1 rounded-md
            group-hover:bg-gray-100 group-hover:text-gray-600 transition-all duration-200
          ">
            {new Date(activity.timestamp).toLocaleTimeString()}
          </time>
        </div>
      </div>
    </li>
  );