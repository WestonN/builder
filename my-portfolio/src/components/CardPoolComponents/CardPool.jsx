// Droppable Slot Component
import React, { useState } from "react";
import {
  useDroppable,
} from "@dnd-kit/core";
import { Box, TextField, Typography } from "@mui/material";
import { cardPoolComponentStyles } from "./CardPoolComponentStyles";
import DraggableCard from "../DragnDropComponents/DraggableCard";

export default function CardPool({ pool }) {
    return (
      <Box          
        data-testid="card-pool-section"
        sx={cardPoolComponentStyles.cardPoolSection}
      >
        <Typography 
            data-testid="card-pool-title"
            variant="h6" 
            sx={cardPoolComponentStyles.cardPoolTitle}
          >
            Card Pool
          </Typography>
          <Box 
            data-testid="card-pool-container"
            sx={cardPoolComponentStyles.cardPoolContainer}
          >
            <TextField id="outlined-basic" label="Search" variant="outlined" />
            {pool.map((card) => (
              <DraggableCard
                key={card.id}
                id={card.id}
                content={card.content}
                isOnCanvas={false}
              />
            ))}
          </Box>
      </Box>
    );
  }