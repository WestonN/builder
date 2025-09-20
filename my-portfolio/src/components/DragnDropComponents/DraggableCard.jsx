import React, { useState } from "react";
import {
  useDraggable,
} from "@dnd-kit/core";
import { Card, CardContent, Typography } from "@mui/material";
import { draggableCardStyles } from "./DragnDropComponentStyles";

export default function DraggableCard({ id, content, x, y, isOnCanvas }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id });

  // Drag transform (translate follows cursor)
  const dragTransform = transform
    ? `translate(${transform.x}px, ${transform.y}px)`
    : "";

  // Tilt / wiggle styles when dragging
  const dragStyle = isDragging && !isOnCanvas
    ? {
        transform: `${dragTransform} rotate(5deg) scale(1.05)`,
        animation: "wiggle 0.3s infinite ease-in-out",
        zIndex: 9999,
      }
    : { transform: dragTransform };

  const baseStyle = isOnCanvas ? draggableCardStyles.card : draggableCardStyles.cardPool;
  const style = {
    ...baseStyle,
    left: isOnCanvas ? x : undefined,
    top: isOnCanvas ? y : undefined,
    ...dragStyle,
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <Card data-testid={`draggable-card-${id}`}>
        <CardContent data-testid={`draggable-card-content-${id}`}>
          <Typography 
            data-testid={`draggable-card-text-${id}`}
            align="center"
          >
            {content}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}