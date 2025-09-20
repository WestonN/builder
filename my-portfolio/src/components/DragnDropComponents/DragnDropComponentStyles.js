// Canvas Component Styles
export const canvasStyles = {
    droppableArea: {
    //   border: "10px solid gray",
      height: "100%",
      width: "100%",
      position: "relative",
      overflow: "hidden",
    //   backgroundColor: "#f5f5f5",
    //   borderRadius: '25px'

    //   background: "#fffdfa", // warm white
    //   border: "2px solid #e0e0e0",
    //   borderRadius: "8px",
    //   boxShadow: "0 4px 8px rgba(0,0,0,0.1), inset 0 1px 2px rgba(0,0,0,0.05)",
    //   padding: "16px",
    //   backgroundImage: "radial-gradient(rgba(0,0,0,0.02) 1px, transparent 1px)",
    //   backgroundSize: "20px 20px", 

    background: "#3f3f3f", // dark slate base
    border: "2px solid #333",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.5), inset 0 1px 2px rgba(255,255,255,0.05)",
    padding: "16px",
    // minHeight: "400px",
    // width: "100%",
    backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
    backgroundSize: "20px 20px",
    color: "#f0f0f0" // text is still readable
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