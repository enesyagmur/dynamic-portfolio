import { useParams } from "next/navigation";
import React from "react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  return <div>ProjectDetail</div>;
};

export default ProjectDetail;
