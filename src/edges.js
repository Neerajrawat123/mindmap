import { MarkerType } from "reactflow";

export default [
  {
    id: "horizontal-e1-2",
    source: "horizontal-1",
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#00000",
    },
    target: "horizontal-2",
  },
  {
    id: "horizontal-e1-3",
    source: "horizontal-1",
    type: "smoothstep",
    target: "horizontal-3",
  },
  {
    id: "horizontal-e1-4",
    source: "horizontal-1",
    type: "smoothstep",
    target: "horizontal-4",
  },
  {
    id: "horizontal-e1-5",
    source: "horizontal-1",
    type: "smoothstep",
    target: "horizontal-5",
  },
  {
    id: "horizontal-e1-6",
    source: "horizontal-1",
    type: "smoothstep",
    target: "horizontal-6",
  },
  {
    id: "horizontal-e2-9",
    source: "horizontal-2",
    type: "smoothstep",
    target: "horizontal-9",
  },
  {
    id: "horizontal-e2-10",
    source: "horizontal-2",
    type: "smoothstep",
    target: "horizontal-10",
  },
  {
    id: "horizontal-e3-11",
    source: "horizontal-3",
    type: "smoothstep",
    target: "horizontal-11",
  },
  {
    id: "horizontal-e3-12",
    source: "horizontal-3",
    type: "smoothstep",
    target: "horizontal-12",
  },
];
