import { useState } from 'react';
import {
  Box,
  Container,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useClassRepository } from '../context/ClassRepositoryContext';
import ClassCard from '../components/AllClassesScreen/ClassCard';
import EditClassDialog from '../components/AllClassesScreen/EditClassDialog';
import type { PilatesClass } from '../types/class';
import type { SelectChangeEvent } from '@mui/material';

type SortOption = 'date-desc' | 'date-asc' | 'name-asc' | 'rating-desc';

interface Props {
  // No props needed; data comes from ClassRepositoryContext
}

function sortClasses(classes: PilatesClass[], sort: SortOption): PilatesClass[] {
  return [...classes].sort((firstClass, secondClass) => {
    if (sort === 'date-desc') return secondClass.createdAt - firstClass.createdAt;
    if (sort === 'date-asc') return firstClass.createdAt - secondClass.createdAt;
    if (sort === 'name-asc') return firstClass.name.localeCompare(secondClass.name);
    if (sort === 'rating-desc') return (secondClass.rating ?? 0) - (firstClass.rating ?? 0);
    return 0;
  });
}

export default function AllClassesScreen(_props: Props) {
  const { classes } = useClassRepository();
  const [editingClass, setEditingClass] = useState<PilatesClass | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('date-desc');

  const filtered = classes.filter((pilatesClass) => {
    const query = searchQuery.toLowerCase();
    return (
      pilatesClass.name.toLowerCase().includes(query) ||
      pilatesClass.description.toLowerCase().includes(query)
    );
  });

  const sorted = sortClasses(filtered, sortOption);

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', py: 6 }}>
      <Container maxWidth="sm">
        <Typography variant="h5" fontWeight={700} mb={4}>
          Classes
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
          <TextField
            placeholder="Search classes…"
            size="small"
            fullWidth
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
          <Select
            value={sortOption}
            size="small"
            onChange={(event: SelectChangeEvent<SortOption>) =>
              setSortOption(event.target.value as SortOption)
            }
            sx={{ minWidth: 160 }}
          >
            <MenuItem value="date-desc">Newest first</MenuItem>
            <MenuItem value="date-asc">Oldest first</MenuItem>
            <MenuItem value="name-asc">Name A–Z</MenuItem>
            <MenuItem value="rating-desc">Highest rated</MenuItem>
          </Select>
        </Box>

        {sorted.length === 0 ? (
          <Typography variant="body2" color="text.secondary">
            {searchQuery ? 'No classes match your search.' : 'No classes logged yet.'}
          </Typography>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {sorted.map((pilatesClass) => (
              <ClassCard
                key={pilatesClass.id}
                pilatesClass={pilatesClass}
                onClick={setEditingClass}
              />
            ))}
          </Box>
        )}

        <EditClassDialog
          pilatesClass={editingClass}
          onClose={() => setEditingClass(null)}
        />
      </Container>
    </Box>
  );
}
