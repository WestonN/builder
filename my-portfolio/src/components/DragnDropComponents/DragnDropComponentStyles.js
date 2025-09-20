// Canvas Component Styles
export const canvasStyles = {
    droppableArea: {
      border: "10px solid gray",
      height: "100%",
      width: "100%",
      position: "relative",
      overflow: "hidden",
      backgroundColor: "#f5f5f5",
      borderRadius: '25px'
    }
  };
  
  // DraggableCard Component Styles
  export const draggableCardStyles = {
    card: {
      position: "absolute", // or "relative" based on isOnCanvas
      cursor: "grab",
      width: 100
    },
    cardPool: {
      position: "relative",
      cursor: "grab",
      width: 100
    },
    cardContent: {
      // Add any specific card content styles here
    },
    cardText: {
      // Add any specific text styles here
    }
  };
  
  // DroppableSlot Component Styles
  export const droppableSlotStyles = {
    slot: {
      border: "2px dashed gray",
      borderRadius: "8px",
      minHeight: "120px",
      minWidth: "120px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#fafafa",
      transition: "background 0.2s ease"
    },
    slotOver: {
      background: "#e3f2fd"
    },
    placeholder: {
      // Typography styles for placeholder text
    }
  };

  export default {
    canvasStyles,
    draggableCardStyles,
    droppableSlotStyles
  };