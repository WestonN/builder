import React, { useState } from "react";
import {
  DndContext,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import { canvasStyles } from "./DragnDropComponentStyles";

export default function Canvas({ children }) {
    const { setNodeRef } = useDroppable({ id: "canvas" });
    return (
      <Box
        ref={setNodeRef}
        id="canvas-box"
        data-testid="canvas-droppable-area"
        sx={canvasStyles.droppableArea}
      >
        {children}
      </Box>
    );
  }
