import { Box, Divider } from '@mui/material';
import React from 'react';
import type { ReactNode } from 'react';

interface Props {
  /** Section heading displayed as a fieldset legend */
  title: string;
  /** ToolCard children to render inside the section */
  children: ReactNode;
}

export default function ToolSection({ title, children }: Props) {
  const items = React.Children.toArray(children);

  return (
    <Box
      component="fieldset"
      sx={{
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        p: 1,
        m: 0,
      }}
    >
      <Box
        component="legend"
        sx={{
          fontSize: '0.75rem',
          letterSpacing: '0.08333em',
          textTransform: 'uppercase',
          color: 'text.secondary',
          px: 1,
          ml: 1,
        }}
      >
        {title}
      </Box>
      {items.map((child, index) => (
        <React.Fragment key={index}>
          {index > 0 && <Divider />}
          {child}
        </React.Fragment>
      ))}
    </Box>
  );
}
