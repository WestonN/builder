// Droppable Slot Component
import React, { useState } from "react";
import {
  useDroppable,
} from "@dnd-kit/core";
import { Typography } from "@mui/material";// Draggable Card Component

export default function Slot({ id, children }) {
    const { isOver, setNodeRef } = useDroppable({ id });
    return (
      <div
        ref={setNodeRef}
        style={{
          border: "2px dashed gray",
          borderRadius: "8px",
          minHeight: "120px",
          minWidth: "120px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: isOver ? "#e3f2fd" : "#fafafa",
          transition: "background 0.2s ease",
        }}
      >
        {children || <Typography color="textSecondary">Drop here</Typography>}
      </div>
    );
  }