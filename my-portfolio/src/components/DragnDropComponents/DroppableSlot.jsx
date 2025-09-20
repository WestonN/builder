// Droppable Slot Component
import React, { useState } from "react";
import {
  useDroppable,
} from "@dnd-kit/core";
import { Typography } from "@mui/material";
import { droppableSlotStyles } from "./DragnDropComponentStyles";

export default function Slot({ id, children }) {
    const { isOver, setNodeRef } = useDroppable({ id });
    return (
      <div
        ref={setNodeRef}
        data-testid={`droppable-slot-${id}`}
        style={{
          ...droppableSlotStyles.slot,
          background: isOver ? droppableSlotStyles.slotOver.background : droppableSlotStyles.slot.background,
        }}
      >
        {children || (
          <Typography 
            data-testid={`droppable-slot-placeholder-${id}`}
            color="textSecondary"
          >
            Drop here
          </Typography>
        )}
      </div>
    );
  }