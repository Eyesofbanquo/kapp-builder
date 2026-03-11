import { useState } from 'react';
import { Box, Container, IconButton, TextField } from '@mui/material';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { useEventRepository } from '../context/EventRepositoryContext';
import ToolSection from '../components/MainScreen/ToolSection';
import EventCard from '../components/AllEventsScreen/EventCard';
import EditEventDialog from '../components/AllEventsScreen/EditEventDialog';
import type { Event } from '../types/event';

interface Props {
  // No props needed; data comes from EventRepositoryContext
}

type SortOrder = 'asc' | 'desc';

export default function AllEventsScreen(_props: Props) {
  const { events, lastCreatedEventId, clearLastCreatedEventId } = useEventRepository();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedEvents = [...filteredEvents].sort((eventA, eventB) => {
    if (!eventA.date && !eventB.date) return 0;
    if (!eventA.date) return 1;
    if (!eventB.date) return -1;
    const comparison = eventA.date.valueOf() - eventB.date.valueOf();
    return sortOrder === 'asc' ? comparison : -comparison;
  });

  const groupedEvents = sortedEvents.reduce<Record<string, Event[]>>((accumulator, event) => {
    const monthKey = event.date ? event.date.format('MMMM - YYYY') : 'No Date';
    if (!accumulator[monthKey]) accumulator[monthKey] = [];
    accumulator[monthKey].push(event);
    return accumulator;
  }, {});

  const toggleSortOrder = () => {
    setSortOrder((previous) => (previous === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', pt: 2, pb: 6 }}>
      <Container maxWidth="sm">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <TextField
            placeholder="Search events..."
            fullWidth
            size="small"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          <IconButton onClick={toggleSortOrder} aria-label="Toggle sort order">
            <SwapVertIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 3 }}>
          {Object.entries(groupedEvents).map(([monthKey, monthEvents]) => (
            <ToolSection key={monthKey} title={monthKey}>
              {monthEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onClick={setEditingEvent}
                  isNew={event.id === lastCreatedEventId}
                  onAnimationComplete={event.id === lastCreatedEventId ? clearLastCreatedEventId : undefined}
                />
              ))}
            </ToolSection>
          ))}
        </Box>

        <EditEventDialog event={editingEvent} onClose={() => setEditingEvent(null)} />
      </Container>
    </Box>
  );
}
