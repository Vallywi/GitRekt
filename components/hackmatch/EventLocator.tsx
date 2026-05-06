'use client';

import { Event } from '../../lib/types/hackmatch';

interface EventLocatorProps {
  events: Event[];
}

export default function EventLocator({ events }: EventLocatorProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Upcoming Hackathons</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div className="h-40 overflow-hidden">
              <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <div className="text-sm text-blue-600 font-semibold mb-1">{event.date} • {event.location}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{event.name}</h3>
              <p className="text-gray-600 text-sm line-clamp-2">{event.description}</p>
              <button className="mt-4 w-full py-2 bg-gray-50 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                View Event
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
