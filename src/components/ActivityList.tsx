import React, { useState } from 'react';
import { useActivityContext } from '../context/ActivityContext';
import { SearchBar } from './SearchBar';
import { useDebouncedValue } from '../hooks/useDebouncedValue';
import { ActivityItem } from './ActivityItem';
import { Activity } from '../types/activity';
import { FileSearch, Zap } from 'lucide-react';

export const ActivityList: React.FC = () => {
  const { state } = useActivityContext();
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebouncedValue(searchTerm, 300);
  
  const filtered: Activity[] = state.activities.filter(a =>
    `${a.user} ${a.action}`.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const hasResults = filtered.length > 0;
  const isSearching = debouncedSearch.trim().length > 0;

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
      {/* Header Section */}
      <div className="text-center space-y-2 mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Activity Feed
          </h1>
        </div>
        <p className="text-gray-500 text-sm">
          {state.activities.length} total activities
        </p>
      </div>

      {/* Search Section */}
      <div className="mb-8">
        <SearchBar onSearch={setSearchTerm} />
      </div>

      {/* Results Section */}
      <div className="relative">
        {/* Results Header */}
        {isSearching && (
          <div className="flex items-center gap-2 mb-4 px-1">
            <FileSearch className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-500">
              {hasResults 
                ? `Found ${filtered.length} result${filtered.length !== 1 ? 's' : ''} for "${debouncedSearch}"`
                : `No results found for "${debouncedSearch}"`
              }
            </span>
          </div>
        )}

        {/* Activity List */}
        <div className="relative">
          {hasResults ? (
            <ul className="space-y-0 relative">
              {/* Connecting Line */}
              <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-blue-200 via-purple-200 to-transparent opacity-30"></div>
              
              {filtered.map((activity, index) => (
                <div 
                  key={activity.id}
                  className="relative"
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <ActivityItem activity={activity} />
                </div>
              ))}
            </ul>
          ) : (
            /* Empty State */
            <div className="text-center py-16 px-4">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-50 rounded-full flex items-center justify-center">
                <FileSearch className="h-12 w-12 text-gray-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {isSearching ? 'No activities found' : 'No activities yet'}
              </h3>
              <p className="text-gray-500 text-sm max-w-sm mx-auto">
                {isSearching 
                  ? 'Try adjusting your search terms or check back later for new activities.'
                  : 'Activity will appear here once users start interacting with the system.'
                }
              </p>
              {isSearching && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="
                    mt-4 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 
                    rounded-lg text-sm font-medium transition-colors duration-200
                  "
                >
                  Clear search
                </button>
              )}
            </div>
          )}
        </div>

        {/* Fade Effect at Bottom */}
        {hasResults && filtered.length > 5 && (
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        )}
      </div>

      {/* Footer Stats */}
      {hasResults && (
        <div className="flex justify-center pt-4 border-t border-gray-100">
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <span>Showing {filtered.length} of {state.activities.length}</span>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <span>Real-time updates</span>
          </div>
        </div>
      )}
    </div>
  );
};