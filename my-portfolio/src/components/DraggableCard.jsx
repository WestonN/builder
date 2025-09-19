import React, { useState } from "react";
import {
  useDraggable,
} from "@dnd-kit/core";
import { Card, CardContent, Typography } from "@mui/material";

export default function DraggableCard({ id, content, x, y, isOnCanvas }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id });

  // Drag transform (translate follows cursor)
  const dragTransform = transform
    ? `translate(${transform.x}px, ${transform.y}px)`
    : "";

  // Tilt / wiggle styles when dragging
  const dragStyle = isDragging
    ? {
        transform: `${dragTransform} rotate(5deg) scale(1.05)`,
        animation: "wiggle 0.3s infinite ease-in-out",
        zIndex: 9999,
      }
    : { transform: dragTransform };

  const style = {
    position: isOnCanvas ? "absolute" : "relative",
    left: isOnCanvas ? x : undefined,
    top: isOnCanvas ? y : undefined,
    cursor: "grab",
    width: 100,
    ...dragStyle,
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <Card>
        <CardContent>
          <Typography align="center">{content}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}